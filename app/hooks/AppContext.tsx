import { createContext, useContext, useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
// function LocalSrg() {
//   console.log(localStorage);
// }

const AppContext = createContext({});

export function MainContext({ children }: any) {
  // const [theme, setTheme] = useLocalStorage("theme", "system");
  const [theme, setTheme] = useState("theme");
  console.log(typeof window);
  console.log(localStorage.getItem("theme"));
  return (
    <AppContext
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext>
  );
}

export const useAppContext = () => useContext(AppContext);
