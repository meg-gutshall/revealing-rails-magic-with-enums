---
title: No Lonely Values
transition: slide-left
---

# No Lonely Values

```rb filename="rails/activerecord/lib/active_record/enum.rb"
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

<!--
Starting on Line 261

- `values.each_pair` is used to identify Hashes
- `values.each_with_index` generates a mapping of key/value pairs from the Array of values, using each item of the Array as a key and its index as its respective value
  - These index values then get saved to the database
-->
