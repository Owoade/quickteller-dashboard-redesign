import React from 'react'
import { IWrapper } from '../components/Wrapper'

interface ITransactionCtx{
    type: string,
    typeSetter: Function
}

export const TransactionContext = React.createContext({} as ITransactionCtx);

function TransactionContextProvider({ children} : IWrapper) {
 const [ type, typeSetter ] = React.useState("All")
  return (
    <TransactionContext.Provider value={ { type, typeSetter } }>
        {children}
    </TransactionContext.Provider>
  )
}

export default TransactionContextProvider