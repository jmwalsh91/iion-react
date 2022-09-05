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
      'https://api-us-west1.tatum.io/v3/nft/collection/ETH/0x0d2166B7bF87Dab6C19D55197c774983BcC00704?pageSize=50'
    )
      .then((res) => res.json())
      .then((data) => {
        const data2 = data.map((item: any) => {
          console.log(item)
          if (item.metadata) {
            console.log('case1')
            return {
              id: item.tokenId,
              name: item.metadata.metadata.name,
            }
          }
          if (!item.metadata) {
            console.log('case2')
            return null
          }
        })
        return data2
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
      <div>oh hi</div>
    </Paper>
  )
}

export default F8nCard
