import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomeSectionLandingImage from '../../src/app/home/homeSectionLandingImage'
 
test('HomeSectionLandingImage', () => {
  render(<HomeSectionLandingImage />)
  expect(screen.getByRole('heading', { level: 1, name: /we are open sacramento/i })).toBeDefined()
})