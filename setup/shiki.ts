import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'slack-dark',
      light: 'slack-ochin',
    },
    langs: [
      'console',
      'rb',
      'sh',
    ],
  }
})
