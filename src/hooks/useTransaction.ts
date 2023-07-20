import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

// TODO: add type for return
export default function useTransaction (transactionId: number) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/transactions/${transactionId}`,
    fetcher
  )

  return {
    data,
    isLoading,
    error
  }
}