import { Matrix2, Matrix3, Matrix, Vector2, Vector3, Vector } from './types';
export declare const m2Translation: (position: Vector2, decimalPlaces?: number) => Matrix2;
export declare const m3Translation: (position: Vector3, decimalPlaces?: number) => Matrix3;
/**
 * 2D Translation matrix in homogeneous coordinates.
 */
export declare const m2TranslationH: (position: Vector3, decimalPlaces?: number) => Matrix3;
/**
 * 3D Translation matrix in homogeneous coordinates.
 */
export declare const m3TranslationH: (position: Vector, decimalPlaces?: number) => Matrix;
/**
 * Rotation of an angle about the origin.
 */
export declare const m2Rotation: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix2;
/**
 * Rotation of an angle about the origin in homogeneous coordinates (clockwise).
 */
export declare const m2RotationH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
/**
 * Rotation of an angle "angleRad" around the given point (transformOrigin) in homogeneous coordinates (clockwise).
 * result_vector = TranslationMatrix(x, y) * RotationMatrix() * TranslationMatrix(-x, -y) * position_vector
 */
export declare const m2RotationAroundPointH: (angleRad: number, transformOrigin: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
export declare const m2RotateAroundPointH: (angleRad: number, transformOrigin: Vector3, position: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Rotate vector around the origin by angle "angleRad" (clockwise).
 */
export declare const v2Rotate: (angleRad: number, vector: Vector2, isClockwise?: boolean, decimalPlaces?: number) => Vector2;
/**
 * Rotate vector around the origin by angle "angleRad" (clockwise).
 */
export declare const v2RotateH: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the X axis (clockwise).
 */
export declare const m3RotationX: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
/**
 * Rotation around the X axis (clockwise) - in homogeneous coordinates
 */
export declare const m3RotationXH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix;
export declare const v3RotateX: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the Y axis (clockwise).
 */
export declare const m3RotationY: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
/**
 * Rotation around the Y axis (clockwise) - in homogeneous coordinates
 */
export declare const m3RotationYH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix;
export declare const v3RotateY: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the Z axis (clockwise).
 */
export declare const m3RotationZ: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
/**
 * Rotation around the Z axis (clockwise)- in homogeneous coordinates
 */
export declare const m3RotationZH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix;
export declare const v3RotateZ: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
export declare const m2Scale: (scaleVector: Vector2) => Matrix2;
export declare const v2Scale: (scaleVector: Vector2, vector: Vector2) => Vector2;
/**
 * homogeneous coordinates
 */
export declare const m2ScaleH: (scaleVector: Vector3) => Matrix3;
export declare const m3Scale: (scaleVector: Vector3) => Matrix3;
export declare const m3ScaleH: (scaleVector: Vector) => Matrix;
export declare const v3Scale: (scaleVector: Vector3, vector: Vector3) => Vector3;
/**
 * Stretch, parallel to the x-axis.
 */
export declare const m2ScaleX: (scale: number) => Matrix2;
/**
 * Stretch, parallel to the x-axis - homogeneous coordinates
 */
export declare const m2ScaleXH: (scale: number) => Matrix3;
/**
 * Stretch in x-direction
 */
export declare const m3ScaleX: (scale: number) => Matrix3;
/**
 * Stretch in y-direction
 */
export declare const m3ScaleY: (scale: number) => Matrix3;
/**
 * Stretch in z-direction
 */
export declare const m3ScaleZ: (scale: number) => Matrix3;
/**
 * Stretch, parallel to the y-axis.
 */
export declare const m2ScaleY: (scale: number) => Matrix2;
/**
 * Stretch, parallel to the y-axis - homogeneous coordinates
 */
export declare const m2ScaleYH: (scale: number) => Matrix3;
/**
 * Reflection about the origin.
 */
export declare const m2ReflectionOrigin: () => Matrix2;
/**
 * Reflection about the origin.
 */
export declare const m3ReflectionOrigin: () => Matrix3;
/**
 * Reflection about y=x
 */
export declare const m2ReflectionYX: () => Matrix2;
/**
 * Reflection about y=x
 */
export declare const m3ReflectionYX: () => Matrix3;
/**
 * Reflection about y=-x
 */
export declare const m2ReflectionYmX: () => Matrix2;
/**
 * Reflection in the x-axis.
 */
export declare const m2ReflectionX: () => Matrix2;
/**
 * Reflection in the y-axis.
 */
export declare const m2ReflectionY: () => Matrix2;
/**
 * Reflection in the plane x=0
 */
export declare const m3ReflectionX: () => Matrix3;
/**
 * Reflection in the plane y=0
 */
export declare const m3ReflectionY: () => Matrix3;
/**
 * Reflection in the plane z=0
 */
export declare const m3ReflectionZ: () => Matrix3;
/**
 * Shearing in y-axis, with x-axis fixed with (0,1) moving to (factor, 1)
 */
export declare const m2ShearingY: (factor: number) => Matrix2;
/**
 * Shearing in x-axis, with y-axis fixed with (1,0) moving to (1, factor)
 */
export declare const m2ShearingX: (factor: number) => Matrix2;
