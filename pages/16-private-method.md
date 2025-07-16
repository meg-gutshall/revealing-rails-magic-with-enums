---
title: The Private Method
transition: slide-left
---

# The Private Method

```rb {hide|*} filename="Source Code: rails/activerecord/lib/active_record/enum.rb"
def _enum(name, values, prefix: nil, suffix: nil, scopes: true, instance_methods: true, validate: false, **options)
  # ...
  # ...
  # A WHOOOOLE lotta code...
  # ...
  # ...
end
```

```rb {hide|*} filename="Our Example: app/models/prescription.rb"
class Prescription < ApplicationRecord
  enum distribution_method: [:pick_up, :delivery, :shipping], prefix: 'distribution'  # Implicit – magical 🦄
  enum status: { received: 0, processing: 10, filled: 20 }                            # Explicit – no magic 💩
end
```

<!--
Defined on Line 222

Everything to the right of `values` goes into the `**options` argument.

Arguments:

- `name`
- `values`
- `prefix` with a default value of `nil`
- `suffix` with a default value of `nil`
- `scopes` with a default value of `true`
- `instance_methods` with a default value of `true`
- `validate` with a default value of `false`
- `**options` – `**` means it's a Hash

Line 252 is where the breakdown begins
-->
