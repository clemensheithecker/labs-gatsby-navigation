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

    const update = () => handle()

    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("resize", update)
    }
  }, [breakpoint])
}

export default useBreakpoint
