---
title: The Method Definition
transition: slide-left
---

# The Method Definition

```rb {hide|*} filename="Source Code: rails/activerecord/lib/active_record/enum.rb"
def enum(name, values = nil, **options)
  values, options = options, {} unless values
  _enum(name, values, **options)                # References a private method defined later in the file
end
```

```rb {hide|*} filename="Our Example: app/models/prescription.rb"
class Prescription < ApplicationRecord
  enum distribution_method: [:pick_up, :delivery, :shipping], prefix: 'distribution'  # Implicit – magical 🦄
  enum status: { received: 0, processing: 10, filled: 20 }                            # Explicit – no magic 💩
end
```

<!--
Defined on Line 216

Arguments:

- `name`
- `values` – with default `nil` value
- `**options` – `**` means it's a Hash
-->
