import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Label from './Label'

describe('<Label />', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Label as="p">Default Label</Label>)
    expect(getByText('Default Label')).toBeInTheDocument()
  })

  it('renders as a span by default', () => {
    const { container } = render(<Label as="p">Test Span</Label>)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('renders as a h1 when specified', () => {
    const { container } = render(<Label as="h1">Test H1</Label>)
    expect(container.querySelector('h1')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Label as="p" className="custom-class">
        Custom Class
      </Label>
    )
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('applies custom id', () => {
    const { container } = render(
      <Label as="p" id="custom-id">
        Custom ID
      </Label>
    )
    expect(container.querySelector('#custom-id')).toBeInTheDocument()
  })
})
