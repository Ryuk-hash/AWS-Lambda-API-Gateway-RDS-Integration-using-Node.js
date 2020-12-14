# AWS-Lambda-API-Gateway-RDS-Integration-using-Node.js
Just a simple process which makes use of the AWS components (Lambda, RDS, API Gateway) to create a simple serverless application.

## Description:
<> Make the use of AWS components, i.e. :
1) Initiating an API gateway endpoint https://someawsurlgoeshere/join with POST method. Link this gateway to the lambda function. | AWS: API Gateway
2) Creating a Lambda function - I used Node.js. The functionality of this function would be to make a connection to the RDS database and insert a new student record with the 'studentID' and student's 'batchID' fields. | AWS: Lambda
3) Using MySQL as the RDS database and querying through the Lambda function, a new record is inserted into the MySQL table with the name 'students'. | AWS: RDS (MySQL)


#### Folder Structure:
<p align="center">
  <img alt="Folder-Structure" width="800" height="400" src="/public/images/folder.png">
</p>

#### API Gateway:
<p align="center">
  <b>Invoke URL: </b>https://rr1bwdokrk.execute-api.us-east-2.amazonaws.com/prod/join
  <img alt="API-Gateway-Image" width="800" height="400" src="/public/images/apigateway.png">
</p>

#### Expected Body:
```
{
  "studentID": 1,
  "batchID": 33
}
```
#### Lambda Function:
<p align="center">
  <img alt="Lambda-Function" width="800" height="400" src="/public/images/lambdafunction.png">
</p>

#### RDS Database (MySQL):
<p align="center">
  <img alt="RDS-DB" width="800" height="400" src="/public/images/rdsdb.png">
</p>

## Further Scope:
<> Implementation of the rest of the CRUD operations. Fetch a student record, fetch multiple students based on queries, delete a student record, etc.
