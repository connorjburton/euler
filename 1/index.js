"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiples(max) {
    return new Array(max).fill(undefined).map(function (_, idx) { return idx + 1; }).reduce(function (agg, val) {
        if (val % 3 === 0 || val % 5 === 0) {
            console.log(val);
            return agg += val;
        }
        return agg;
    }, 0);
}
exports.default = multiples;
