---
title: Defining an Enum Attribute
transition: slide-left
zoom: 0.9
---

# What Is an Enum?

## Defining an Enum Attribute

There are two ways to define an enum attribute:

- Implicitly using an array of symbols – and a sprinkle of "Rails magic"
- Explicitly using a hash of key/value pairs

```rb {none|1-3,5|1-2,4-5}
# app/models/meeting.rb
class Meeting < ApplicationRecord
  enum location: [:in_person, :remote, :hybrid]           # Implicit definition
  enum location: { in_person: 0, remote: 1, hybrid: 2 }   # Explicit definition
end
```

```sh {hide|*}
rails generate migration AddLocationToMeetings location:integer
```

```rb {hide|*}
# app/db/migrate/date_add_location_to_meetings.rb
class AddLocationToMeetings < ActiveRecord::Migration
  def change
    add_column :meetings, :location, :integer
  end
end
```

The order of the enum attribute's values **must not** change or the database mapping will go 🤯

<!--
Slide notes
-->
