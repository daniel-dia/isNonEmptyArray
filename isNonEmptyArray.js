function isNonEmptyArray(array) {
    return Array.isArray(array) && array.length > 0;
}

module.exports = isNonEmptyArray;