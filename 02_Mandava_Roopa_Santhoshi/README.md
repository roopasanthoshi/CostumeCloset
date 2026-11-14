# CostumeCloset API – Roopa Santhoshi

## Overview
This module is part of the CostumeCloset application. It handles costume management, actor information, and costume hiring operations using REST APIs.

## Technologies Used
- Node.js
- Express.js
- SQLite Database
- JavaScript
- Postman

## Files and Their Purpose

| File | Description |
|---|---|
| `actors.js` | Handles actor-related API operations |
| `costumes.js` | Manages costume REST API routes |
| `costumeController.js` | Handles costume-related operations |
| `hires.js` | Manages costume hiring routes |
| `hireController.js` | Handles hiring operations and database queries |

## API Operations

### 1. Costume Management
- Retrieve all costumes
- Retrieve a costume using its ID
- Add a new costume
- Update costume details
- Delete a costume

### 2. Actor Management
- Retrieve actor information
- Retrieve an actor using their ID

### 3. Hiring Management
- Retrieve all hire records
- Retrieve hire details using an ID
- Retrieve combined hire, actor, and costume details using SQL JOIN

### 4. Validation and Search
- Search costumes based on era
- Validate costume details
- Handle missing or invalid input

## API Testing
All REST API endpoints were tested using Postman. Successful responses and validation errors were checked.

The Postman collection is available in the project's `postman` folder.

## Screenshots
Screenshots of the API requests and their responses are maintained in the main project's screenshots folder.

## Conclusion
This module implements REST API operations for costume management, actor details, and hiring records. It also includes search functionality, input validation, and database operations.