import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * "All", "Training", "Matches", "Exercise", "Doubles", "Singles", "Women","Men"
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Trending",
    description:
      "videos that are on the rise",
  },
  {
    _id: uuid(),
    categoryName: "Must Watch",
    description:
      "most popular videos",
  },
  {
    _id: uuid(),
    categoryName: "Watch Again",
    description:
      "videos from history",
  },
  {
    _id: uuid(),
    categoryName: "All",
    description:
      "all videos",
  },
  {
    _id: uuid(),
    categoryName: "Training",
    description:
      "badminton training videos",
  },
  {
    _id: uuid(),
    categoryName: "Matches",
    description:
      "badminton matches videos",
  },
  {
    _id: uuid(),
    categoryName: "Exercise",
    description:
      "exercise",
  },
  {
    _id: uuid(),
    categoryName: "Doubles",
    description:
      "doubles matches",
  },
  {
    _id: uuid(),
    categoryName: "Singles",
    description:
      "singles matches",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "women badminton",
  },
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "men badminton",
  },


];
