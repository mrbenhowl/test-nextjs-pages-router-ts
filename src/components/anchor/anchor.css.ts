import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const link = style({
  fontSize: vars.font.primaryFontSize,
  color: vars.color.onBackgroundColor,

  ':hover': {
    color: vars.color.onBackgroundHoverColor
  }
})
