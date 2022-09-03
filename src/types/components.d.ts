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
