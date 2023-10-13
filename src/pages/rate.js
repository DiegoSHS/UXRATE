import RateSequence from "@/components/sequence"
import { StoredContext } from "@/context/context"
import { useEffect } from "react"

export default function Rate() {
    const { visible, push } = StoredContext()
    useEffect(() => {
        if (visible) {
            push('/')
        }
    }, [])
    return (
        <RateSequence />
    )
}