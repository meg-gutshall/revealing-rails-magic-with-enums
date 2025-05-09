---
title: No Lonely Values
transition: slide-left
---

# No Lonely Values

```rb {hide|*} filename="Source Code: rails/activerecord/lib/active_record/enum.rb"
def _enum(name, values, prefix: nil, suffix: nil, scopes: true, instance_methods: true, validate: false, **options)
  pairs = values.respond_to?(:each_pair) ? values.each_pair : values.each_with_index
  pairs.each do |label, value|
    enum_values[label] = value
    label = label.to_s

    value_method_name = "#{prefix}#{label}#{suffix}"
    value_method_names << value_method_name
    define_enum_methods(name, value_method_name, value, scopes, instance_methods)
  end
end
```

```rb {hide|*} filename="Our Example: app/models/prescription.rb"
class Prescription < ApplicationRecord
  enum distribution_method: [:pick_up, :delivery, :shipping], prefix: 'distribution'  # Implicit – magical 🦄
  enum status: { received: 0, processing: 10, filled: 20 }                            # Explicit – no magic 💩
end
```

<!--
Starting on Line 261

- `values.each_pair` is used to identify Hashes
- `values.each_with_index` generates a mapping of key/value pairs from the Array of values, using each item of the Array as a key and its index as its respective value
  - These index values then get saved to the database

`enum_values = ActiveSupport::HashWithIndifferentAccess.new` creates keys in Hash as String or Symbol

- In the context of this code sample, `enum_values` is allowing the Hash to be accessed without throwing any errors
-->
