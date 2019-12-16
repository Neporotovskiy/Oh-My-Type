const ohMyType = require(".");

describe("Oh My Type!", () => {
    describe("isString", () => {
        test('Check the "isString" helper with suitable value', () => {
            expect(ohMyType.isString("string")).toBe(true);
        });
        test('Check the "isString" helper with unsuitable value', () => {
            expect(ohMyType.isString(null)).toBe(false);
        });
    });
    describe("isNumber", () => {
        test('Check the "isNumber" helper with suitable value', () => {
            expect(ohMyType.isNumber(111)).toBe(true);
        });
        test('Check the "isNumber" helper with unsuitable value', () => {
            expect(ohMyType.isNumber(null)).toBe(false);
        });
    });
    describe("isBoolean", () => {
        test('Check the "isBoolean" helper with suitable value', () => {
            expect(ohMyType.isBoolean(true)).toBe(true);
        });
        test('Check the "isBoolean" helper with unsuitable value', () => {
            expect(ohMyType.isBoolean(null)).toBe(false);
        });
    });
    describe("isUndefined", () => {
        test('Check the "isUndefined" helper with suitable value', () => {
            expect(ohMyType.isUndefined(undefined)).toBe(true);
        });
        test('Check the "isUndefined" helper with unsuitable value', () => {
            expect(ohMyType.isUndefined(null)).toBe(false);
        });
    });
    describe("isNull", () => {
        test('Check the "isNull" helper with suitable value', () => {
            expect(ohMyType.isNull(null)).toBe(true);
        });
        test('Check the "isNull" helper with unsuitable value', () => {
            expect(ohMyType.isNull(undefined)).toBe(false);
        });
    });
    describe("isNaN", () => {
        test('Check the "isNaN" helper with suitable value', () => {
            expect(ohMyType.isNaN(NaN)).toBe(true);
        });
        test('Check the "isNaN" helper with unsuitable value', () => {
            expect(ohMyType.isNaN(null)).toBe(false);
        });
    });
    describe("isObject", () => {
        test('Check the "isObject" helper with suitable value', () => {
            expect(ohMyType.isObject({})).toBe(true);
        });
        test('Check the "isObject" helper with unsuitable value', () => {
            expect(ohMyType.isObject([])).toBe(false);
        });
        test('Check the "isObject" helper with unsuitable value', () => {
            expect(ohMyType.isObject(null)).toBe(false);
        });
        test('Check the "isObject" helper with unsuitable value', () => {
            expect(ohMyType.isObject(() => {})).toBe(false);
        });
    });
    describe("isArray", () => {
        test('Check the "isArray" helper with suitable value', () => {
            expect(ohMyType.isArray([])).toBe(true);
        });
        test('Check the "isArray" helper with unsuitable value', () => {
            expect(ohMyType.isArray("string")).toBe(false);
        });
    });
    describe("isSymbol", () => {
        test('Check the "isSymbol" helper with suitable value', () => {
            expect(ohMyType.isSymbol(Symbol())).toBe(true);
        });
        test('Check the "isSymbol" helper with unsuitable value', () => {
            expect(ohMyType.isSymbol(() => {})).toBe(false);
        });
        test('Check the "isSymbol" helper with unsuitable value', () => {
            expect(ohMyType.isSymbol({})).toBe(false);
        });
    });
    describe("isFunction", () => {
        test('Check the "isFunction" helper with suitable value', () => {
            expect(ohMyType.isFunction(() => {})).toBe(true);
        });
        test('Check the "isFunction" helper with unsuitable value', () => {
            expect(ohMyType.isFunction({})).toBe(false);
        });
    });
    describe("isDate", () => {
        test('Check the "isDate" helper with suitable value', () => {
            expect(ohMyType.isDate(new Date())).toBe(true);
        });
        test('Check the "isDate" helper with unsuitable value', () => {
            expect(ohMyType.isDate("string")).toBe(false);
        });
    });
});
