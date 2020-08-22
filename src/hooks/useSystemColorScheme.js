import { useEffect, useRef } from "react"

const useSystemColorScheme = (colorScheme, callback) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(prefers-color-scheme: ${colorScheme})`
    )

    function handle(e) {
      if (e.matches) {
        callbackRef.current(e)
      }
    }

    mediaQueryList.addListener(handle)
    return () => {
      mediaQueryList.removeListener(handle)
    }
  }, [colorScheme])
}

export default useSystemColorScheme
