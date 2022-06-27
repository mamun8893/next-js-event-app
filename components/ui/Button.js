import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.button}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.children}
    </button>
  );
}

export default Button;
