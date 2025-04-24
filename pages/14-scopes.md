---
title: Scopes
transition: slide-left
---

# Scopes

```rb
class Meeting < ApplicationRecord
  enum location: { in_person: 0, remote: 1, hybrid: 2 }
end
```

In the Rails console

```sh {hide|*}
Meeting.locations       # => { "in_person" => 0, "remote" => 1, "hybrid" => 2 }

Meeting.in_person       # => Returns all in_person meetings
Meeting.not_in_person   # => Returns all remote and hybrid meetings

Meeting.remote          # => Returns all remote meetings
Meeting.not_remote      # => Returns all in_person and hybrid meetings

Meeting.hybrid          # => Returns all hybrid meetings
Meeting.not_hybrid      # => Returns all in_person and remote meetings
```

These can be turned off by passing `scopes: false` to the enum definition.

<!--
Slide notes
-->
