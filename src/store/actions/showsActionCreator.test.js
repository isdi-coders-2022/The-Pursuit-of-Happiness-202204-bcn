import { showLoader } from "./showsActionCreator";

describe("Given a initialShowLoad function", () => {
  describe("When it's called and given an array of numbers [1,2,3]", () => {
    test("Then it should return an object with the array [1,2,3] as payload property", () => {
      const initialPayload = [1, 2, 3];
      const expectedProperty = [1, 2, 3];

      const testAction = showLoader(initialPayload);

      expect(testAction.shows).toStrictEqual(expectedProperty);
    });
  });
});
