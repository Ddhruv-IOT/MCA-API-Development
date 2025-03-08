## Implement RESTful API endpoints for a small inventory system (CRUD operations).

GET: Get Items: http://localhost:3000/items
POST: Add Item: http://localhost:3000/addItems
Example JSON:

{
  "name":"item"
}

GET: http://localhost:3000/items/:index
Example: http://localhost:3000/items/0 
Output: Gives Item on index 0

PUT: http://localhost:3000/items/:inedx

{
  "name":"item0_updated"
}

DELETE: http://localhost:3000/items/:index
Removes the element at given Index