import { useState } from "react";
import Close from "../../../assets/Close";
import Hide from "../../../assets/Hide";
import Maximize from "../../../assets/Maximize";
import Minimize from "../../../assets/Minimize";

import styles from "./styles.module.scss";

function ToolBar() {
  const [isSizeMax, setIsSizeMax] = useState(false);
  return (
    <div className={styles.toolbar}>
      <div>
        <Hide />
      </div>

      <div onClick={() => setIsSizeMax(!isSizeMax)}>
        {isSizeMax ? <Maximize /> : <Minimize />}
      </div>

      <div className={styles.close}>
        <Close />
      </div>
    </div>
  );
}

export default ToolBar;
