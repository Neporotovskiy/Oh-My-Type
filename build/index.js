function getType(target) {
    var result, type;
    result = type = Object.prototype.toString.call(target).slice(8, -1);
    if (type === "Number")
        result = (typeof Number.isNaN !== "undefined"
            ? Number.isNaN(target)
            : isNaN(target))
            ? "NaN"
            : "Number";
    return result;
}
(function () {
    "use strict";
    var helpers = {
        isString: function (target) { return getType(target) === "String"; },
        isNumber: function (target) { return getType(target) === "Number"; },
        isBoolean: function (target) { return getType(target) === "Boolean"; },
        isUndefined: function (target) { return getType(target) === "Undefined"; },
        isNull: function (target) { return getType(target) === "Null"; },
        isNaN: function (target) { return getType(target) === "NaN"; },
        isObject: function (target) { return getType(target) === "Object"; },
        isArray: function (target) { return getType(target) === "Array"; },
        isSymbol: function (target) { return getType(target) === "Symbol"; },
        isFunction: function (target) { return getType(target) === "Function"; },
        isDate: function (target) { return getType(target) === "Date"; }
    };
    if (typeof module !== "undefined" && module.exports) {
        module.exports = helpers;
    }
    else if (typeof window !== "undefined") {
        Object.keys(helpers).forEach(function (key) {
            Object.defineProperty(window, key, {
                value: helpers[key]
            });
        });
    }
    else {
        console.error("Unable to determine environment");
    }
})();
