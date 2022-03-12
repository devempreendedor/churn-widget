import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import Modal from './Modal'

describe('Modal component', () => {
  beforeAll(() => {
    render(<Modal />)
  })

  it('should have the text in the modal', () => {
    expect(screen.getByText('Modal')).toBeInTheDocument()
  })

  afterAll(cleanup)
})
