import { articles } from "@/lib/articles";
import { articlesPart2 } from "@/lib/articles-part2";
import { articlesPart3 } from "@/lib/articles-part3";
import { articlesPart4 } from "@/lib/articles-part4";
import { articlesPart5 } from "@/lib/articles-part5";
import { articlesPart6 } from "@/lib/articles-part6";

export const allArticles = [
  ...articles,
  ...articlesPart2,
  ...articlesPart3,
  ...articlesPart4,
  ...articlesPart5,
  ...articlesPart6,
];

