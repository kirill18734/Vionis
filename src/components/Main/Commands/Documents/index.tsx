import classNames from "classnames";
import { useAppContext } from "../../../../AppContext";

import Search from "../../../../shared/Search";

import styles from "./styles.module.scss";
import Toggle from "../../../../shared/Toggle";
import Bottom from "../../../../assets/Bottom";
import Right from "../../../../assets/Right";
import { useState } from "react";
import Close from "../../../../assets/Close";
import Add from "../../../../assets/Add";

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

  const [tempValue, setTempValue] = useState("");
  const [read, setRead] = useState(true);

  // вкл/откл
  const setCkecked = (checked) => {
    // const newActive = {
    //   [activeDoc]: { ...documents[activeDoc], active: checked },
    // };
    // setDocuments({ ...documents, ...newActive });
  };

  const stateElem = (e) => {
    const code = e.code;

    // редактирование
    if (code == "F2") edit();

    // сохранение
    if (code == "Enter") save();

    // отмена
    if (code == "Escape") cancel();
  };

  // режим редактирования
  const edit = () => {
    setTempValue(documents[activeDoc].name);
    setRead(false);
  };

  // отмена
  const cancel = () => {
    setTempValue("");
    setRead(true);
  };

  // сохранение
  const save = () => {
    if (tempValue) {
      const newName = {
        [activeDoc]: { ...documents[activeDoc], name: tempValue },
      };

      setDocuments({ ...documents, ...newName });
      setTempValue("");
      setRead(true);
    }
  };

  const setActive = (id, isHide) => {
    if (activeDoc !== id) setActiveDoc(id);
    if (read) {
      const newHide = {
        [activeDoc]: { ...documents[activeDoc], hide: !isHide },
      };

      setDocuments({ ...documents, ...newHide });
    }
  };

  const deleted = () => {
    const newDocuments = documents;
    delete newDocuments[activeDoc];
    setDocuments(newDocuments);
    setActiveDoc();
  };

  // добавление
  const add = () => {
    // const newKey = uuidv4();
    // const newCollection = {
    //   [newKey]: {
    //     id: uuidv4(),
    //     name: "Новая коллекция1",
    //     active: true,
    //   },
    // };
    // const newDocument = {
    //   [uuidv4()]: {
    //     idCol: newKey,
    //     name: "Новая категория",
    //     active: true,
    //     hide: false,
    //   },
    // };
    // const newCollections = { ...collections, ...newCollection };
    // const newDocuments = { ...documents, ...newDocument };
    // setActiveCol(newKey);
    // setCollections(newCollections);
    // setDocuments(newDocuments);
  };

  return (
    <div className={styles.documents}>
      <Search value={searchDoc} setValue={setSearcDoc} />
      {Object.entries(documents)
        .filter(
          ([i, data]) =>
            data.idCol == activeCol &&
            data.name.toLowerCase().includes(searchDoc.toLowerCase()),
        )
        .map(([id, data]) => (
          <div
            className={classNames([styles.document], {
              [styles.active]: activeDoc == id,
            })}
          >
            <div
              className={styles.header}
              tabIndex={0} // позволяет получать фокус
              onKeyDown={stateElem}
              onClick={() => setActive(id, data.hide)}
              key={id}
            >
              {data.hide ? <Right /> : <Bottom />}
              <input
                type="text"
                className={classNames([styles.text], {
                  [styles.read]: activeDoc == id && !read,
                })}
                value={activeDoc == id ? tempValue || data.name : data.name}
                onChange={(e) => setTempValue(e.target.value)}
                onBlur={save}
                readOnly={read}
              />
              {activeDoc == id && (
                <div
                  className={styles.close}
                  title="Удалить
Зажмите для удаления"
                  onClick={deleted}
                >
                  <Close />
                </div>
              )}
            </div>

            {!data.hide && (
              <div className={styles.add} onClick={add}>
                <Add />
                <span>Добавить команду</span>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Documents;
