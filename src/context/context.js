import { createContext, useContext, useState } from "react";

export const Data = createContext()

export const StoredContext = () => useContext(Data)

export const Context = ({ children }) => {
    const [name, setName] = useState(null),
        [visible, setVisible] = useState(true),
        [records, setRecords] = useState([]),
        ctx = {
            name, setName,
            visible, setVisible,
            records, setRecords
        }
    return (
        <Data.Provider value={ctx}>
            {children}
        </Data.Provider>
    )
}