import { retrieveRecords } from "@/requests/uxrecord";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

export const Data = createContext()

export const StoredContext = () => useContext(Data)

export const Context = (props) => {
    const { children } = props
    const { push } = useRouter()
    const [records, setRecords] = useState([])
    const [interacts, setInteracts] = useState({
        visible: true,
        loading: false,
        openDialog: false,
        selected: null,
        name: null,
        results: []
    })
    const setInteract = (proper) => { setInteracts((prev) => ({ ...prev, ...proper })) }
    useEffect(() => {
        const gets = async () => {
            setInteract({ loading: true })
            const results = await retrieveRecords()
            setInteract({ results: results })
            setInteract({ loading: false })
        }
        gets()
    }, [])
    const ctx = {
        push,
        interacts,
        setInteract,
        records, setRecords
    }
    return (
        <Data.Provider value={ctx}>
            {children}
        </Data.Provider>
    )
}