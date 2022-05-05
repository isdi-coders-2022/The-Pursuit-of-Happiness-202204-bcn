import showsReducer from "./showsReducer";

describe("Given the showsReducer", () => {
  describe("When it receive a group of three shows and action loadShows", () => {
    test("Then it should return a new group equals to the given one", () => {
      const shows = [
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
        type: "load-shows",
        shows,
      };

      const expectedResult = [
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

      const showsLoaded = showsReducer(shows, action);

      expect(showsLoaded).toEqual(expectedResult);
    });
  });

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

      const expectedResult = [
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

      const showsLoaded = showsReducer(thisShows, action);

      expect(showsLoaded).toEqual(expectedResult);
    });
  });
});
