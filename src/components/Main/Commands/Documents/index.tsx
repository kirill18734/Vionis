import { useAppContext } from "../../../../AppContext";

import Search from "../../../../shared/Search";

import styles from "./styles.module.scss";

function Documents() {
  const { searchDoc, setSearcDoc, documents, setDocuments } = useAppContext();

  return (
    <div className={styles.container}>
      <Search value={searchDoc} setValue={setSearcDoc} />
    </div>
  );
}

export default Documents;
