Vartotojų API - CRUD
git/Github/readme
git - kiekvienas prasmingas pakeitimas atskirame commit'e;
readme - su pavyzdžiais kaip naudotis jūsų API ir kartu pateikti pavyzdinius gražinamus rezultatus;
nuorodos struktūra /api/user;
visos kitos nuorodos gražina 404;
sukurti elementą POST: /api/user;
kuriant elementą pridėti įrašymo datą ir unikalų ID;
JSON išsaugoti kaip failą;
gauti elemento informaciją GET: /api/user/[ID];
password negalima gražinti;
gauti elemento informaciją GET: /api/user-by-email/[EMAIL];
password negalima gražinti;
atnaujinti elementą PUT: /api/user;
atnaujinti elementą PUT: /api/user-email;
ištrinti elementą DELETE: /api/user/[ID];
How to use
POST: /api/user

Request object:

{
    "name": "Jonas",
    "email": "jonas@jonas.lt",
    "password": "superseacretpassword",
    "age": 99
}
Response object, if all goes well:

{
    "status": true,
    "message": "User created"
}
Response object, if any error:

{
    "status": false,
    "message": "User already exists, dublicate email"
}
GET: /api/user/[ID]

Response object:

excluding password;
{
    "id": 3,
    "name": "Jonas",
    "email": "jonas@jonas.lt",
    "created-at": "2023-07-02 9:39:43"
}
GET: /api/user-by-email/[EMAIL]

Response object:

excluding password;
{
    "id": 3,
    "name": "Jonas",
    "email": "jonas@jonas.lt",
    "created-at": "2023-06-26 9:16:43"
}
PUT: /api/user

Response object with updated info:

{
    "name": "Jonukas"
}
PUT: /api/user-email

Response object with new updated email:

{
    "email": "jonas2@jonas.lt"
}
DELETE: /api/user/[ID]

Response object, if all goes well:

{
    "status": true,
    "message": "User deleted"
}
Response object, if any error:

{
    "status": false,
    "message": "User does not exist"
}