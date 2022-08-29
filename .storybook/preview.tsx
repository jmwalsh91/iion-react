

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <div style={{ padding: '3rem' }}>
      <Story />
    </div>

  ),
]
