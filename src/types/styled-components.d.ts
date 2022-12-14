import theme from './theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    grid: {
      container: string
      gutter: string
    }
    border: {
      radius: string
    }
    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
      }
    }
    colors: {
      primary: string
      secondary: string
      mainBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
    layers: {
      base: number
      overlay: number
      alwaysOnTop: number
    }
  }
}
