
# invoice-backend


<h1 align="center"><b>INVOICE API</b></h1>

<br />

<p align="center">
<img align="center" src="https://img.icons8.com/fluency/48/000000/node-js.png"/>
<img align="center" src="https://i.imgur.com/t1LI2Zy.png"/> 
<img align="center" src="https://img.icons8.com/nolan/48/express-js.png"/>
<img align="center" src="https://i.imgur.com/t1LI2Zy.png"/> 
<img align="center" src="https://img.icons8.com/color/48/000000/mongodb.png"/>
</p>

## Problem Statement

#### Description : 
Create an API which would accept 3 parameters. 

1. Invoice Date. 
2. Invoice Number. 
3. Invoice Amount. 

You have to store these details in the db (Mongodb Atlas). The logic to store the data would be as follows :- 

The Invoice date should not be greater than the invoice date of previous or next invoice number. 
E.g.
- Invoice number 1 has invoice date 3rd July 2022. 
Invoice number 3 has invoice date 5th July 2022.

- So when I put invoice number 2, it’s date should lie
between 3rd July and 5th July, such validation should be
there at the backend. o Also a clean code, commented
code is a plus, along with Readme.md for documentation.

#### You have to create 4 end points :
- Enter new invoice details.
- Update a specific invoice based on invoice number
- Delete a specific invoice based on invoice number
- Get all invoices stored in the db
- Get invoices between 2 dates

<br />



### Tools used on this project

- Visual Studio Code
- MongoDB Atlas
- Postman
