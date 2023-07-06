import classes from "./PostTag.module.css";

export const PostTag = ({ tagName,onClick, selected }) => {
    const tagClasses = `${classes.tag} ${selected ? classes.selected : ""}`;

  return (
    <span className={tagClasses} onClick={onClick}>
      {tagName}
    </span>
  );
};
