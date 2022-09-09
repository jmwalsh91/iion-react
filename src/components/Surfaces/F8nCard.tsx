import { Paper, Title, Text, Skeleton, Group, Image } from '@mantine/core'
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { Suspense } from 'react'
import { useProvider } from 'wagmi'

import { getCollection } from '~/utils/services/fetchers'

import { NFTDetails } from '~/types/components'
type Props = {
  contractAddress: string
}

function F8nCard({ contractAddress }: Props) {
  const provider = useProvider()
  const queryClient = useQueryClient()
  const { isLoading, error, data }: UseQueryResult<NFTDetails[] | null> =
    useQuery(
      ['collection'],
      //TODO: fix typing`
      () => getCollection('0x0d2166B7bF87Dab6C19D55197c774983BcC00704')
    )
  /* const con = useContractRead({
    addressOrName: contractAddress,
    contractInterface: ABI,
    functionName: 'CollectionContract',
    args: 'balanceOf',
  }) */

  /*   const { data } = useMarketInfo({
    provider,
    contractAddress: '0x0d2166B7bF87Dab6C19D55197c774983BcC00704',
    tokenId: 1,
  }) */
  if (isLoading) {
    return <Skeleton height="3rem" />
  }
  if (error) {
    return <div>{error as string}</div>
  }

  return (
    <Suspense>
      <Group>
        {data?.map((item: NFTDetails) => {
          return (
            <Paper
              key={item.tokenId}
              color="gray"
              shadow="lg"
              sx={{
                width: '25rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                borderRadius: '3rem',
                border: '2px solid #eaeaea',
                boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Title>{item.name} </Title>
              <Image src={item.image} height="20rem" />
              <Text>{item.description} </Text>
            </Paper>
          )
        })}
      </Group>
    </Suspense>
  )
}

export default F8nCard
