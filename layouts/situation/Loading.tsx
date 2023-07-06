import classes from "./Loading.module.css";

interface LoaderProps extends React.SVGProps<SVGSVGElement> {
  xmlSpace?: string;
}

export const Loading = (props: LoaderProps) => {
  return (
    <div className={classes.loadPage}>
    <div className={classes.loader}>
      <svg
        width="100px"
        height="100px"
        viewBox="0 0 50 50"
        style={{ ...props.style }}
        {...props}
      >
        <path
          fill="#000"
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
    </div>
  );
};
