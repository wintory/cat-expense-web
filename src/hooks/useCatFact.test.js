import { useQuery } from '@tanstack/react-query'
import { afterAll, describe, expect, it, vi } from 'vitest'
import useCatFact from './useCatFact'

describe('useCatFact', () => {
  vi.mock('@tanstack/react-query')

  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should return default value from useCatFact', () => {
    const mockData = { data: { fact: 'Some cat fact' } }
    const mockErrors = ['Error 1', 'Error 2']
    const mockRefetch = vi.fn()
    const mockIsLoading = true

    useQuery.mockReturnValueOnce({
      data: mockData,
      errors: mockErrors,
      refetch: mockRefetch,
      isLoading: mockIsLoading,
    })

    const { catFact, isLoading, errors, refetchCatFact } = useCatFact()

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ['catFact'],
      queryFn: expect.any(Function),
      enabled: false,
    })

    expect(catFact).toBe(mockData.data.fact)
    expect(isLoading).toBe(mockIsLoading)
    expect(errors).toBe(mockErrors)
    expect(refetchCatFact).toBe(mockRefetch)
  })
})
