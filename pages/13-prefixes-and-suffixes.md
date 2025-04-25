---
title: Prefixes and Suffixes
transition: slide-left
---

# Prefixes and Suffixes

```rb {hide|*} filename="app/models/car.rb"
class Car < ApplicationRecord
  enum color: { road_rage_red: 0, electric_avenue_blue: 10, gas_guzzler_green: 20 }, prefix: true
  enum fuel_option: { gas: 0, electric: 1, hybrid: 2 }, suffix: 'powered'
end
```

In the Rails console for an instance of the `Meeting` class:

```sh {hide|1-3|5-8}
# Using a prefix
car.color_gas_guzzler_green!
car.color?                        # => "gas_guzzler_green"

# Using a suffix
car.fuel_option = 1
car.gas_powered?                  # => false
car.electric_powered?             # => true
```

<!--
With color names like these, it can get confusing between vanity and fuel options. Prefixes and suffixes are here to help!
-->
