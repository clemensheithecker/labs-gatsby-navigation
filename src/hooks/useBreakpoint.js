import { useEffect, useRef } from "react"

const useBreakpoint = (breakpoint, callback) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    function handle() {
      if (window.matchMedia(`(${breakpoint})`).matches) {
        callbackRef.current()
      }
    }

    window.addEventListener("resize", handle)
    return () => {
      window.removeEventListener("resize", handle)
    }
  }, [breakpoint])
}

export default useBreakpoint
