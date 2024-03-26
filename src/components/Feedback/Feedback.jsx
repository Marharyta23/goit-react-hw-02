import css from "./Feedback.module.css";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { IoCalculator } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";

function Feedback({ stats, total, round }) {
  return (
    <ul className={css.list}>
      <li className={css.items}>
        <BsEmojiSmile className={css.icon} />
        <p>Good: {stats.good}</p>
      </li>
      <li className={css.items}>
        <BsEmojiNeutral className={css.icon} />
        <p>Neutral: {stats.neutral}</p>
      </li>
      <li className={css.items}>
        <BsEmojiFrown className={css.icon} />
        <p>Bad: {stats.bad}</p>
      </li>
      <li className={css.items}>
        <IoCalculator className={css.icon} />
        <p>Total: {total}</p>
      </li>
      <li className={css.items}>
        <AiOutlinePercentage className={css.icon} />
        <p>Positive: {round}%</p>
      </li>
    </ul>
  );
}

export default Feedback;
