
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



  try {

    let getPeople;

    if (event.pathParameters) {

      getPeople = await peopleModel.get(event.pathParameters);

    }
    else {
      getPeople = await peopleModel.scan().all().exec();

    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(getPeople),
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

