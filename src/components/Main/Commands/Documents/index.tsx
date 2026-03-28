import classNames from "classnames";
import { useAppContext } from "../../../../AppContext";

import Search from "../../../../shared/Search";

import styles from "./styles.module.scss";
import Toggle from "../../../../shared/Toggle";

function Documents() {
  const {
    searchDoc,
    setSearcDoc,
    documents,
    setDocuments,
    activeDoc,
    setActiveDoc,
    activeCol,
  } = useAppContext();

  // вкл/откл
  const setCkecked = (checked) => {
    // const newActive = {
    //   [activeDoc]: { ...documents[activeDoc], active: checked },
    // };
    // setDocuments({ ...documents, ...newActive });
  };

  return (
    <div className={styles.documents}>
      <Search value={searchDoc} setValue={setSearcDoc} />
      {Object.entries(documents)
        .filter(
          ([id, data]) =>
            id == activeCol &&
            data.name.toLowerCase().includes(searchDoc.toLowerCase()),
        )
        .map(([id, data]) => (
          <div
            className={classNames([styles.document], {
              [styles.active]: activeDoc == id,
            })}
            tabIndex={0} // позволяет получать фокус
            onClick={() => activeCol !== id && setActiveCol(id)}
            key={id}
          ></div>
        ))}
    </div>
  );
}

export default Documents;
