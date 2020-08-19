export const commonTheme = {
  breakpoints: {
    small: "max-width: 448px",
    medium: "min-width: 768px",
    large: "min-width: 1024px",
    xLarge: "min-width: 1280px",
    mediumAlt: "max-width: 768px",
  },
  corners: {
    rounded1: "0.9em",
    rounded2: "0.65em",
    rounded3: "0.5em",
  },
  effects: {
    shadow1: "0 8px 18px rgb(0, 0, 0, 0.06), 0 4px 6px rgb(0, 0, 0, 0.09)",
    shadow2: "0 8px 18px rgb(0, 0, 0, 0.06), 0 4px 6px rgb(0, 0, 0, 0.09)",
  },
  fonts: {
    main: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ].join(","),
    sizes: {
      small: "0.875em",
      large: "1.125em",
    },
    weights: {
      normal: "400",
      medium: "500",
      semibold: "600",
    },
  },
  widths: {
    xLarge: "1280px",
  },
}
