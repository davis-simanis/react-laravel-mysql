import { createContext, useContext, useState } from 'react';
import axios from 'axios';

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
  const context = useContext(DocumentContext);
  const { documentList, updateList } = context;

  if (!documentList) {
    axios
      .get('http://localhost:8081/api/documents')
      .then(({ data }) => {
        updateList(data);
      })
      .catch((error) => console.log(error));

    return {
      ...context,
      documentList: []
    };
  }

  return context;
}
