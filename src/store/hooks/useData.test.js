import { renderHook, waitFor } from "@testing-library/react";
import ShowsProvider from "../context/ShowsProvider";
import useData from "./useData";

describe("Given an useData function", () => {
  describe("When the function loadNewChars is called", () => {
    test("Then it should return an array with the show 'Under the dome'", async () => {
      const expectedShow = [
        {
          id: 1,
          url: "https://www.tvmaze.com/shows/1/under-the-dome",
          name: "Under the Dome",
          type: "Scripted",
          language: "English",
          genres: ["Drama", "Science-Fiction", "Thriller"],
          status: "Ended",
          runtime: 60,
          averageRuntime: 60,
          premiered: "2013-06-24",
          ended: "2015-09-10",
          officialSite: "http://www.cbs.com/shows/under-the-dome/",
          schedule: {
            time: "22:00",
            days: ["Thursday"],
          },
          rating: {
            average: 6.5,
          },
          weight: 99,
          network: {
            id: 2,
            name: "CBS",
            country: {
              name: "United States",
              code: "US",
              timezone: "America/New_York",
            },
            officialSite: "https://www.cbs.com/",
          },
          webChannel: null,
          dvdCountry: null,
          externals: {
            tvrage: 25988,
            thetvdb: 264492,
            imdb: "tt1553656",
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
          },
          summary:
            "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
          updated: 1631010933,
          _links: {
            self: {
              href: "https://api.tvmaze.com/shows/1",
            },
            previousepisode: {
              href: "https://api.tvmaze.com/episodes/185054",
            },
          },
        },
      ];

      const wrapper = ({ children }) => (
        <ShowsProvider>{children}</ShowsProvider>
      );

      const { result } = renderHook(() => useData(), { wrapper });

      const listOfChars = await waitFor(() => result.current.loadNewChars());

      expect(listOfChars).toEqual(expectedShow);
    });
  });

  describe("When the function loadFavShows is called", () => {
    test("Then it should return an array with the show 'Arrow'", async () => {
      const expectedShow = [
        {
          id: 4,
          url: "https://www.tvmaze.com/shows/4/arrow",
          name: "Arrow",
          type: "Scripted",
          language: "English",
          genres: ["Drama", "Action", "Science-Fiction"],
          status: "Ended",
          runtime: 60,
          averageRuntime: 60,
          premiered: "2012-10-10",
          ended: "2020-01-28",
          officialSite: "http://www.cwtv.com/shows/arrow",
          schedule: {
            time: "21:00",
            days: ["Tuesday"],
          },
          rating: {
            average: 7.4,
          },
          weight: 99,
          network: {
            id: 5,
            name: "The CW",
            country: {
              name: "United States",
              code: "US",
              timezone: "America/New_York",
            },
            officialSite: "https://www.cwtv.com/",
          },
          webChannel: null,
          dvdCountry: null,
          externals: {
            tvrage: 30715,
            thetvdb: 257655,
            imdb: "tt2193021",
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg",
          },
          summary:
            "<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
          updated: 1649517970,
          _links: {
            self: {
              href: "https://api.tvmaze.com/shows/4",
            },
            previousepisode: {
              href: "https://api.tvmaze.com/episodes/1744752",
            },
          },
        },
      ];
      const wrapper = ({ children }) => (
        <ShowsProvider>{children}</ShowsProvider>
      );

      const { result } = renderHook(() => useData(), { wrapper });

      const listOfChars = await waitFor(() => result.current.loadFavShows());

      expect(listOfChars).toEqual(expectedShow);
    });
  });
});
