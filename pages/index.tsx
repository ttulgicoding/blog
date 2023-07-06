import { AppLayout } from "@/layouts/AppLayout";
import { mainCategory } from "@/data/config.data";
import { TitleCard } from "@/layouts/content/TitleCard";
import classes from "./index.module.css";
import Link from "next/link";

export const Home = () => {


  return (
    // <AppLayout title="홈">
    //   <div className={classes.mainPage}>
    //     {mainCategory.mCategorys.map((mCategory) => (
    //       <TitleCard key={mCategory} mCategory={mCategory} />
    //     ))}
    //   </div>
    //   <hr style={{width:"60%"}}/>
    // </AppLayout>
    <div className={classes.mainPage}>
      <a href="https://special-thrush-8e8.notion.site/b23346defae741abb31d5bde4536b742?pvs=4" className={classes.aa}>
        노션 페이지 링크
      </a>
      </div>
  );
};

export default Home;
