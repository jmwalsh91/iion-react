import { useMarketInfo } from '@f8n/foundationkit-hooks'
import { Paper, Title, Text, Skeleton } from '@mantine/core'
import { ListItem } from '@mantine/core/lib/List/ListItem/ListItem'
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import React, { Suspense, useEffect } from 'react'
import { useContract, useContractRead, useProvider } from 'wagmi'
import { NFTDetails } from '~/types/components'
import { getCollection } from '~/utils/services/fetchers'
import ABI from '../../utils/services/ABI.json'
type Props = {
  contractAddress: string
}

function F8nCard({ contractAddress }: Props) {
  const provider = useProvider()
  const queryClient = useQueryClient()
  const { isLoading, error, data }: UseQueryResult<NFTDetails[] | null> =
    useQuery(
      ['collection'],
      //TODO: fix typing
      () => getCollection('0x0d2166B7bF87Dab6C19D55197c774983BcC00704') as any
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
      {data?.map((item: NFTDetails) => {
        return (
          <Paper key={item.tokenId}>
            <Title>{item.name} </Title>
            <Text>{item.description} </Text>
          </Paper>
        )
      })}
    </Suspense>
  )
}

export default F8nCard
