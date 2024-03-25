import css from "./Feedback.module.css";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { IoCalculator } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";

function Feedback({ stats, total }) {
  return (
    <ul className={css.list}>
      <li className={css.items}>
        <BsEmojiSmile class={css.icon} />
        <p>Good: {stats.good}</p>
      </li>
      <li className={css.items}>
        <BsEmojiNeutral class={css.icon} />
        <p>Neutral: {stats.neutral}</p>
      </li>
      <li className={css.items}>
        <BsEmojiFrown class={css.icon} />
        <p>Bad: {stats.bad}</p>
      </li>
      <li className={css.items}>
        <IoCalculator class={css.icon} />
        <p>Total: {total}</p>
      </li>
      <li className={css.items}>
        <AiOutlinePercentage class={css.icon} />
        <p>Positive: {Math.round((stats.good / total) * 100)}%</p>
      </li>
    </ul>
  );
}

export default Feedback;
