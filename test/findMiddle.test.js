import findMiddle from "../findMiddle";
import assert from "assert";

describe("findMiddle", function () {
  it("should return the 2nd index without the true parameter", function () {
    let array = [1, 2, 3, 4];
    assert.strictEqual(findMiddle(array), 3);
  });

  it("should return the middle two indices index with the true parameter", function () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    assert.strictEqual(findMiddle(array, true), 4);
  });

  it("should return the 4th index without the true parameter", function () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.strictEqual(findMiddle(array), 5)
  });

  it("should return error if array is less than 1", function () {
    let array = [];
    assert.throws(()=> findMiddle(array), Error, "The array has to have a length greater than one");
  });

  it("should return error because it is not an array", function () {
    let array = "test";
    assert.throws(()=> findMiddle(array), Error, "The array parameter must be of type array");
  });
});


