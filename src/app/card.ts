export type cards = {
  title: string;
  description: string;
  link: string;
  emoji: string;
};

export const cards = [
    {
      title: "Counter App",
      description: "Simple counter app",
      link: "/counter",
      emoji: "🔢",
    },
    {
      title: "Clock App",
      description: "See current date and live time",
      link: "/time",
      emoji: "🕒",
    },
    {
      title: "Stopwatch",
      description: "Track time with start, pause and reset",
      link: "/swatch",
      emoji: "⏱️",
    },
    {
      title: "Power List",
      description: "Todo list with local storage support",
      link: "/plist",
      emoji: "📝",
    },
    {
      title: "Download App",
      description: "Download apps with one click",
      link: "/e-download",
      emoji: "⬇️",
    },
  ];