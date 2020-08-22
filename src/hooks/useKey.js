import { useEffect, useRef } from "react"

const useKey = (key, callback) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    function handle(e) {
      if (e.key === key) {
        callbackRef.current(e)
      }
    }

    document.addEventListener("keyup", handle)
    return () => document.removeEventListener("keyup", handle)
  }, [key])
}

export default useKey
