module.exports = function isNonEmptyArray(array) {
    return Array.isArray(array) && array.length > 0;
};