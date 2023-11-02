import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      //place currentPath in state
      setCurrentPath(window.location.pathname);
    };
    // watch for user interactions with routes
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return <NavigationContext.Provider value={{ currentPath, navigate }}>{children}</NavigationContext.Provider>;
}

export default NavigationContext;
export { NavigationProvider };
