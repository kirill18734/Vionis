import Settings from "./Settings";
import Commands from "./Commands";

import styles from "./styles.module.scss";
import { useAppContext } from "../../AppContext";

function Main() {
  const { activeTab } = useAppContext();
  let tab;
  switch (activeTab) {
    case 1:
      tab = <Settings />;
      break;
    default:
      tab = <Commands />;
      break;
  }

  return <main className={styles.main}>{tab}</main>;
}

export default Main;
