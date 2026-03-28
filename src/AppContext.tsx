import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export function MainContect({ children }) {
  const [collections, setCollections] = useState({});
  const [activeCol, setActiveCol] = useState();
  const [searchCol, setSearchCol] = useState("");

  const [documents, setDocuments] = useState({});
  const [activeCat, setActiveCat] = useState();

  const [activeTab, setActiveTab] = useState(0);

  return (
    <AppContext
      value={{
        collections,
        setCollections,
        activeTab,
        setActiveTab,
        activeCol,
        setActiveCol,
        documents,
        setDocuments,
        searchCol,
        setSearchCol,

        activeCat,
        setActiveCat,
      }}
    >
      {children}
    </AppContext>
  );
}

export const useAppContext = () => useContext(AppContext);
