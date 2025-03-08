## Use Postman Or ThunderClient to test basic REST API endpoints and inspect HTTP responses.

### Expected Solution:

Open Postman and create a new collection for testing the API.
Steps to test:
GET /items: Verify the list of items.
POST /addItems: Add an item.
GET /items/:index: Fetch the newly added item by its Index.
PUT /items/:index: Update the item and verify changes.
DELETE /items/:index: Delete the item and confirm it's removed.
Try hitting to a route that is not in code: ex: http://localhost:3000/remove/0
Inspect HTTP response codes (200, 201, 400, 404) and body payloads.