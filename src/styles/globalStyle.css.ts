import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('html, body', {
  height: '100%'
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
})

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  fontFamily: vars.font.primaryFontFamily,
  fontSize: vars.font.primaryFontSize,
  background: vars.color.backgroundColor,
  color: vars.color.onBackgroundColor,
  padding: '0 16px',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
})

globalStyle('h1, h2, h3, h4, p', {
  margin: 0
})

globalStyle('main', {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
})
