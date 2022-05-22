import fs from "fs";
import path from "path";
import { Post } from "../types";
const postsDirectory = path.join(process.cwd(), "");

export function getPost(): Post[] {
  const postPath = path.join(postsDirectory, "fake.json");
  console.log(postPath);
  const res = JSON.parse(fs.readFileSync(postPath, "utf-8"));
  return res;
}
export function getPostById(id: number) {}
