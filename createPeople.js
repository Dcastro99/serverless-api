
const dynamoose = require("dynamoose");

const peopleSchema = new dynamoose.Schema({
  id: 'String',
  Name: "String",
  Phone: "String"
})

const peopleModel = dynamoose.model("People", peopleSchema);


exports.handler = async (event) => {
  // TODO implement
  console.log('PARAMS!!!', event.pathParameters);
  console.log('EVENTS!!!', event);

  let createPeople;

  try {
    let stringy = event.body.toString();
    let parsedStr = JSON.parse(stringy);

    let newBody = {
      body: parsedStr
    }



    createPeople = await peopleModel.create({
      id: newBody.body.id,
      Name: newBody.body.Name,
      Phone: newBody.body.Phone

    });



    const response = {
      statusCode: 200,
      body: JSON.stringify(createPeople),
    };
    return response;



  } catch (e) {
    console.log('ERROR::', e);
    const response = {
      statusCode: 500,
      body: JSON.stringify('something went hella wrong!!::', e),
    };
    return response;
  }

};

