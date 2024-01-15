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
  id: string;
};

export const teams: Team[] = [
  {
    city: "Anaheim",
    colours: {
      accent: "navy",
      bg: "red",
      identifier: "red",
      text: "yellow",
    },
    coords: { x: 12, y: 59.3 },
    icon: "👼",
    id: "LAA",
  },
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
    id: "ARI",
  },
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
    id: "ATL",
  },
  {
    city: "Baltimore",
    colours: {
      accent: "black",
      bg: "orange",
      identifier: "black",
      text: "orange",
    },
    coords: { x: 82, y: 42.3 },
    icon: "🐧",
    id: "BAL",
  },
  {
    city: "Boston",
    colours: {
      accent: "navy",
      bg: "red",
      identifier: "red",
      text: "red",
    },
    coords: { x: 89.3, y: 27.8 },
    icon: "🅱",
    id: "BOS",
  },
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
    id: "CHC",
  },
  {
    city: "Chicago",
    colours: {
      accent: "grey",
      bg: "black",
      identifier: "grey",
      text: "white",
    },
    coords: { x: 63.2, y: 39.3 },
    icon: "🧦",
    id: "CWS",
  },
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
    id: "CIN",
  },
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
    id: "CLE",
  },
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
    id: "COL",
  },
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
    id: "DET",
  },
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
    id: "HOU",
  },
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
    id: "KC",
  },
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
    id: "LAD",
  },
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
    id: "MIA",
  },
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
    id: "MIL",
  },
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
    id: "MIN",
  },
  {
    city: "New York",
    colours: {
      accent: "navy",
      bg: "grey",
      identifier: "grey",
      text: "navy",
    },
    coords: { x: 85, y: 32.7 },
    icon: "🎩",
    id: "NYY",
  },
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
    id: "NYM",
  },
  {
    city: "Oakland",
    colours: {
      accent: "yellow",
      bg: "green",
      identifier: "green",
      text: "white",
    },
    coords: { x: 6.8, y: 42.7 },
    icon: "🐘",
    id: "OAK",
  },
  {
    city: "Philadelphia",
    colours: {
      accent: "sky",
      bg: "brick",
      identifier: "brick",
      text: "white",
    },
    coords: { x: 84.1, y: 38.6 },
    icon: "🔔",
    id: "PHI",
  },
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
    id: "PIT",
  },
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
    id: "SD",
  },
  {
    city: "San Francisco",
    colours: {
      accent: "black",
      bg: "orange",
      identifier: "orange",
      text: "black",
    },
    coords: { x: 4.5, y: 42.7 },
    icon: "🌉",
    id: "SF",
  },
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
    id: "SEA",
  },
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
    id: "STL",
  },
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
    id: "TB",
  },
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
    id: "TEX",
  },
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
    id: "TOR",
  },
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
    id: "WSH",
  },
];
