import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppFooter from '../../src/components/AppFooter'
 
test('AppFooter', () => {
  render(<AppFooter />)
  expect(screen.getByRole('heading', { level: 2, name: /Get Involved/i })).toBeDefined()
})