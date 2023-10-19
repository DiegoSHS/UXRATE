import { filteredRecords, retrieveRecords } from "@/requests/uxrecord";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

export const Data = createContext()

export const StoredContext = () => useContext(Data)

export const Context = (props) => {
    const { children } = props
    const { push } = useRouter()
    const [records, setRecords] = useState([])
    const [interacts, setInteracts] = useState({
        user: {},
        expanded: false,
        loading: false,
        openDialog: false,
        selected: null,
        name: null,
        site: null,
        results: []
    })
    const setInteract = (proper) => { setInteracts((prev) => ({ ...prev, ...proper })) }
    const dataInit = async () => {
        const { user: { email } } = interacts
        setInteract({ loading: true })
        const results = await filteredRecords(email)
        setInteract({ results: results })
        setInteract({ loading: false })
    }
    const sesionInit = async () => {
        const session = window.location.hostname === 'localhost' ? {
            user: {
                name: 'Jhon Doe',
                email: 'something@example.com',
                image: 'https://lh3.googleusercontent.com/a/AAcHTteDid88LgJbjhFjiv9paLPNOnM1pBOasbz0DKgHdZpMD3o=s96-c'
            }
        }
            : await getSession()
        setInteract({ user: session.user })
    }
    useEffect(() => {
        sesionInit()
        if (interacts.user.email) {
            dataInit()
        }
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