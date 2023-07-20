import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const navContainer = style({
  width: 'fit-content',
  display: 'flex',
  margin: '0 auto'
})

export const buttonDescription = style({
  padding: vars.space.medium
})

export const buttonStateContainer = style({
  marginTop: vars.space.large,
  display: 'flex'
})

export const buttonContainer = style({
  paddingRight: vars.space.large
})
