import styles from "./styles.module.scss";
import classNames from "classnames";

function Toggle({ checked, setChecked }) {
  return (
    <label
      className={classNames([styles.label, { [styles.checked]: checked }])}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span></span>
    </label>
  );
}

export default Toggle;
