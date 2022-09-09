import { CollectionContractResponse, NFTDetails } from '~/types/components'

export async function getCollection(
  collectionAddress: string
): Promise<NFTDetails[] | null> {
  const NFTArray = await fetch(
    `https://api-us-west1.tatum.io/v3/nft/collection/ETH/${collectionAddress}?pageSize=12`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const data2: NFTDetails[] = data.map(
        (item: CollectionContractResponse) => {
          return item.metadata ? reshapeFromTatum(item) : null
        }
      )
      console.log(data2)
      return data2
    })
    .catch((err) => console.log(err))

  return NFTArray ? NFTArray : null
}

function reshapeFromTatum(item: CollectionContractResponse): NFTDetails {
  const imageUrl = item.metadata.metadata.image.replace(
    'ipfs://',
    'https://ipfs.io/ipfs/'
  )
  return {
    tokenId: item.tokenId,
    name: item.metadata.metadata.name,
    description: item.metadata.metadata.description,
    image: `${imageUrl}`,
  }
}
