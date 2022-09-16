## LAb 18 AWS: API, Dynamo and Lambda

### Feature Tasks & Requirements

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

- **Database**: DynamoDB
  1 Table required
- **Routing**: API Gateway
  - **POST**
  - `/people` - Given a JSON body, inserts a record into the database
    returns an object representing one record, by its id (##)
  - **GET**
    - `/people` - returns an array of objects representing the records in the database
    - `/people/##` - returns an object representing one record, by its id (##)
  - **PUT**
  - `/people/##` - Given a JSON body and an ID (##), updates a record in the database
    returns an object representing one record, by its id (##)
  - **DELETE**
  - `/people/##` - Given an id (##) removes the matching record from the database
    returns an empty object
- **CRUD** Operation Handlers: Lambda Functions

### UML

![Serverless UML](/images/lab18UML.png)

- [URL](https://flbq91hsdh.execute-api.us-west-2.amazonaws.com/Test/people)

### Routes

- Test/people (GET/POST)
- Test/people/{id}(GET.id/PUT/DELETE)

### Returns

![Table](/images/returnLab18.png)

### Collaborators

- Jim Doyle
