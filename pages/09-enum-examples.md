---
title: Examples
transition: slide-left
---

# Examples

## Use Enums ✅

A blog post's publication status ➞ mutually exclusive with default

```rb {hide|*} filename="app/models/post.rb"
class Post < ApplicationRecord
  enum status: [:draft, :published, :unpublished], default: :draft
end
```

Consecutive steps in a workflow ➞ mutually exclusive and ordered

```rb {hide|*} filename="app/models/job_application.rb"
class JobApplication < ApplicationRecord
  enum step: [:in_progress, :submitted, :in_review, :approved]
end
```

<!--
Think twice:
- A user's role in an app
- An animal's species
-->
