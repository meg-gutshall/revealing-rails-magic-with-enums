---
theme: dracula
title: Revealing Rails Magic with Enums
info: |
  "Rails magic" is a term many people use to describe the ease with which Rails helps you go from zero to working app so quickly. However, like all other frameworks, there’s no magic to be found – only code!

  In this talk, you’ll get a peek behind the curtain as we break down the ActiveRecord Enums module. You’ll learn what it is, how/when to use it, and some cool tricks it provides. Even if you’re not a Rails developer, you will still come away from this talk with new-found knowledge on how to traverse a codebase and gain a better understanding of features built into your language of choice.
author: Meg Gutshall
keywords: rails,enums,ruby

# enable presenter mode, can be boolean, 'dev' or 'build'
presenter: dev
# enable browser exporter, can be boolean, 'dev' or 'build'
browserExporter: dev
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: revealing-rails-magic-with-enums-slide-deck
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# controls whether texts in slides are selectable
selectable: true
# enable Slidev's context menu, can be boolean, 'dev' or 'build'
contextMenu: true
# enable wake lock, can be boolean, 'dev' or 'build'
wakeLock: true
# take snapshot for each slide in the overview
overviewSnapshots: false

transition: slide-left
htmlAttrs:
  dir: ltr
  lang: en
favicon: "/images/favicon.ico"
# SEO meta tags
seoMeta:
  ogTitle: Revealing Rails Magic with Enums
  ogDescription: Get a peek behind the curtain as we break down the magic of ActiveRecord Enums through traversing Rails' source code
  # ogImage: https://cover.sli.dev
  # ogUrl: https://example.com
  # twitterCard: summary_large_image
  twitterTitle: Revealing Rails Magic with Enums
  twitterDescription: Get a peek behind the curtain as we break down the magic of ActiveRecord Enums through traversing Rails' source code
  # twitterImage: https://cover.sli.dev
  # twitterSite: meg-gutshall
  # twitterUrl: https://example.com
---

# Revealing Rails Magic <br>with Enums

<!--
Slide notes
-->

---
src: ./pages/02-author-slide.md
hide: false
---

---
layout: section
---

# What Is an Enum?

<!--
Slide notes
-->

---
src: ./pages/04-back-it-up.md
hide: false
---

---
src: ./pages/05-back-it-up.md
hide: false
---

---
layout: statement
---

# Okay, got all that? 😉

## Now...

---
src: ./pages/05-describing-an-enum.md
hide: false
---

---
src: ./pages/06-defining-an-enum.md
hide: false
---

---
src: ./pages/08-enum-examples.md
hide: false
---

---
src: ./pages/09-enum-examples.md
hide: false
---

---
src: ./pages/10-boring-enums.md
hide: false
---

---
layout: fact
---

# But They Also Contain Magic!

<!--
Slide notes
-->

---
src: ./pages/12-boolean-and-dangerous-methods.md
hide: false
---

---
src: ./pages/13-prefixes-and-suffixes.md
hide: false
---

---
src: ./pages/14-scopes.md
hide: false
---

---
layout: none
---

<!--
This is the break between the magic and revealing the magician's secrets. Talk about the tricks.
-->

---
layout: section
---

# The Magician's Secrets

<!--
Slide notes
-->

---
src: ./pages/18-documentation.md
hide: false
---

---
src: ./pages/20-method-definition.md
hide: false
---

---
src: ./pages/21-private-method.md
hide: false
---

---
src: ./pages/22-setting-prefixes-and-suffixes.md
hide: false
---

---
src: ./pages/23-pairing-values.md
hide: false
---

---
src: ./pages/24-define-enum-methods.md
hide: false
---

---
layout: fact
---

# Is Rails Really Magical?

Yes! But the secrets can all be found in the codebase.

---
layout: center
class: 'text-center'
---

# Learn More

[GitHub Repo](https://github.com/meg-gutshall/revealing-rails-magic-with-enums) / [Download Slides](https://github.com/meg-gutshall/revealing-rails-magic-with-enums/blob/4d20a02abc5f3fb41c1fa251374d32dfd2cd945c/slides.md) / [Resources](https://github.com/meg-gutshall/revealing-rails-magic-with-enums/blob/4d20a02abc5f3fb41c1fa251374d32dfd2cd945c/resources.md)

Special thanks to Arvind & Jörn! 💖

<!--
Slide notes
-->
