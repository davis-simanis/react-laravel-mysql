import { createContext, useContext, useState } from 'react';

const DocumentContext = createContext(null);

export function DocumentProvider({ children }) {
  const [documentList, setDocumentList ] = useState();

  return (
    <DocumentContext.Provider value={{ documentList, updateList: setDocumentList }}>
        {children}
    </DocumentContext.Provider>
  );
}

export function useDocumentList() {
  return useContext(DocumentContext);
}
