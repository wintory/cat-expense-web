import axios from 'axios'
import { afterAll, describe, expect, it, vi } from 'vitest'
import { getCatFact } from './catFact'

describe('catFact service', () => {
  vi.mock('axios')

  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should fetch a cat fact with default max length', async () => {
    const mockFact = { data: { fact: 'Test cat fact' } }

    axios.get.mockResolvedValue(mockFact)

    const result = await getCatFact({})
    expect(axios.get).toHaveBeenCalledWith(
      'https://catfact.ninja/fact?max_length=140'
    )
    expect(result).toEqual(mockFact)
  })

  it('should fetch a cat fact with custom max length', async () => {
    const mockFact = { data: { fact: 'Some cat fact' } }
    axios.get.mockResolvedValue(mockFact)

    const result = await getCatFact({ maxLength: 200 })
    expect(result).toEqual(mockFact)
    expect(axios.get).toHaveBeenCalledWith(
      'https://catfact.ninja/fact?max_length=200'
    )
  })

  it('should handle error when fetching cat fact', async () => {
    const mockError = new Error('Error fetching cat fact')

    axios.get.mockRejectedValue(mockError)

    const result = await getCatFact({})
    expect(result).toEqual(mockError)
  })
})
