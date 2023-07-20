import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

type Props = {
  transactionId: number
}

export default function TransactionDetail ({ transactionId }: Props) {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/transactions/${transactionId}`,
    fetcher
  )

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <section>
      <h2>Transaction</h2>
      <div>transaction ID: {data.id}</div>
      <div>
        Address: <address>{data.address}</address>
      </div>
      <div>
        Time: <time>{data.timeOfTransaction}</time>
      </div>
      <div>Amount: {data.amount}</div>
      <div>Place: {data.merchant}</div>
    </section>
  )
}
