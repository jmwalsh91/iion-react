import { useMarketInfo } from '@f8n/foundationkit-hooks'
import { Paper, Title, Text } from '@mantine/core'
import { ListItem } from '@mantine/core/lib/List/ListItem/ListItem'
import React, { Suspense, useEffect } from 'react'
import { useContract, useContractRead, useProvider } from 'wagmi'
import {
  CollectionContractResponse,
  NFTDetails,
  TokenMetadata,
} from '~/types/components'
import ABI from '../../utils/services/ABI.json'
type Props = {
  contractAddress: string
}

function reshapeFromTatum(item: CollectionContractResponse): NFTDetails {
  return {
    tokenId: item.tokenId,
    name: item.metadata.metadata.name,
    description: item.metadata.metadata.description,
    image: item.metadata.metadata.image,
  }
}
function F8nCard({ contractAddress }: Props) {
  const provider = useProvider()

  const items: any = fetch(
    'https://api-us-west1.tatum.io/v3/nft/collection/ETH/0x0d2166B7bF87Dab6C19D55197c774983BcC00704?pageSize=50'
  )
    .then((res) => res.json())
    .then(async (data) => {
      const data2 = await data.map((item: any) => {
        console.log(item)
        const result = item.metadata ? reshapeFromTatum(item) : null
        return result
      })
      return data2
    })
    .then((data2) => console.log(data2))
    .catch((err) => console.log(err))

  /* const con = useContractRead({
    addressOrName: contractAddress,
    contractInterface: ABI,
    functionName: 'CollectionContract',
    args: 'balanceOf',
  }) */

  const { data } = useMarketInfo({
    provider,
    contractAddress: '0x0d2166B7bF87Dab6C19D55197c774983BcC00704',
    tokenId: 1,
  })

  return (
    <Suspense>
      {items?.map((item: NFTDetails) => {
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
