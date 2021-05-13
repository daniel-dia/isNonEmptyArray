const isNonEmptyArray = require("./isNonEmptyArray");

describe("isNonEmptyArray", () => {
    it("should falsy if object", () => {
        expect(isNonEmptyArray({})).toBeFalsy();
    });

    it("should falsy if nullable", () => {
        expect(isNonEmptyArray(null)).toBeFalsy();
    });

    it("should falsy if boolean", () => {
        expect(isNonEmptyArray(false)).toBeFalsy();
    });

    it("should falsy if undefineable", () => {
        expect(isNonEmptyArray(undefined)).toBeFalsy();
    });

    it("should falsy if string", () => {
        expect(isNonEmptyArray("test-str")).toBeFalsy();
    });

    it("should falsy if number", () => {
        expect(isNonEmptyArray(NaN)).toBeFalsy();
    });

    it("should falsy if function", () => {
        expect(isNonEmptyArray(() => "test")).toBeFalsy();
    });

    it("should falsy if symbol", () => {
        expect(isNonEmptyArray(Symbol())).toBeFalsy();
    });

    it("should falsy if array is empty", () => {
        expect(isNonEmptyArray([])).toBeFalsy();
    });

    it("should truthy if array has elements", () => {
        expect(isNonEmptyArray(["someValue"])).toBeTruthy();
    });

    it("should truthy if array has null elements", () => {
        expect(isNonEmptyArray([null])).toBeTruthy();
    });
});