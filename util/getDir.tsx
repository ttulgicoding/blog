import { readdirSync } from "fs";
import { join } from "path";

export const getDir = (): string[] => {
  return readdirSync(join(process.cwd(), "posts")).filter(
    (post) => !/\..+$/.test(post)
  );
};
