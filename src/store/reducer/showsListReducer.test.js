import { loadShows, newShow } from "../actions/showsActionTypes";
import showListReducer from "./showsListReducer";

describe("Given the showListReducer", () => {
  describe("When it receive a group of three shows and action is loadShows", () => {
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
        type: loadShows,
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

      const showsLoaded = showListReducer(thisShows, action);

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

      const showsLoaded = showListReducer(thisShows, action);

      expect(showsLoaded).toEqual(expectedResult);
    });
  });
  describe("When it receive a group of three shows and action create", () => {
    test("Then it Whould return a new group equals to the given one with the new one added", () => {
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
      const newValues = { id: 4, name: "Lost" };
      const action = {
        type: newShow,
        shows: newValues,
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
        {
          id: 4,
          name: "Lost",
        },
      ];

      const showsLoaded = showListReducer(thisShows, action);

      expect(showsLoaded).toEqual(expectedResult);
    });
  });
});
