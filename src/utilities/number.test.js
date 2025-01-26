import { describe, expect, it } from 'vitest'
import { getFormatCurrencyNumber } from './number'

describe('number utilities', () => {
  describe('getFormatCurrencyNumber', () => {
    it('should format the number as currency', () => {
      const number = 1000
      const formattedNumber = getFormatCurrencyNumber(number)
      expect(formattedNumber).toBe('$1,000.00')
    })

    it('should format the number with decimal', () => {
      const number = 9999.99
      const formattedNumber = getFormatCurrencyNumber(number)
      expect(formattedNumber).toBe('$9,999.99')
    })
  })
})
