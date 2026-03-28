import IconSearch from "../../assets/Search";
import Close from "../../assets/Close";

import styles from "./styles.module.scss";

function Search({ value, setValue }) {
  return (
    <div className={styles.search}>
      <IconSearch />
      <input
        type="search"
        placeholder="Поиск..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {value && (
        <div className={styles.clear} onClick={() => setValue("")}>
          <Close />
        </div>
      )}
    </div>
  );
}

export default Search;
