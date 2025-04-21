---
title: Examples
layout: two-cols-header
transition: slide-left
---

# Examples

::left::

## Use Enums ✅

- A blog post's publication status
  - Mutually exclusive: `:draft`, `:published`, `:unpublished`
- Consecutive steps in a workflow
  - Mutually exclusive _and_ ordered: `:in_progress`, `:in_review`, `:approved`

::right::

## Think Twice ⁉️

- A user's role in an app
  - A user could be assigned more than one role at a time
  - If they positively _will not_ have multiple roles, then use an enum
- An animal's species
  - That's **a lot** of ground to cover!
  - It's likely that you'll want more info than just species; a single-table inheritance design may be better here

<!--
Slide notes
-->
