import { Point3D, Vector3D } from './vector-3d';
import { describe, expect, it } from 'vitest';

describe('Vector 3D', () => {
  it('can be created', () => {
    const a = new Point3D(-2, -1, 0);
    const b = new Point3D(0, -1, -2);

    const ab = Vector3D.fromPoints(a, b);
    expect(ab.coordinates.x).toBe(2);
    expect(ab.coordinates.y).toBe(0);
    expect(ab.coordinates.z).toBe(-2);

    const ba = Vector3D.fromPoints(b, a);
    expect(ba.coordinates.x).toBe(-2);
    expect(ba.coordinates.y).toBe(0);
    expect(ba.coordinates.z).toBe(2);
  });

  it('calculates dot product', () => {
    const a = new Vector3D(new Point3D(2, 4, 1));
    const b = new Vector3D(new Point3D(2, 2, 3));

    expect(a.dotProduct(b)).toBe(15);
  });

  it('calculates cross product', () => {
    const a = new Vector3D(new Point3D(1, 2, 3));
    const b = new Vector3D(new Point3D(2, 1, -2));

    const crossProduct = a.crossProduct(b);

    expect(crossProduct.coordinates.x).toBe(-7);
    expect(crossProduct.coordinates.y).toBe(8);
    expect(crossProduct.coordinates.z).toBe(-3);
  });
});
