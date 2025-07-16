---
title: Define Enum Methods
transition: slide-left
---

# Define Enum Methods

```rb {*} filename="Source Code: rails/activerecord/lib/active_record/enum.rb"
def define_enum_methods(name, value_method_name, value, scopes, instance_methods)
  if instance_methods
    # def distribution_pick_up?() distribution_method_for_database == 0 end
    klass.send(:detect_enum_conflict!, name, "#{value_method_name}?")
    define_method("#{value_method_name}?") { public_send(:"#{name}_for_database") == value }

    # def distribution_pick_up!() update!(distribution_method: 0) end
    klass.send(:detect_enum_conflict!, name, "#{value_method_name}!")
    define_method("#{value_method_name}!") { update!(name => value) }
  end

  if scopes
    # scope :distribution_pick_up, -> { where(distribution_method: 0) }
    klass.send(:detect_enum_conflict!, name, value_method_name, true)
    klass.scope value_method_name, -> { where(name => value) }

    # scope :not_distribution_pick_up, -> { where.not(distribution_method: 0) }
    klass.send(:detect_enum_conflict!, name, "not_#{value_method_name}", true)
    klass.scope "not_#{value_method_name}", -> { where.not(name => value) }
  end
end
```

<!--
Starting on Line 302

- `scopes` and `instance_methods` can accept a Boolean value
- It is dynamically creating new methods using the same old code

TODO: USE THESE EXAMPLES IN THE BEGINNING FOR THE COMPARISON PART
-->
