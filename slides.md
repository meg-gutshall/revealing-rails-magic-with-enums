---
theme: dracula
title: Revealing Rails Magic with Enums
info: |
  “Rails magic” is a term many people use to describe the ease with which Rails helps you go from zero to working app so quickly. However, like all other frameworks, there’s no magic to be found – only code!

  In this talk, you’ll get a peek behind the curtain as we break down the ActiveRecord Enums module. First, you’ll learn what it is, how/when to use it, and some cool tricks it provides. Then, we'll examine the codebase together and unravel the mystery behind the magic. Rails developers of all skill levels will come away from this talk with new-found knowledge on how to traverse a codebase and gain a better understanding of the ActiveRecord Enums module.
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
src: ./pages/03-expertise.md
hide: false
---

---
layout: fact
---

# What Is an Enum?

## An enum is a special attribute that maps to an integer value in the table in the database.

<!--
Slide notes
-->

---
src: ./pages/07-defining-an-enum.md
hide: false
---

---
src: ./pages/08-defining-an-enum.md
hide: false
---

---
src: ./pages/09-enum-examples.md
hide: false
---

---
src: ./pages/12-boring-enums.md
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
src: ./pages/14-boolean-and-dangerous-methods.md
hide: false
---

---
src: ./pages/15-prefixes-and-suffixes.md
hide: false
---

---
src: ./pages/16-scopes.md
hide: false
---

---
layout: section
---

# The Magician's Secrets

<!--
Every magician has their secrets, sleight of hand, and tricks of the trade. Some will reveal a little bit here and there, but the masters of magic? They take their secrets to the grave.

Us, we're not magicians. Our family members may think so after we fix their printer for the fourth time... but no, we're Rubyists. And luckily for us, the magic of Rails is out there simply waiting for us to discover it! I'm going to show you how.
-->

---
src: ./pages/19-documentation.md
hide: false
---

---
src: ./pages/20-traversing-source-code.md
hide: false
---

---
src: ./pages/21-method-definition.md
hide: false
---

---
src: ./pages/22-private-method.md
hide: false
---

---
src: ./pages/23-setting-prefixes-and-suffixes.md
hide: false
---

---
src: ./pages/24-pairing-values.md
hide: false
---

---
src: ./pages/25-define-enum-methods.md
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

Special thanks to Arvind, Jörn, & Drew! 💖

<!--
Slide notes
-->
