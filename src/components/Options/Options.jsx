import css from "./Options.module.css";

function Options({ updateFunction, reset, total }) {
  let ifFeedbackExist;
  if (total === 0) {
    ifFeedbackExist = false;
  } else {
    ifFeedbackExist = true;
  }
  return (
    <ul className={css.list}>
      <li>
        <button
          className={css.item}
          type="button"
          onClick={() => updateFunction("good")}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.item}
          type="button"
          onClick={() => updateFunction("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.item}
          type="button"
          onClick={() => updateFunction("bad")}
        >
          Bad
        </button>
      </li>
      {ifFeedbackExist && (
        <li>
          <button className={css.item} type="button" onClick={reset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}

export default Options;
