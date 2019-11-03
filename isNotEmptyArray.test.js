const isNotEmptyArray = require("./isNotEmptyArray");

describe("isNotEmptyArray - helper functionality tests", () => {
  /* mock values */
  const obj = {},
    emptyArray = [],
    nullable = null,
    boolean = false,
    undefineable = undefined,
    str = "test-str",
    number = NaN,
    fn = () => "test",
    symbol = Symbol(),
    notEmptyArray = ["test"];
  it("test isNotEmptyArray with falsy types", () => {
    expect(isNotEmptyArray(obj)).toBeFalsy();
    expect(isNotEmptyArray(emptyArray)).toBeFalsy();
    expect(isNotEmptyArray(nullable)).toBeFalsy();
    expect(isNotEmptyArray(boolean)).toBeFalsy();
    expect(isNotEmptyArray(undefineable)).toBeFalsy();
    expect(isNotEmptyArray(str)).toBeFalsy();
    expect(isNotEmptyArray(number)).toBeFalsy();
    expect(isNotEmptyArray(fn)).toBeFalsy();
    expect(isNotEmptyArray(symbol)).toBeFalsy();
  });
  it("test isNotEmptyArray with trusty types", () => {
    expect(isNotEmptyArray(notEmptyArray)).toEqual(notEmptyArray);
  });
});
