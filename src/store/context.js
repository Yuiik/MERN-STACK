import React from 'react'
import codepenData from './codepenContext'
import portfolioData from './portfolioContext'
const DataContext = React.createContext()

const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider
      value={{ codepenItems: codepenData, portfolioItems: portfolioData }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext }
