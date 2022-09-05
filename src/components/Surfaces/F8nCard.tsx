import { useMarketInfo } from '@f8n/foundationkit-hooks'
import { Paper } from '@mantine/core'
import { ListItem } from '@mantine/core/lib/List/ListItem/ListItem'
import React, { useEffect } from 'react'
import { useContract, useContractRead, useProvider } from 'wagmi'
import ABI from '../../utils/services/ABI.json'
type Props = {
  contractAddress: string
}

function F8nCard({ contractAddress }: Props) {
  const provider = useProvider()

  useEffect(() => {
    const data: any = fetch(
      'https://api-us-west1.tatum.io/v3/nft/collection/ETH/0x0d2166B7bF87Dab6C19D55197c774983BcC00704'
    )
      .then((res) => res.json())
      .then((data) => {
        const data2 = data.map((item: any) => {
          switch (item) {
            case item.metadata:
              return {
                id: item.id,
                name: item.metadata.metadata.name,
                image: item.metadata.metadata.image,
              }

            case !item.metadata:
              return null
          }
        })
      })
      .then((data2) => console.log(data2))
      .catch((err) => console.log(err))
  }, [])

  /* const con = useContractRead({
    addressOrName: contractAddress,
    contractInterface: ABI,
    functionName: 'CollectionContract',
    args: 'balanceOf',
  }) */

  /*     const { data } = useMarketInfo({
    provider,
    contractAddress: '0x47609b1a83B2Fc92C8AD632aE093AC61d9A85295',
    tokenId: 1,file:
  }) */
  return (
    <Paper>
      <pre>{JSON.stringify(con)}</pre>
    </Paper>
  )
}

export default F8nCard
