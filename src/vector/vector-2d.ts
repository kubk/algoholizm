export class Point2D {
  constructor(public x: number, public y: number) {}
}

export class Vector2D {
  constructor(public readonly coordinates: Point2D) {}

  static fromPoints(from: Point2D, to: Point2D) {
    return new Vector2D(new Point2D(to.x - from.x, to.y - from.y));
  }

  get length() {
    const { x, y } = this.coordinates;

    return Math.sqrt(x ** 2 + y ** 2);
  }

  difference(other: Vector2D): Vector2D {
    return new Vector2D(
      new Point2D(
        this.coordinates.x - other.coordinates.x,
        this.coordinates.y - other.coordinates.y
      )
    );
  }

  sum(other: Vector2D): Vector2D {
    return new Vector2D(
      new Point2D(
        this.coordinates.x + other.coordinates.x,
        this.coordinates.y + other.coordinates.y
      )
    );
  }

  multiplyBy(value: number): Vector2D {
    return new Vector2D(new Point2D(this.coordinates.x * value, this.coordinates.y * value));
  }
}
