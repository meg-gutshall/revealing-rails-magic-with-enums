---
title: Describing an Enum Attribute
transition: slide-left
---

# What Is an Enum?

## Defining an Enum Attribute in a Migration

Run the command to generate a new migration

```sh {hide|*}
rails generate migration AddLocationToMeetings location:integer
```

The migration file adds the enum attribute to the table as an integer

```rb {hide|*} filename="app/db/migrate/date_add_location_to_meetings.rb"
class AddLocationToMeetings < ActiveRecord::Migration
  def change
    add_column :meetings, :location, :integer
  end
end
```

<!--
IMPORTANT: Before we add our enum attribute to the database, we have to define it in the model.
-->
