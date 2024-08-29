const symbols = {
  '}': '{',
  ']': '[',
  ')': '(',
};

export const areParenthesisValid = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c in symbols) {
      const result = stack.pop();
      if (result !== symbols[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};
