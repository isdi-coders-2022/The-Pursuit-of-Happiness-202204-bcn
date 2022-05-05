import showListReducer from "./showsListReducer";

describe("Given the showListReducer", () => {
  describe("When it receive a group of three shows and no action", () => {
    test("Then it Whould return a new group equals to the given one", () => {
      const thisShows = [
        {
          id: 1,
          name: "Los Soprano",
        },
        {
          id: 2,
          name: "Ozark",
        },
        {
          id: 3,
          name: "Z",
        },
      ];

      const action = {
        type: "",
        thisShows,
      };

      const expectedResult = {
        0: {
          id: 1,
          name: "Los Soprano",
        },
        1: {
          id: 2,
          name: "Ozark",
        },
        2: {
          id: 3,
          name: "Z",
        },
      };

      const showsLoaded = showListReducer(thisShows, action);

      expect(showsLoaded).toEqual(expectedResult);
    });
  });
});
