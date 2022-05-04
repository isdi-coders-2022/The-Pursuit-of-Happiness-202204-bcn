import { showShowsList } from "./initalShowLoadActionCreator";

describe("Given an initialShowLoadActionCreator function", () => {
  describe("When it receives the string 'Friends'", () => {
    test("Then it should return an object with a property 'shows' with a value 'Friends'", () => {
      const showsTest = "Friends";
      const expectedText = "Friends";

      const expectedAction = showShowsList(showsTest);

      expect(expectedAction.shows).toBe(expectedText);
    });
  });
});
