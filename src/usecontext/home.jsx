// Home.js


import { useTheme } from './themecontext';

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
  
    <div style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
