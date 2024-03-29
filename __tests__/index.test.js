import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /We are Open Sacramento/i,
        })

        expect(heading).toBeInTheDocument()
    })
})