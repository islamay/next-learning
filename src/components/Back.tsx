"use client"

import { useRouter } from "next/navigation"

export default function Back() {
    const router = useRouter()
    const onBack = () => {
        router.back()
    }

    return (
        <button
            onClick={onBack} 
            className="btn absolute left-8 top-8"
        >
            Back
        </button>
    )
}