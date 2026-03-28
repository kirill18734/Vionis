import { useAppContext } from "../../../../AppContext";
import classNames from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Add from "../../../../assets/Add";
import Search from "../../../../shared/Search";
import Toggle from "../../../../shared/Toggle";
import FolderOpen from "../../../../assets/FolderOpen";
import FolderClose from "../../../../assets/FolderClose";
import Close from "../../../../assets/Close";

import styles from "./styles.module.scss";

function Collections() {
  const [tempValue, setTempValue] = useState("");
  const [read, setRead] = useState(true);

  const {
    activeCol,
    setActiveCol,
    searchCol,
    setSearchCol,
    collections,
    setCollections,
    documents,
    setDocuments,
  } = useAppContext();

  const stateElem = (e) => {
    const code = e.code;

    // редактирование
    if (code == "F2") editElem();

    // сохранение
    if (code == "Enter") saveValue();

    // отмена
    if (code == "Escape") cancelElem();
  };

  // режим редактирования
  const editElem = () => {
    setTempValue(collections[activeCol].name);
    setRead(false);
  };

  // отмена
  const cancelElem = () => {
    setTempValue("");
    setRead(true);
  };

  // сохранение
  const saveValue = () => {
    if (tempValue) {
      const newName = {
        [activeCol]: { ...collections[activeCol], name: tempValue },
      };

      setCollections({ ...collections, ...newName });
      setTempValue("");
      setRead(true);
    }
  };

  // вкл/отк
  const setCkecked = (checked) => {
    const newActive = {
      [activeCol]: { ...collections[activeCol], active: checked },
    };
    console.log(newActive);
    setCollections({ ...collections, ...newActive });
  };

  // добавление
  const addCollection = () => {
    const newKey = uuidv4();
    const newCollection = {
      [newKey]: {
        id: uuidv4(),
        name: "Новая коллекция1",
        active: true,
      },
    };

    const newDocument = {
      [newKey]: {
        id: uuidv4(),
        name: "Новая категория",
        active: true,
      },
    };

    const newCollections = { ...collections, ...newCollection };
    const newDocuments = { ...documents, ...newDocument };
    setActiveCol(newKey);
    setCollections(newCollections);
    setDocuments(newDocuments);
  };

  const deleteCollection = () => {
    const listKeys = Object.keys(collections);
    const currentIndex = listKeys.findIndex((id) => id == activeCol);
    const nextItem = listKeys[currentIndex + 1] || listKeys[currentIndex - 1];

    const newCollection = collections;
    delete newCollection[activeCol];

    setCollections(newCollection);
    setActiveCol(nextItem);
  };

  return (
    <div className={styles.collections}>
      <Search value={searchCol} setValue={setSearchCol} />
      {Object.entries(collections)
        .filter(([_, data]) =>
          data.name.toLowerCase().includes(searchCol.toLowerCase()),
        )
        .map(([id, data]) => (
          <div
            className={classNames([styles.collection], {
              [styles.active]: activeCol == id,
            })}
            tabIndex={0} // позволяет получать фокус
            onKeyDown={stateElem}
            onClick={() => activeCol !== id && setActiveCol(id)}
            key={id}
          >
            <Toggle checked={data.active} setChecked={setCkecked} />
            {activeCol == id ? <FolderOpen /> : <FolderClose />}
            <input
              type="text"
              className={classNames([styles.text], {
                [styles.read]: activeCol == id && !read,
              })}
              value={activeCol == id ? tempValue || data.name : data.name}
              onDoubleClick={editElem}
              onChange={(e) => setTempValue(e.target.value)}
              onBlur={saveValue}
              readOnly={read}
            />
            {activeCol == id && (
              <div
                className={styles.close}
                title="Удалить
Зажмите для удаления"
                onClick={deleteCollection}
              >
                <Close />
              </div>
            )}
          </div>
        ))}

      <div className={styles.add} onClick={addCollection}>
        <Add />
        <span>Добавить коллекцию</span>
      </div>
    </div>
  );
}

export default Collections;
