import { Group, Image, Paper, Skeleton, Text, Title } from '@mantine/core'
import {
  UseQueryResult,
  useQuery /* useQueryClient */,
} from '@tanstack/react-query'
import { Suspense } from 'react'
/* import { useProvider } from 'wagmi' */

import { getCollection } from '~/utils/services/fetchers'

import { NFTDetails } from '~/types/components'

type Props = {
  contractAddress: string
}
//FIXME: Unoptimized images from IPFS provide horrible load times--and we do not have the ability to alter the file type of the original image. If we decouple this from the query to the collection contract, we lose valuable state. 
//TODO: explore more resources on foundationOS and reach out re: developer resources in this area.
function F8nCard({ contractAddress }: Props) {
  /*   const provider = useProvider()
  const queryClient = useQueryClient() */
  const { isLoading, error, data }: UseQueryResult<NFTDetails[] | null> =
    useQuery(
      ['collection'],
      //TODO: fix typing`
      () => getCollection(contractAddress)
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
