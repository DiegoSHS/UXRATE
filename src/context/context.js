import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

export const Data = createContext()

export const StoredContext = () => useContext(Data)

export const Context = ({ children }) => {
    const { push } = useRouter()
    const [name, setName] = useState(null),
        [visible, setVisible] = useState(true),
        [selectedItem, setSelectedItem] = useState(null),
        [openDialog, setOpenDialog] = useState(false),
        [records, setRecords] = useState([]),
        ctx = {
            push,
            name, setName,
            visible, setVisible,
            records, setRecords,
            openDialog, setOpenDialog,
            selectedItem, setSelectedItem
        }
    return (
        <Data.Provider value={ctx}>
            {children}
        </Data.Provider>
    )
}