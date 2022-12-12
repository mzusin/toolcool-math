import * as vector from './vector';
import * as matrix from './matrix';
import * as format from './format';
import * as angle from './angle';
import * as random from './random';
import * as other from './other';
import * as convert from './convert';
import * as bezierCurve from './bezier-curve';
import * as equations from './equations';

const api = {
    ...vector,
    ...matrix,
    ...format,
    ...angle,
    ...random,
    ...other,
    ...convert,
    ...bezierCurve,
    ...equations,
};

declare global {
    interface Window {
        TCMath: typeof api,
    }
}

window.TCMath = window.TCMath || api;

export * from './vector';
export * from './matrix';
export * from './format';
export * from './angle';
export * from './random';
export * from './other';
export * from './convert';
export * from './bezier-curve';
export * from './equations';