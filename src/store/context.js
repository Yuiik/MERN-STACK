import React, { useState } from 'react'
import codepenData from './codepenContext'
import portfolioData from './portfolioContext'

const DataContext = React.createContext()

const DataProvider = ({ children }) => {
  const [codepenItems, setCodepenItems] = useState(codepenData)
  const [portfolioItems, setPortfolioItems] = useState(portfolioData)

  return (
    <DataContext.Provider value={{ codepenItems, portfolioItems }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext }
