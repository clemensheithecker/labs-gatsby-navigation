import { useReducer } from "react"
import storage from "local-storage-fallback"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_AUTO_COLOR_SCHEME":
      storage.setItem("autoColorScheme", true)
      storage.removeItem("colorScheme")
      return {
        ...state,
        autoColorScheme: true,
        darkColorScheme: getSystemColorScheme(),
      }
    case "TOGGLE_COLOR_SCHEME":
      storage.setItem("colorScheme", !state.darkColorScheme ? "dark" : "light")
      storage.setItem("autoColorScheme", false)
      return {
        ...state,
        autoColorScheme: false,
        darkColorScheme: !state.darkColorScheme,
      }
    case "AUTO_COLOR_SCHEME":
      return {
        ...state,
        darkColorScheme: setDarkColorScheme(),
      }
    default: {
      return state
    }
  }
}

function setDarkColorScheme() {
  // Check if user preference to fixed color scheme exists
  if (storage.getItem("colorScheme")) {
    if (storage.getItem("colorScheme") === "dark") {
      return true
    } else {
      return false
    }
  }
  // If not, check if user preference to auto color scheme exists
  else if (storage.getItem("autoColorScheme")) {
    if (JSON.parse(storage.getItem("autoColorScheme")) === true) {
      return getSystemColorScheme()
    } else {
      return false
    }
  }
  // If not, return auto color scheme
  else {
    return getSystemColorScheme()
  }
}

function getSystemColorScheme() {
  // Check if browser supports matchMedia
  if (!window.matchMedia) {
    return false
  }
  // If so, determine user preference to color scheme
  else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }
}

const useColorScheme = () => {
  const [state, dispatch] = useReducer(reducer, {
    autoColorScheme: storage.getItem("autoColorScheme")
      ? JSON.parse(storage.getItem("autoColorScheme"))
      : true,
    darkColorScheme: setDarkColorScheme(),
  })

  return { state, dispatch }
}

export default useColorScheme
