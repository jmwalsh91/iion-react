import { Meta } from '@storybook/react'

import Collection from '../routes/Collection'

const meta: Meta = {
  title: 'Collection',
  component: Collection,
}

export default meta

export function Default(args?: any) {
  return <Collection {...args} />
}
