import Link from "next/link";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/Button";
import classes from "./event-item.module.css";

function EventItem({ event }) {
  const { id, title, description, location, date, image } = event;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formatedAddress = location.replace(",", "\n");
  const expolreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={expolreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
