---
title: Setting Prefixes and Suffixes
transition: slide-left
---

# Setting Prefixes and Suffixes

```rb filename="rails/activerecord/lib/active_record/enum.rb"
def _enum(name, values, prefix: nil, suffix: nil, scopes: true, instance_methods: true, validate: false, **options)
  value_method_names = []
  _enum_methods_module.module_eval do
    prefix = if prefix
      prefix == true ? "#{name}_" : "#{prefix}_"
    end

    suffix = if suffix
      suffix == true ? "_#{name}" : "_#{suffix}"
    end
  end
end
```

<!--
Starting on Line 251

- `prefix` and `suffix` can:
  - Keep their default `nil` value
  - Accept a Boolean value (but it would only make sense to pass `true` since the default is already `nil`)
  - Accept a String value

This slide ties into the next one
-->
