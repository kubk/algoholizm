import { Point2D, Vector2D } from './vector-2d';
import { describe, expect, it } from 'vitest';

describe('Vector 2D', () => {
  it('can be created', () => {
    const a = new Point2D(2, 1);
    const b = new Point2D(-2, 3);

    const ab = Vector2D.fromPoints(a, b);
    expect(ab.coordinates.x).toBe(-4);
    expect(ab.coordinates.y).toBe(2);

    const ba = Vector2D.fromPoints(b, a);
    expect(ba.coordinates.x).toBe(4);
    expect(ba.coordinates.y).toBe(-2);
  });

  it('has length', () => {
    const a = new Point2D(-3, 5);
    const b = new Point2D(1, -3);

    const ab = Vector2D.fromPoints(a, b);

    expect(ab.length).toBeCloseTo(8.9, 1);
    expect(ab.length).toBeCloseTo(8.9, 1);

    const ba = Vector2D.fromPoints(b, a);

    expect(ba.length).toBeCloseTo(8.9, 1);
    expect(ba.length).toBeCloseTo(8.9, 1);
  });

  it('calculates multiply, sum and difference', () => {
    const a = new Vector2D(new Point2D(1, -2));
    const b = new Vector2D(new Point2D(2, 3));

    const vector2a = a.multiplyBy(2);
    expect(vector2a.coordinates.x).toBe(2);
    expect(vector2a.coordinates.y).toBe(-4);

    const vectorAsumB = a.sum(b);
    expect(vectorAsumB.coordinates.x).toBe(3);
    expect(vectorAsumB.coordinates.y).toBe(1);

    const vectorAdiffB = a.difference(b);
    expect(vectorAdiffB.coordinates.x).toBe(-1);
    expect(vectorAdiffB.coordinates.y).toBe(-5);
  });
});
