import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    backgroundColor: '#FFF',
    onBackgroundColor: '#2B2B2B',
    onBackgroundHoverColor: 'green',    
    primaryColor: '#6C5CE7',
    onPrimaryColor: '#FFFFFF',
    onPrimaryHoverColor: 'pink',
    borderPrimaryColor: '#6C5CE7',
    borderPrimaryHoverColor: '#8376EB',
    borderPrimaryFocusColor: '#897DEC',
    borderPrimaryActiveColor: '#8F83ED',
    positiveColor: '#37B26C',
    negativeColor: '#E62E5C',
    warningColor: '#FFC640',
    processColor: '#0984E3'
  },
  font: {
    primaryFontFamily: "'Helvetica Neue', sans-serif",
    primaryFontSize: '16px'
  },
  space: {
    small: '4px',
    medium: '8px',
    large: '16px'
  }
})

// Theming (light / dark)
// https://formidable.com/blog/2021/vanilla-extract/
