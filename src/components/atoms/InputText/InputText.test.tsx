import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import InputText from './InputText'

describe('InputText', () => {
  it('renders without crashing', () => {
    const { container } = render(<InputText />)
    expect(container).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<InputText />)
    expect(asFragment()).toMatchSnapshot()
  })
})