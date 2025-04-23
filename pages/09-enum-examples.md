---
title: Examples
transition: slide-left
---

# Examples

## Think Twice ⁉️

A user's role in an app

An animal's species

```rb {hide|*} filename="app/models/animal.rb"
class Animal < ApplicationRecord
  # type    :string
  # breed   :string
end
```

```rb {hide|*} filename="app/models/cat.rb"
class Cat < Animal
end
```

```rb {hide|*} filename="app/models/dog.rb"
class Dog < Animal
end
```

<!--
A user's role in an app

- A user could be assigned more than one role at a time
- If they positively _will not_ have multiple roles, then use an enum

An animal's species

- That's **a lot** of ground to cover!
- It's likely that you'll want more info than just species; a single-table inheritance design may be better here
-->
