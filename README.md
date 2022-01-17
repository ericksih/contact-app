## NOTES 📝
Live on : https://contact-app-erick.herokuapp.com/login

## Usage

Install dependencies

```bash
npm install
cd client
npm install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```

## End Point
### Users & Authentication Routes

1. Register a new user - Method -> POST http://localhost:5000/api/users

   | Headers      |                  |
   | ------------ | ---------------- |
   | key          | value            |
   | Content-Type | application/json |

Body

```JSON
{
"name": "satu",
"email": "satu@gmail.com",
"password": "satu123"
}
```


2. Login a user - Method -> POST http://localhost:5000/api/auth

   | Headers      |                  |
   | ------------ | ---------------- |
   | key          | value            |
   | Content-Type | application/json |

Body

```JSON
{
"name": "satu",
"email": "satu@gmail.com",
"password": "satu123"
}
```
3. Get logged in user - Method -> GET http://localhost:5000/api/auth

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-api-key    | <VALID_TOKEN>    |


### Contacts Routes

1. Get a users contacts - Method -> GET

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-api-key    | <VALID_TOKEN>    |

2. Add a new contact - Method -> POST http://localhost:5000/api/contacts

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-api-key    | <VALID_TOKEN>    |

Body

```JSON
{
"name": "satu",
"email": "satu@gmail.com",
"phone": "222111"
}
```

3. Update a contact - Method -> PUT http://localhost:5000/api/contacts/<CONTACT_ID>

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-api-key    | <VALID_TOKEN>    |

Body

```JSON
{
"phone": "123456"
}
```

4. Delete a contact - method -> DELETE http://localhost:5000/api/contacts/<CONTACT_ID>

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-api-key    | <VALID_TOKEN>    |
