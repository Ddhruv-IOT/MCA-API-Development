## Handle different HTTP methods (GET, PUT, DELETE) in the API and test them.

GET: Get Items: http://localhost:3000/items

PUT: http://localhost:3000/items/:inedx
ex: http://localhost:3000/items/0

{
  "name":"item0_updated"
}

DELETE: http://localhost:3000/items/:index
ex: http://localhost:3000/items/0
Removes the element at given Index