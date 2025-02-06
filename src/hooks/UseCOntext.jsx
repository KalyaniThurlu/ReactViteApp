import { createContext, useContext, useState } from "react";

// Create ThemeContext
const ThemeContext = createContext();

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <p>Current Theme:{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function Excontext() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

export default Excontext;
