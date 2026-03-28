import classNames from "classnames";
import { useAppContext } from "../../../AppContext";
import Commands from "../../../assets/Commands";
import Settings from "../../../assets/Settings";
import styles from "./styles.module.scss";

function Nav() {
  const { activeTab, setActiveTab } = useAppContext();

  const tabs = [
    { id: 0, name: "Команды", tag: <Commands /> },
    { id: 1, name: "Настройки", tag: <Settings /> },
  ];

  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={classNames({ [styles.active]: activeTab == tab.id })}
          onClick={() => activeTab !== tab.id && setActiveTab(tab.id)}
        >
          {tab.tag}
          {tab.name}
        </div>
      ))}
    </nav>
  );
}

export default Nav;
