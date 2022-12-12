"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function mergeArray(firstArray, secondArray) {
    var resultArrray = firstArray;
    var i = 0;
    var j = 0;
    while (j < secondArray.length && i < resultArrray.length) {
        //  console.log(resultArrray.length,secondArray.length,resultArrray[i],secondArray[j],resultArrray)
        if (resultArrray[i] >= secondArray[j]) {
            // Insert element in resultArray
            resultArrray.splice(i, 0, secondArray[j]);
            if (j < secondArray.length) {
                j++;
            }
            if (i < resultArrray.length) {
                i++;
            }
        }
        else {
            if (i < resultArrray.length) {
                i++;
            }
        }
        //if reach limit of result array index but still have remainig in secondArray -> insert all
        if (i == resultArrray.length) {
            resultArrray.splice.apply(resultArrray, __spreadArray([i, 0], secondArray.slice(j, secondArray.length), false));
            break;
        }
    }
    return resultArrray;
}
//same number and same size two array *test case1
console.log("testcase1: " + mergeArray([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]));
//differrent number but same size two array *test case2
console.log("testcase2: " + mergeArray([1, 2, 3, 4, 5, 6, 7, 8], [0, 5, 7, 8, 10, 11, 12, 13]));
//differrent number and 1st array larger size than 2nd array *test case3
console.log("testcase3: " + mergeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [0, 0, 2, 6, 15]));
//differrent number and 1st array smaller sizethan 2nd array *test case4
console.log("testcase4: " + mergeArray([0, 0, 2, 6, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
//repetitive number in two same size array *test case5
console.log("testcase5: " + mergeArray([0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1]));
