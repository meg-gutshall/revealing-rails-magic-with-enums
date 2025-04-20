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
# enable twoslash, can be boolean, 'dev' or 'build'
twoslash: false
# show line numbers in code blocks
lineNumbers: true
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
layout: author
---

![image of meg](https://github.com/meg-gutshall.png?size=150)

# Meg Gutshall

I'm a Ruby on Rails developer at Penn Medicine with a passion for open source and tech for good. I'm always smiling, continuously learning, and quick to strike up a conversation. I take advice with a grain of salt & a shot of tequila.

<footer>

<mdi-twitter /> [@meg_gutshall](https://x.com/meg_gutshall)
<mdi-github /> [@meg-gutshall](https://github.com/meg-gutshall)
<mdi-linkedin /> [in/meghan-gutshall](https://www.linkedin.com/in/meghan-gutshall/)

</footer>

<!--
Slide notes
-->
