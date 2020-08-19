import { useEffect, useRef } from "react"

const useKey = (key, callback) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    function handle(event) {
      if (event.key === key) {
        callbackRef.current(event)
      }
    }

    document.addEventListener("keyup", handle)
    return () => document.removeEventListener("keyup", handle)
  }, [key])
}

export default useKey
