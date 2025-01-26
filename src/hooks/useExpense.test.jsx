import { renderHook } from '@testing-library/react-hooks'
import { useForm } from 'react-hook-form'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import useExpense from './useExpense'

describe('useExpense', () => {
  vi.mock('react-hook-form', () => ({
    useForm: vi.fn(),
  }))

  let mockRegister
  let mockHandleSubmit
  let mockReset
  let mockClearErrors
  let mockSetValue
  let mockTrigger

  beforeEach(() => {
    mockRegister = vi.fn()
    mockHandleSubmit = vi.fn()
    mockReset = vi.fn()
    mockClearErrors = vi.fn()
    mockSetValue = vi.fn()
    mockTrigger = vi.fn()

    useForm.mockReturnValue({
      register: mockRegister,
      handleSubmit: mockHandleSubmit,
      formState: { errors: {} },
      reset: mockReset,
      clearErrors: mockClearErrors,
      setValue: mockSetValue,
      trigger: mockTrigger,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return default values', () => {
    const wrapper = ({ children }) => <div>{children}</div>
    const { result } = renderHook(() => useExpense(), { wrapper })

    expect(result.current.isOpenExpenseModal).toBe(false)
    expect(result.current.expenseData).toEqual([])
    expect(result.current.selectedExpense).toEqual([])
  })
})
