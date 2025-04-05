# /users/register Endpoint Documentation

## Description
The /users/register endpoint is used to register a new user in the application. It accepts user details and creates a new user record in the database.

## Request
### Method
POST


### Request Body
The request body must be in JSON format and include the following fields:

- **fullname**: An object containing:
  - **firstname**: A string representing the user's first name (required, minimum 3 characters).
  - **lastname**: A string representing the user's last name (optional, minimum 3 characters).
- **email**: A string representing the user's email address (required, must be unique, minimum 5 characters).
- **password**: A string representing the user's password (required).

### Example Request Body

- **user**: An object containing:
  - **fullname**: An object containing:
    - **firstname**: A string representing the user's first name (required, minimum 3 characters).
    - **lastname**: A string representing the user's last name (optional, minimum 3 characters).
  - **email**: A string representing the user's email address (required, must be unique, minimum 5 characters).
  - **password**: A string representing the user's password (required).
- **token**:A string representing the user's token (JWT Token)

# /users/login Endpoint Documentation

## Description
The `/users/login` endpoint authenticates an existing user by verifying the provided email and password. On successful authentication, the server returns an authentication token along with the user details.

## Request
### Method
**POST**

### URL
`/users/login`

### Request Body
The request body must be in JSON format and include the following fields:

- **email** (string): The user's email address (required, must be valid).
- **password** (string): The user's password (required, must be between 6 to 36 characters).

#### Example Request Body
```json
{
    "email": "john.doe@example.com",
    "password": "securePassword123"
}