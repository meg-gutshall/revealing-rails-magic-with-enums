---
# theme id, package name, or local path
# Learn more: https://sli.dev/guide/theme-addon.html#use-theme
theme: dracula
# title of your slide, will be inferred from the first header if not specified
title: Revealing Rails Magic with Enums
# titleTemplate for the webpage, `%s` will be replaced by the slides deck's title
# titleTemplate: "%s - Revealing Rails Magic with Enums"
# information for your slides, can be a Markdown string
info: |
  "Rails magic" is a term many people use to describe the ease with which Rails helps you go from zero to working app so quickly. However, like all other frameworks, there’s no magic to be found – only code!

  In this talk, you’ll get a peek behind the curtain as we break down the ActiveRecord Enums module. You’ll learn what it is, how/when to use it, and some cool tricks it provides. Even if you’re not a Rails developer, you will still come away from this talk with new-found knowledge on how to traverse a codebase and gain a better understanding of features built into your language of choice.
# author field for exported PDF or PPTX
author: Meg Gutshall
# keywords field for exported PDF, comma-delimited
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

# defines the transition between the slide and the next one
# Learn more: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left

# HTML tag attributes
htmlAttrs:
  dir: ltr
  lang: en

# favicon, can be a local file path or URL
favicon: "/images/favicon.ico"
# SEO meta tags
seoMeta:
  ogTitle: Revealing Rails Magic with Enums
  ogDescription: Get a peek behind the curtain as we break down the wizardry of ActiveRecord Enums through traversing Rails' source code
  # ogImage: https://cover.sli.dev
  # ogUrl: https://example.com
  # twitterCard: summary_large_image
  twitterTitle: Revealing Rails Magic with Enums
  twitterDescription: Get a peek behind the curtain as we break down the wizardry of ActiveRecord Enums through traversing Rails' source code
  # twitterImage: https://cover.sli.dev
  # twitterSite: meg-gutshall
  # twitterUrl: https://example.com
---

# Revealing Rails Magic <br>with Enums

<!--
Slide notes
-->

---
src: ./pages/author-slide.md
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
src: ./pages/back-it-up.md
hide: false
---

---
src: ./pages/describing-an-enum.md
hide: false
---

---
src: ./pages/defining-an-enum.md
hide: false
---

---
src: ./pages/use-cases.md
hide: false
---

---
src: ./pages/enum-examples.md
hide: false
---

---
src: ./pages/painless-enums.md
hide: false
---

---
layout: fact
---

# Now... the Magic!

<!--
Slide notes
-->

---
layout: statement
---

# Now... the Magic!

<!--
Slide notes
-->

---
layout: section
---

# Now... the Magic!

<!--
Slide notes
-->
