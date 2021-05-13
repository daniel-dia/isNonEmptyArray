const isNotEmptyArray = require("./isNotEmptyArray");

describe("isNotEmptyArray - helper functionality tests", () => {
    it("should falsy if object", () => {
        expect(isNotEmptyArray({})).toBeFalsy();
    });

    it("should falsy if nullable", () => {
        expect(isNotEmptyArray(null)).toBeFalsy();
    });

    it("should falsy if boolean", () => {
        expect(isNotEmptyArray(false)).toBeFalsy();
    });

    it("should falsy if undefineable", () => {
        expect(isNotEmptyArray(undefined)).toBeFalsy();
    });

    it("should falsy if string", () => {
        expect(isNotEmptyArray("test-str")).toBeFalsy();
    });

    it("should falsy if number", () => {
        expect(isNotEmptyArray(NaN)).toBeFalsy();
    });

    it("should falsy if function", () => {
        expect(isNotEmptyArray(() => "test")).toBeFalsy();
    });

    it("should falsy if symbol", () => {
        expect(isNotEmptyArray(Symbol())).toBeFalsy();
    });

    it("should falsy if array is empty", () => {
        expect(isNotEmptyArray([])).toBeFalsy();
    });

    it("should truthy if array has elements", () => {
        expect(isNotEmptyArray(["someValue"])).toBeTruthy();
    });

    it("should truthy if array has null elements", () => {
        expect(isNotEmptyArray([null])).toBeTruthy();
    });
});