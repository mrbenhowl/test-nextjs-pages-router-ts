import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const layout = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr'
})

export const transaction = style({
  ':hover': {
    color: vars.color.onBackgroundHoverColor
  },
  cursor: 'pointer'
  
})
