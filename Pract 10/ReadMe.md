# Create an Express API that filters user data based on three criteria:
- User ID (eID) – Exact match
- User Name (name) – Partial match (case insensitive)
- User Salary (salary) – Exact match
- Additionally, allow sorting in ascending (asc) or descending (dsc) order based on salary

## API Endpoints & Usage

### Filter by User ID
GET /users?eID=102

### Filter by User Name (Partial match)
GET /users?name=John

### Filter by Salary
GET /users?salary=60000

### Sorting (Ascending/Descending)
GET /users?sort=asc
GET /users?sort=dsc

### Combine Filters
GET /users?name=John&sort=asc
GET /users?eID=102&salary=60000

## TIP
Know the spread operator [...] It’s a powerful tool in JavaScript that allows us to create a shallow copy of an array or object. 

In the line let filteredUsers = [...users];, we use the spread operator to copy all elements from the users array into a new array called filteredUsers. This ensures that any modifications—like filtering or sorting—are applied only to filteredUsers, leaving the original users array unchanged. This approach maintains immutability, preventing accidental modifications to the original dataset and allowing multiple filtering steps without affecting the source data. By using [...], we create a clean, predictable API that processes data efficiently while keeping the original data intact.