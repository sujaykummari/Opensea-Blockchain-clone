import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5vctmy3g',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skAenNCGNyYyCns6LKMDKJLzGf3xeQAH09a3zU2jRwN8cpVco8kMooShnb3jTuudFgMTOrED6YqMZQVn8BuwWfyZ1rWJfKWSwIo3Ls67FxZof4IL0vp7YCoc2mmW1YngVajqlDX3llZl7SuosteXhah9hBXxNtxz3OFdIFDwGCsrqpNQvUQf',
  useCdn: false,
})
