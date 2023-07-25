import React from 'react'
import { render, screen } from '@testing-library/react'
import Anchor from '@/components/anchor'

describe('anchor', () => {
  it('will render Anchor component', () => {
    render(<Anchor href='/test'>click me</Anchor>)
    expect(screen.getByText('click me')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'click me' })).toHaveAttribute(
      'href',
      '/test'
    )
  })
})
