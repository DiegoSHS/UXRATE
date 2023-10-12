import RateSequence from "@/components/sequence";
import { StoredContext } from "@/context/context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Rate() {
    const { push } = useRouter()
    const { visible } = StoredContext()
    useEffect(() => {
        if(visible){
            push('/')
        }
    }, [])
    return (<RateSequence />)
}