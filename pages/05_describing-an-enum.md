---
title: Describing an Enum Attribute
transition: slide-left
---

# What Is an Enum?

## Describing an Enum Attribute

- Describe an enum attribute
  - The enum attribute’s values map to integers in the database

```sh {hide|*}
rails generate migration AddLocationToMeetings location:integer
```

```rb {hide|*} filename="app/db/migrate/date_add_location_to_meetings.rb"
class AddLocationToMeetings < ActiveRecord::Migration
  def change
    add_column :meetings, :location, :integer
  end
end
```

<!--
Slide notes
-->
