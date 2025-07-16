---
title: Enums Can Be Kinda... Boring
transition: slide-left
---

# Enums Can Be Kinda... Boring

Like any other Rails attribute, we can hard code the value of an enum attribute. Let's use our earlier example:

```rb {hide|*} filename="app/models/meeting.rb"
class Meeting < ApplicationRecord
  enum location: { in_person: 0, remote: 1, hybrid: 2 }
end
```

In the Rails console for an instance of the `Meeting` class:

```sh {hide|1|1-2|1-3|5|5-7|5-8}
meeting.location = nil
meeting.location.nil?     # => true
meeting.location          # => nil

meeting.location = 0
meeting.location = "in_person"
# The two lines above are equivalent
meeting.location          # => "in_person"
```

<!--
These are instance methods
-->
