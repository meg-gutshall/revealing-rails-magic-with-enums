import { defineShikiSetup } from '@slidev/types'
import { h } from "hastscript";

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
    transformers: [
      {
        pre(node) {
          const rawMeta = this.options.meta?.__raw;
          const filenameMatch = rawMeta?.match(/filename="([^"]+)"/);
          const filename = filenameMatch && filenameMatch[1];

          if (!filename) return;

          const div = h(
            "div",
            {
              class: "filename",
            },
            filename
          );

          node.children.unshift(div);
        },
      }
    ],
  }
})
