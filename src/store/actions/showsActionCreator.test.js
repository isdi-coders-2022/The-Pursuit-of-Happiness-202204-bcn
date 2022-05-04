import {
  editShow,
  addShowToFav,
  initialShowLoad,
  createNewShow,
} from "./showsActionCreator";
import actionTypes from "./showsActionTypes";

describe("Given a initialShowLoad function", () => {
  describe("When it's called", () => {
    test("Then it should return an object", () => {
      const expectedResult = {
        type: actionTypes.initialShowLoad,
      };

      const receivedResult = initialShowLoad();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
describe("Given a editShow function", () => {
  describe("When it's called", () => {
    test("Then it should return an object", () => {
      const expectedResult = {
        type: actionTypes.editShow,
      };

      const receivedResult = editShow();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
describe("Given a addShowToFav function", () => {
  describe("When it's called", () => {
    test("Then it should return an object", () => {
      const expectedResult = {
        type: actionTypes.addShowToFav,
      };

      const receivedResult = addShowToFav();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
describe("Given a createNewShow function", () => {
  describe("When it's called", () => {
    test("Then it should return an object", () => {
      const expectedResult = {
        type: actionTypes.createNewShow,
      };

      const receivedResult = createNewShow();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
