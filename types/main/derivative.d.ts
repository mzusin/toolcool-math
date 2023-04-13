import { Vector2 } from '../types';
/**
 * u(x) and v(x) are functions ---------->
 *
 * dx(u + v) = dx(u) + dx(v)
 * dx(u - v) = dx(u) - dx(v)
 * dx(u * v) = dx(u) * v + u * dx(v)
 * dx(u / v) = (dx(u) * v - u * dx(v)) / (v ^ 2), when v(x) != 0
 */
/**
 * y = 3x+2
 * dxPolynomial(10, [[3, 1], [2, 0]])
 */
export declare const dxPolynomial: (x: number, polynomial: number[][], decimalPlaces?: number) => number;
export declare const dxQuadraticBezierCurve: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
export declare const dxSin: (x: number, decimalPlaces?: number) => number;
export declare const dxCos: (x: number, decimalPlaces?: number) => number;
export declare const dxTan: (x: number, decimalPlaces?: number) => number;
/**
 * x != Math.PI * n, where n is an integer
 */
export declare const dxCot: (x: number, decimalPlaces?: number) => number;
/**
 * -1 < x < 1
 */
export declare const dxArcSin: (x: number, decimalPlaces?: number) => number;
/**
 * -1 < x < 1
 */
export declare const dxArcCos: (x: number, decimalPlaces?: number) => number;
export declare const dxArcTan: (x: number, decimalPlaces?: number) => number;
export declare const dxArcCot: (x: number, decimalPlaces?: number) => number;
