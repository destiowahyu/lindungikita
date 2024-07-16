import React, { createContext, useContext, useState } from 'react';

const ShelterContext = createContext();

export const useShelters = () => useContext(ShelterContext);

export const ShelterProvider = ({ children }) => {
  const [shelters, setShelters] = useState([]);

  return (
    <ShelterContext.Provider value={{ shelters, setShelters }}>
      {children}
    </ShelterContext.Provider>
  );
};
