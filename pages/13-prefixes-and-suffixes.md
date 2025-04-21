---
title: Prefixes and Suffixes
transition: slide-left
---

# Prefixes and Suffixes

Go over prefixes and suffixes

```rb {hide|*} filename="app/models/car.rb"
class Car < ApplicationRecord
  enum color: { road_rage_red: 0, electric_avenue_blue: 10, gas_guzzler_green: 20 }, prefix: true
  enum fuel_option: { gas: 0, electric: 1, hybrid: 2 }, suffix: 'powered'
end
```

<!--
With color names like these, it can get confusing between vanity and fuel options. Prefixes and suffixes are here to help!
-->
