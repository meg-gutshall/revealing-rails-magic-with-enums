---
title: Boolean & Dangerous Methods
transition: slide-left
---

# Boolean & Dangerous Methods

Boolean methods end with a question mark (`?`) and return either `true` or `false`. Dangerous methods end with the bang operator (`!`) and return the modified object.

```rb {hide|*} filename="app/models/meeting.rb"
class Meeting < ApplicationRecord
  enum location: { in_person: 0, remote: 1, hybrid: 2 }
end
```

In the Rails console for an instance of the `Meeting` class:

```sh {hide|1|1-3|1-5|1-7|1-8|1-9}
meeting.update(location: 1)
meeting.remote!
# The two lines above are equivalent
meeting.remote?          # => true
meeting.location         # => "remote"

meeting.hybrid?          # => false
meeting.hybrid!          # This line is changing the value of meeting's location attribute from remote to hybrid
meeting.hybrid?          # => true
```

These can be turned off by passing `instance_methods: false` to the enum definition.

<!--
These are instance methods
-->
