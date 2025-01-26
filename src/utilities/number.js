import { DOLLAR_CURRENCY } from '../constants/currency'

export const getFormatCurrencyNumber = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: DOLLAR_CURRENCY,
  })

  return formatter.format(number)
}
