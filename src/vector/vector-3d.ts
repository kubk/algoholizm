export class Point3D {
  constructor(public x: number, public y: number, public z: number) {}
}

export class Vector3D {
  constructor(public readonly coordinates: Point3D) {}

  static fromPoints(from: Point3D, to: Point3D) {
    return new Vector3D(new Point3D(to.x - from.x, to.y - from.y, to.z - from.z));
  }

  // Скалярное произведение
  // Смысл: насколько согласованы векторы в направлени
  dotProduct(other: Vector3D): number {
    return (
      this.coordinates.x * other.coordinates.x +
      this.coordinates.y * other.coordinates.y +
      this.coordinates.z * other.coordinates.z
    );
  }

  // Векторное произведение
  // Смысл: новый вектор перпендикулярный двум
  crossProduct(other: Vector3D): Vector3D {
    return new Vector3D(
      new Point3D(
        this.coordinates.y * other.coordinates.z - this.coordinates.z * other.coordinates.y,
        this.coordinates.z * other.coordinates.x - this.coordinates.x * other.coordinates.z,
        this.coordinates.x * other.coordinates.y - this.coordinates.y * other.coordinates.x
      )
    );
  }
}
