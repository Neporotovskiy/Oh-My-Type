/**
 * Oh my type! Tiny and robust type checker.
 * Copyright (c) 2018 Anton Neporotovskiy
 */
type Result =
    | "String"
    | "Number"
    | "Boolean"
    | "Undefined"
    | "Null"
    | "NaN"
    | "Object"
    | "Array"
    | "Symbol"
    | "Function"
    | "Date";
/**
 * Determine correct type of target
 *
 * @param {any} target - target to determine its type
 * @returns {Result} result - Determined type of received target
 */
function getType(target: any): Result {
    let result: Result, type: Result;
    result = type = <Result>Object.prototype.toString.call(target).slice(8, -1);
    if (type === "Number")
        result = (typeof Number.isNaN !== "undefined"
          ? Number.isNaN(target)
          : isNaN(target))
            ? "NaN"
            : "Number";
    return result;
}
/**
 * UMD implementation
 */
(function(): void {
    "use strict";
    /**
     * List of helpers
     */
    const helpers = {
        isString: (target: any): boolean => getType(target) === "String",
        isNumber: (target: any): boolean => getType(target) === "Number",
        isBoolean: (target: any): boolean => getType(target) === "Boolean",
        isUndefined: (target: any): boolean => getType(target) === "Undefined",
        isNull: (target: any): boolean => getType(target) === "Null",
        isNaN: (target: any): boolean => getType(target) === "NaN",
        isObject: (target: any): boolean => getType(target) === "Object",
        isArray: (target: any): boolean => getType(target) === "Array",
        isSymbol: (target: any): boolean => getType(target) === "Symbol",
        isFunction: (target: any): boolean => getType(target) === "Function",
        isDate: (target: any): boolean => getType(target) === "Date"
    };
    /**
     * Modules declaration
     */
    if (typeof module !== "undefined" && module.exports) {
        module.exports = helpers;
    } else if (typeof window !== "undefined") {
        Object.keys(helpers).forEach(key => {
            Object.defineProperty(window, key, {
                value: helpers[key]
            });
        });
    } else {
        console.error("Unable to determine environment");
    }
})();
