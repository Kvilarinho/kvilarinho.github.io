import { useEffect, useState } from 'react'

export default function usePageAnimation() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 50)
        return () => clearTimeout(timer)
    }, [])

    return visible
}