
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

  let updatePeople;


  if (event.pathParameters) {

    try {
      let stringy = event.body.toString();
      let parsedStr = JSON.parse(stringy);

      let newBody = {
        body: parsedStr
      }

      updatePeople = await peopleModel.update({
        id: event.pathParameters.id.toString(),
        Name: newBody.body.Name,
        Phone: newBody.body.Phone

      });



      const response = {
        statusCode: 200,
        body: JSON.stringify(updatePeople),
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

  } else {

    const response = {
      statusCode: 500,
      body: JSON.stringify('No ID Sucka!')
    };
    return response;

  }

};


