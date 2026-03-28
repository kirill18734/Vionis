import Collections from "./Collections";
import Documents from "./Documents";

import styles from "./styles.module.scss";

function Commands() {
  return (
    <div className={styles.commands}>
      <Collections />
      <Documents />
    </div>
  );
}

export default Commands;
