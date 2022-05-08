import { rest } from "msw";

export const handlers = [
  rest.get("https://api.tvmaze.com/shows", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ])
    );
  }),
  rest.get("https://tvshows-api.onrender.com/tvshow/", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ])
    );
  }),
  rest.post("https://tvshows-api.onrender.com/tvshow/", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 6,
          url: "https://www.tvmaze.com/shows/6/the-100",
          name: "The 100",
          type: "Scripted",
          language: "English",
          genres: ["Action", "Adventure", "Science-Fiction"],
          status: "Ended",
          runtime: 60,
          averageRuntime: 60,
          premiered: "2014-03-19",
          ended: "2020-09-30",
          officialSite: "http://www.cwtv.com/shows/the-100/",
          schedule: {
            time: "20:00",
            days: ["Wednesday"],
          },
          rating: {
            average: 7.7,
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
            tvrage: 34770,
            thetvdb: 268592,
            imdb: "tt2661044",
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/257/642675.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/257/642675.jpg",
          },
          summary:
            "<p>Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying \"Ark\" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth's surface to test whether it's habitable.</p>",
          updated: 1645857439,
          _links: {
            self: {
              href: "https://api.tvmaze.com/shows/6",
            },
            previousepisode: {
              href: "https://api.tvmaze.com/episodes/1913280",
            },
          },
        },
      ])
    );
  }),
];
