# Implement API versioning in Express to support multiple versions of a users endpoint

Suppose we are updaing our backend and can't directly move to new versions, we need to keep the older vesrions running, for ex:
- Version 1 or V1: Returns id and name. (older version)
- Version 2 or V2: Returns id, name, and email. (upgraded one)

### Usage End Points
Fetch basic user data
- GET /api/v1/users 

Fetch extended user data
- GET /api/v2/users 

## Tip: Understanding Spread (...), Spread + Map, and Shallow vs. Deep Copy in JavaScript
The spread operator (...) is great for making shallow copies of arrays and objects, but it doesn’t create new copies of nested objects—only the outer structure is new. This means modifying an object inside a spread-copied array will still affect the original. To fully duplicate an array of objects without modifying the original, use map() along with spread (...user), ensuring each object inside is a new instance. This is the key difference between shallow copies (which retain references) and deep copies (which create entirely new objects). For deeply nested structures, consider structuredClone() or JSON.parse(JSON.stringify(obj)).