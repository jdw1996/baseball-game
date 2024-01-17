export type Colour =
  | "pink"
  | "red"
  | "brick"
  | "brown"
  | "orange"
  | "yellow"
  | "gold"
  | "green"
  | "teal"
  | "sky"
  | "royal"
  | "navy"
  | "purple"
  | "grey"
  | "black"
  | "white";

export type Team = {
  city: string;
  colours: {
    accent: Colour;
    bg: Colour;
    identifier: Colour;
    text: Colour;
  };
  coords: {
    x: number;
    y: number;
  };
  icon: string;
};

export const teamsMap: Map<string, Team> = new Map([
  [
    "LAA",
    {
      city: "Anaheim",
      colours: {
        accent: "navy",
        bg: "red",
        identifier: "red",
        text: "yellow",
      },
      coords: { x: 13.1, y: 59.1 },
      icon: "👼",
      id: "LAA",
    },
  ],
  [
    "ARI",
    {
      city: "Arizona",
      colours: {
        accent: "teal",
        bg: "brick",
        identifier: "brick",
        text: "white",
      },
      coords: { x: 21.3, y: 64 },
      icon: "🐍",
    },
  ],
  [
    "ATL",
    {
      city: "Atlanta",
      colours: {
        accent: "navy",
        bg: "red",
        identifier: "navy",
        text: "white",
      },
      coords: { x: 71, y: 65.3 },
      icon: "🔨",
    },
  ],
  [
    "BAL",
    {
      city: "Baltimore",
      colours: {
        accent: "black",
        bg: "orange",
        identifier: "black",
        text: "orange",
      },
      coords: { x: 82.3, y: 42 },
      icon: "🐧",
    },
  ],
  [
    "BOS",
    {
      city: "Boston",
      colours: {
        accent: "navy",
        bg: "red",
        identifier: "red",
        text: "red",
      },
      coords: { x: 89.3, y: 27.8 },
      icon: "🅱️",
    },
  ],
  [
    "CHC",
    {
      city: "Chicago",
      colours: {
        accent: "red",
        bg: "royal",
        identifier: "royal",
        text: "white",
      },
      coords: { x: 63.2, y: 36.1 },
      icon: "🧸",
    },
  ],
  [
    "CWS",
    {
      city: "Chicago",
      colours: {
        accent: "grey",
        bg: "black",
        identifier: "grey",
        text: "white",
      },
      coords: { x: 63.2, y: 40.6 },
      icon: "🧦",
    },
  ],
  [
    "CIN",
    {
      city: "Cincinnati",
      colours: {
        accent: "red",
        bg: "black",
        identifier: "red",
        text: "white",
      },
      coords: { x: 69.3, y: 45.6 },
      icon: "🔴",
    },
  ],
  [
    "CLE",
    {
      city: "Cleveland",
      colours: {
        accent: "navy",
        bg: "red",
        identifier: "navy",
        text: "navy",
      },
      coords: { x: 73.3, y: 36.9 },
      icon: "🕷",
    },
  ],
  [
    "COL",
    {
      city: "Colorado",
      colours: {
        accent: "grey",
        bg: "purple",
        identifier: "purple",
        text: "white",
      },
      coords: { x: 35.1, y: 43.8 },
      icon: "🏔",
    },
  ],
  [
    "DET",
    {
      city: "Detroit",
      colours: {
        accent: "orange",
        bg: "navy",
        identifier: "navy",
        text: "white",
      },
      coords: { x: 70.6, y: 34.3 },
      icon: "🐅",
    },
  ],
  [
    "HOU",
    {
      city: "Houston",
      colours: {
        accent: "navy",
        bg: "orange",
        identifier: "orange",
        text: "white",
      },
      coords: { x: 51.1, y: 81 },
      icon: "🌠",
    },
  ],
  [
    "KC",
    {
      city: "Kansas City",
      colours: {
        accent: "gold",
        bg: "royal",
        identifier: "royal",
        text: "white",
      },
      coords: { x: 52.4, y: 48.7 },
      icon: "👑",
    },
  ],
  [
    "LAD",
    {
      city: "Los Angeles",
      colours: {
        accent: "grey",
        bg: "royal",
        identifier: "royal",
        text: "white",
      },
      coords: { x: 10.2, y: 58 },
      icon: "🚎",
    },
  ],
  [
    "MIA",
    {
      city: "Miami",
      colours: {
        accent: "red",
        bg: "black",
        identifier: "black",
        text: "sky",
      },
      coords: { x: 81, y: 91 },
      icon: "🐟",
    },
  ],
  [
    "MIL",
    {
      city: "Milwaukee",
      colours: {
        accent: "yellow",
        bg: "navy",
        identifier: "yellow",
        text: "yellow",
      },
      coords: { x: 62.7, y: 31.6 },
      icon: "🍺",
    },
  ],
  [
    "MIN",
    {
      city: "Minnesota",
      colours: {
        accent: "red",
        bg: "navy",
        identifier: "navy",
        text: "white",
      },
      coords: { x: 54.3, y: 27.5 },
      icon: "♊",
    },
  ],
  [
    "NYY",
    {
      city: "New York",
      colours: {
        accent: "navy",
        bg: "grey",
        identifier: "grey",
        text: "navy",
      },
      coords: { x: 84.3, y: 32.7 },
      icon: "🎩",
    },
  ],
  [
    "NYM",
    {
      city: "New York",
      colours: {
        accent: "orange",
        bg: "royal",
        identifier: "orange",
        text: "orange",
      },
      coords: { x: 86.7, y: 34.75 },
      icon: "🍎",
    },
  ],
  [
    "OAK",
    {
      city: "Oakland",
      colours: {
        accent: "yellow",
        bg: "green",
        identifier: "green",
        text: "white",
      },
      coords: { x: 7, y: 42.7 },
      icon: "🐘",
    },
  ],
  [
    "PHI",
    {
      city: "Philadelphia",
      colours: {
        accent: "sky",
        bg: "brick",
        identifier: "brick",
        text: "white",
      },
      coords: { x: 84.3, y: 38.3 },
      icon: "🔔",
    },
  ],
  [
    "PIT",
    {
      city: "Pittsburgh",
      colours: {
        accent: "black",
        bg: "yellow",
        identifier: "yellow",
        text: "black",
      },
      coords: { x: 76, y: 39.7 },
      icon: "🏴‍☠️",
    },
  ],
  [
    "SD",
    {
      city: "San Diego",
      colours: {
        accent: "yellow",
        bg: "brown",
        identifier: "brown",
        text: "white",
      },
      coords: { x: 11.9, y: 63.1 },
      icon: "⛪",
    },
  ],
  [
    "SF",
    {
      city: "San Francisco",
      colours: {
        accent: "black",
        bg: "orange",
        identifier: "orange",
        text: "black",
      },
      coords: { x: 4.3, y: 42.7 },
      icon: "🌉",
    },
  ],
  [
    "SEA",
    {
      city: "Seattle",
      colours: {
        accent: "navy",
        bg: "teal",
        identifier: "teal",
        text: "white",
      },
      coords: {
        x: 11.5,
        y: 9,
      },
      icon: "🧭",
    },
  ],
  [
    "STL",
    {
      city: "St. Louis",
      colours: {
        accent: "red",
        bg: "navy",
        identifier: "red",
        text: "white",
      },
      coords: { x: 59.3, y: 49.2 },
      icon: "🐦",
    },
  ],
  [
    "TB",
    {
      city: "Tampa Bay",
      colours: {
        accent: "navy",
        bg: "sky",
        identifier: "sky",
        text: "navy",
      },
      coords: { x: 75.4, y: 84.4 },
      icon: "☀️",
    },
  ],
  [
    "TEX",
    {
      city: "Texas",
      colours: {
        accent: "red",
        bg: "royal",
        identifier: "royal",
        text: "white",
      },
      coords: { x: 48.3, y: 68.9 },
      icon: "🤠",
    },
  ],
  [
    "TOR",
    {
      city: "Toronto",
      colours: {
        accent: "navy",
        bg: "royal",
        identifier: "royal",
        text: "white",
      },
      coords: { x: 76, y: 28 },
      icon: "🍁",
    },
  ],
  [
    "WSH",
    {
      city: "Washington",
      colours: {
        accent: "pink",
        bg: "grey",
        identifier: "pink",
        text: "white",
      },
      coords: { x: 80.6, y: 45.4 },
      icon: "🇺🇸",
    },
  ],
]);
