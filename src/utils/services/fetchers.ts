import { CollectionContractResponse, NFTDetails } from '~/types/components'

const etherscanKey = import.meta.env.VITE_ETHERSCAN

export async function getCollection(
  collectionAddress: string
): Promise<NFTDetails[] | null> {
  getCollection2(collectionAddress)
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
  //TODO: handle error
  return NFTArray ? NFTArray : null
}

interface DaemonCollection {
  collection: {
    id: string
    name: string
    description: string
    logo: string
    banner: string
    verified: true
    contracts: any[]
    meta: any
  }
}
export async function getCollection2(
  collectionAddress: string
): Promise<NFTDetails[] | null> {
  const NFTArray = await fetch(
    /*   `https://api-us-west1.tatum.io/v3/nft/collection/ETH/${collectionAddress}?pageSize=12` */
    `https://api.etherscan.io/api?module=contract&action=getabi&address=${collectionAddress}&apikey=${etherscanKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const data2: NFTDetails[] = data.collection.map(
        (item: DaemonCollection['collection']) => {
          return item.meta ? console.log(item) : null
        }
      )
      console.log(data2)
      return data2
    })
    .catch((err) => console.log(err))
  //TODO: handle error
  return null
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
