export interface CollectionCardProps {
  owner: string
  title: string
  description: string
  image: string
  url: string
  bg?: string
}

export interface BoardProps {
  image: string
  title: string
}

export interface BoardDetailProps {
  owner: string
  title: string
  description: string
  image: string
  price: number
  shareUrl: string
  buyUrl: string
}

export interface TokenMetadata {
  url: string
  metadata?: {
    name: string
    description: string
    image: string
  }
  tokenId: string
}
export interface CollectionContractResponse {
  meta: any
  tokenId: string
  metadata: TokenMetaData
}

export interface NFTDetails {
  tokenId: string
  name: string
  description: string
  image: string
}

export interface ResponsiveGridProps {
  slot1: React.ReactNode
  slot2: React.ReactNode
  slot3: React.ReactNode
  slot4: React.ReactNode
}
