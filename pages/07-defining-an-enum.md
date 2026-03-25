---
title: Defining an Enum Attribute
transition: slide-left
zoom: 0.9
---

# What Is an Enum?

## Defining an Enum Attribute in the Model

There are two ways to define an enum attribute:

Explicitly using a hash of key/value pairs

```rb {hide|*} filename="app/models/meeting.rb"
class Meeting < ApplicationRecord
  enum location: { in_person: 0, remote: 1, hybrid: 2 }
end
```

Implicitly, using an array of symbols (and a sprinkle of "Rails magic" 🪄)

```rb {hide|*} filename="app/models/meeting.rb"
class Meeting < ApplicationRecord
  enum location: [:in_person, :remote, :hybrid]
end
```

With the implicit definition, the order of the enum attribute's values **must not** change or the database mapping will go 🤯

<!--
IMPORTANT: Before we add our enum attribute to the database, we have to define it in the model.
-->
