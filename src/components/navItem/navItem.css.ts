import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const root = style({
  padding: vars.space.small,
  backgroundColor: vars.color.primaryColor
})

export const link = style({
  color: vars.color.onPrimaryColor,
  ':hover': {
    color: vars.color.onPrimaryHoverColor
  },
})
