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

In the Rails console

```sh {hide|*}
meeting.location = nil
meeting.location.nil?     # => true
meeting.location          # => nil

meeting.location = 0
meeting.location = "in_person"
# The two lines above are equivalent
meeting.location          # => "in_person"
```


<!--
Slide notes
-->
