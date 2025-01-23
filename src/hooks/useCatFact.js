import { useQuery } from '@tanstack/react-query'
import { CAT_FACT_MAX_LENGTH } from '../constants/catFact'
import { getCatFact } from '../services/catFact'

const useCatFact = () => {
  const { data, errors, refetch, isLoading } = useQuery({
    queryKey: ['catFact'],
    queryFn: () => getCatFact({ maxLength: CAT_FACT_MAX_LENGTH }),
    enabled: false,
  })

  return {
    catFact: data?.data?.fact || '',
    isLoading,
    errors,
    refetchCatFact: refetch,
  }
}

export default useCatFact
