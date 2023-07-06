import { ISiteData, IMainCategory, ICategoryTag } from "@/types/site.types";

export const siteData: ISiteData = {
  title: "뚤기코딩의 블로그",
  description: "",
  keywords: "",
  author: "뚤기코딩",
  type: "website",
  url: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
  image: "",
};

export const mainCategory: IMainCategory = {
  mCategorys: ["프로그래밍", "자격증", "책", "취미"],
};

export const categoryTag: ICategoryTag = {
  프로그래밍: ["React", "스프링", "자바", "어노테이션"],
  자격증: ["정보처리기사", "테스트"],
  책: ["문제집"],
  취미: ["국내", "일본", "음식", "여행"],
};
