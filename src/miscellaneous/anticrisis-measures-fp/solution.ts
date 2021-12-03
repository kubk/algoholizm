type Employee = Readonly<{
  id: number;
  position: 'manager' | 'marketer' | 'engineer' | 'analyst';
  rank: 1 | 2 | 3;
}>;

type Department = Readonly<{
  title: string;
  employee: Employee[];
  head: Employee;
}>;

type EmployeeRate = Readonly<{
  rankMultiplier: { [key in Employee['rank']]: number };
  position: {
    [key in Employee['position']]: {
      salary: number;
      coffee: number;
      payload: number;
    };
  };
}>;

const employeeRate: EmployeeRate = {
  position: {
    engineer: { salary: 200, coffee: 5, payload: 50 },
    marketer: { salary: 400, coffee: 15, payload: 150 },
    manager: { salary: 500, coffee: 20, payload: 200 },
    analyst: { salary: 800, coffee: 50, payload: 5 },
  },
  rankMultiplier: {
    1: 1,
    2: 1.25,
    3: 1.5,
  },
};

const calcSalary = (
  department: Department,
  employeeRate: EmployeeRate,
  employee: Employee
): number => {
  const rankMultiplier = employeeRate.rankMultiplier[employee.rank];
  const salary = employeeRate.position[employee.position].salary;
  const totalSalary = salary * rankMultiplier;
  return employee.id === department.head.id ? totalSalary * 1.5 : totalSalary;
};

const calcCoffee = (
  department: Department,
  employeeRate: EmployeeRate,
  employee: Employee
): number => {
  const coffee = employeeRate.position[employee.position].coffee;
  return employee.id === department.head.id ? coffee * 2 : coffee;
};

const calcPayload = (
  department: Department,
  employeeRate: EmployeeRate,
  employee: Employee
): number => {
  const payload = employeeRate.position[employee.position].payload;
  return employee.id === department.head.id ? 0 : payload;
};

const calcStats = (employeeRate: EmployeeRate, departments: Department[]) => {
  const aggregateDepartmentRow = (department: Department) => {
    const employee = [...department.employee, department.head];
    const salary = employee.reduce(
      (acc, emp) => acc + calcSalary(department, employeeRate, emp),
      0
    );
    const coffee = employee.reduce(
      (acc, emp) => acc + calcCoffee(department, employeeRate, emp),
      0
    );
    const payload = employee.reduce(
      (acc, emp) => acc + calcPayload(department, employeeRate, emp),
      0
    );
    if (payload === 0) {
      throw new Error('Division by zero');
    }

    return {
      title: department.title,
      count: employee.length,
      coffee,
      salary,
      payload,
      avg: parseFloat((salary / payload).toFixed(2)),
    };
  };

  type Row = ReturnType<typeof aggregateDepartmentRow>;

  const stats = departments.map(aggregateDepartmentRow);
  const totals = stats.reduce((totals, row: Row) => {
    return {
      title: 'Totals',
      count: (totals.count || 0) + row.count,
      coffee: (totals.coffee || 0) + row.coffee,
      payload: (totals.payload || 0) + row.payload,
      salary: (totals.salary || 0) + row.salary,
      avg: parseFloat(((totals.avg || 0) + row.avg).toFixed(2)),
    };
  }, {} as Row);

  const average = {
    title: 'Avg',
    count: totals.count / departments.length,
    coffee: totals.coffee / departments.length,
    payload: totals.payload / departments.length,
    salary: totals.salary / departments.length,
    avg: parseFloat((totals.salary / totals.payload).toFixed(2)),
  };

  return stats
    .concat({} as Row)
    .concat(average)
    .concat(totals);
};

const antiCrisisMeasureFirst = (departments: Department[]): Department[] => {
  return departments.map((department) => {
    const canBeFired = (employee: Employee) => {
      return employee.position === 'engineer' && employee.id !== department.head.id;
    };

    const matchingEngineers = department.employee
      .filter(canBeFired)
      .sort((left, right) => left.rank - right.rank);

    const engineersToFire = matchingEngineers
      .slice(0, Math.ceil(matchingEngineers.length * 0.4))
      .map((engineer) => engineer.id);

    return {
      ...department,
      employee: department.employee.filter(
        (employee) => engineersToFire.indexOf(employee.id) === -1
      ),
    };
  });
};

const antiCrisisMeasureSecond = (
  employeeRate: EmployeeRate,
  departments: Department[]
): [EmployeeRate, Department[]] => {
  const updatedEmployeeRate: EmployeeRate = {
    ...employeeRate,
    position: {
      ...employeeRate.position,
      analyst: {
        ...employeeRate.position.analyst,
        salary: 1100,
        coffee: 75,
      },
    },
  };

  const updatedDepartments = departments.map((department): Department => {
    const analysts = department.employee
      .filter((employee) => employee.position === 'analyst')
      .sort((left, right) => right.rank - left.rank);

    if (analysts.length) {
      return {
        ...department,
        head: analysts[0],
        employee: department.employee
          .filter((employee) => employee.id !== analysts[0].id)
          .concat(department.head),
      };
    }

    return department;
  });

  return [updatedEmployeeRate, updatedDepartments];
};

const antiCrisisMeasureThird = (departments: Department[]): Department[] => {
  const canBePromoted = (employee: Employee) => {
    return employee.position === 'manager' && (employee.rank === 1 || employee.rank === 2);
  };

  return departments.map((department) => {
    const matchingManagers = [...department.employee, department.head].filter(canBePromoted);

    const managersToPromote = matchingManagers
      .slice(0, Math.ceil(matchingManagers.length * 0.5))
      .map((manager) => manager.id);

    const tryPromote = (employee: Employee): Employee => {
      return {
        ...employee,
        rank:
          managersToPromote.indexOf(employee.id) === -1
            ? employee.rank
            : ((employee.rank + 1) as Employee['rank']),
      };
    };

    return {
      ...department,
      head: tryPromote(department.head),
      employee: department.employee.map(tryPromote),
    };
  });
};

const generateEmployee = (() => {
  let i = 0;
  return (length: number, employee: Pick<Employee, 'rank' | 'position'>) => {
    return Array.from({ length: length }, () => ({ ...employee, id: i++ }));
  };
})();

const departments: Department[] = [
  {
    title: 'Procurement',
    head: generateEmployee(1, { position: 'manager', rank: 2 })[0],
    employee: [
      ...generateEmployee(9, { position: 'manager', rank: 1 }),
      ...generateEmployee(3, { position: 'manager', rank: 2 }),
      ...generateEmployee(2, { position: 'manager', rank: 3 }),
      ...generateEmployee(2, { position: 'marketer', rank: 1 }),
    ],
  },
  {
    title: 'Sales',
    head: generateEmployee(1, { position: 'marketer', rank: 2 })[0],
    employee: [
      ...generateEmployee(12, { position: 'manager', rank: 1 }),
      ...generateEmployee(6, { position: 'marketer', rank: 1 }),
      ...generateEmployee(3, { position: 'analyst', rank: 1 }),
      ...generateEmployee(2, { position: 'analyst', rank: 2 }),
    ],
  },
  {
    title: 'Advertising',
    head: generateEmployee(1, { position: 'marketer', rank: 3 })[0],
    employee: [
      ...generateEmployee(1, { position: 'marketer', rank: 3 }),
      ...generateEmployee(15, { position: 'marketer', rank: 1 }),
      ...generateEmployee(10, { position: 'marketer', rank: 2 }),
      ...generateEmployee(8, { position: 'manager', rank: 1 }),
    ],
  },
  {
    title: 'Logistics',
    head: generateEmployee(1, { position: 'manager', rank: 1 })[0],
    employee: [
      ...generateEmployee(1, { position: 'manager', rank: 1 }),
      ...generateEmployee(13, { position: 'manager', rank: 1 }),
      ...generateEmployee(5, { position: 'manager', rank: 2 }),
      ...generateEmployee(5, { position: 'engineer', rank: 1 }),
    ],
  },
];

console.table(calcStats(employeeRate, departments));
console.table(calcStats(employeeRate, antiCrisisMeasureFirst(departments)));
console.table(calcStats(...antiCrisisMeasureSecond(employeeRate, departments)));
console.table(calcStats(employeeRate, antiCrisisMeasureThird(departments)));
