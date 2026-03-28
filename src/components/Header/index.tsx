import Nav from "./Nav";

import styles from "./styles.module.scss";
import ToolBar from "./ToolBar";

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <ToolBar />
    </header>
  );
}

export default Header;
