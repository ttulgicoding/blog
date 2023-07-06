import Image from "next/image";
import classes from "./PostList.module.css";
import Link from "next/link";

export const PostsList = ({post,}) => {

    const imageName = post.frontMatter.image == "" ? "디폴트.png" : post.frontMatter.image;

    return(
        <Link href={"/"+post.frontMatter.mainCategory+"/"+post.slug}>
        <div className={classes.postList}>
            <div className={classes.ImageContainer}>
                <Image src={"/images/"+post.frontMatter.dirName+"/"+imageName} alt={imageName} width={200} height={140}/>
            </div>
            <div className={classes.listTitle}>
                <span className={classes.postTitle}>{post.frontMatter.title}</span>
                <span className={classes.postUpdated}>{post.frontMatter.updated}</span>
            </div>
        </div>
        </Link>
    );
}