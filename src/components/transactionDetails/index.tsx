import useTransaction from '@/hooks/useTransaction'

type Props = {
  transactionId: number
}

export default function TransactionDetail ({ transactionId }: Props) {
  const { data, isLoading, error } = useTransaction(transactionId)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

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
