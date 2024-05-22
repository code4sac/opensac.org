import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../src/app/home/home'

render(<Home/>)

/* 
Renders the home element and checks if all components are rendering
*/

test('HomeSectionLandingImage Renders in Home', () => {
  expect(screen.getByRole('heading', { level: 1, name: /we are open sacramento/i })).toBeDefined()
})

test('HomeSectionDefault2 Renders in Home', () => {
  expect(screen.getByRole('heading', { level: 1, name: /who we are/i })).toBeDefined()
  expect(screen.getByRole('heading', { level: 2, name: /Building a Brighter Sacramento Through Innovation and Technology/i })).toBeDefined()
})

test('HomeSectionAboutImage Renders in Home', () => {
  expect(screen.getByRole('heading', { level: 1, name: /what we do/i })).toBeDefined()
  expect(screen.getByRole('heading', { level: 2, name: /Building a Better Future in Sacramento/i })).toBeDefined()
})

test('HomeSectionServices Renders in Home', () => {
  expect(screen.getByRole('heading', { level: 1, name: /our services/i })).toBeDefined()
  expect(screen.getByRole('heading', { level: 2, name: /Explore Our Engagement Options/i })).toBeDefined()
})

test('HomeSectionDefault Renders in Home', () => {
  expect(screen.getByRole('heading', { level: 1, name: /why volunteer/i })).toBeDefined()
  expect(screen.getByRole('heading', { level: 2, name: /Empower Change with Open Sacramento/i })).toBeDefined()
})

test('HomeSectionProjects Renders in Home', () => {
  expect(screen.getByRole('heading', { level: 1, name: /our projects/i })).toBeDefined()
  expect(screen.getByRole('heading', { level: 2, name: /Driving Innovation Through Tech and Collaboration/i })).toBeDefined()
})

test('HomeSectionPartnerships Renders in Home', () => {
  expect(screen.getByRole('heading', { level: 1, name: /Our Collaborations and Partnerships/i })).toBeDefined()
})

test('HomeSectionDonate Renders in Home', () => {
  expect(screen.getByRole('heading', { level: 1, name: /Help Support Open Sacramento/i })).toBeDefined()
})


