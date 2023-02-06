const randomEpisodes = [
  "Drag on a Dime",
  "Girl Groups",
  "Queens of All Media",
  "Mac-Viva Glam Commercial",
  "Drag School of Charm",
  "The Absolut Drag Ball",
  "Extra Special Edition",
  "Gone with the Window",
  "Starrbootylicious",
  "Country Queens",
  "Here Comes the Bride",
  "Snatch Game",
  "Rocker Chicks",
  "Once Upon a Queen",
  "Golden Gals",
  "The Diva Awards",
  "The Main Event Clip Show",
  "A Pair of Balls",
  "She's a Super Tease",
  "Save a Queen",
  "Glamazon Prime",
  "The Daytona Wind",
  "60s Girl Groups",
  "Menzeses",
  "Moulin Ru: The Rusical",
  "The Ross Mathews Roast",
  "Catwalk",
  "Gettin' Lucky!",
  "Henny, I Shrunk the Drag Queens!",
  "The Nice Queens Roast",
  "Pop! Goes the Queens",
  "Freaky Friday Queens",
  "Social Media: The Unverified Rusical",
  "Bossy Rossy: The RuBoot",
  "Disco-mentary",
  "The Bag Ball",
  "RuPaulmark Channel",
  "Phenomenon",
  "Condragulations",
  "The Pork Chop",
];

export const selectEpisode = () => {
  const index = Math.floor(Math.random() * randomEpisodes.length);
  return randomEpisodes[index];
};