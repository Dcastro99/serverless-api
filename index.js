// eslint-disable-next-line no-undef
const dynamoose = require("dynamoose");

const peopleSchema = new dynamoose.Schema({
  id: 'String',
  Name: "String",
  Phone: "String"
})

const peopleModel = dynamoose.model("People", peopleSchema);


// eslint-disable-next-line no-undef
exports.handler = async (event) => {
  // TODO implement
  console.log(event, event.pathParameter);
  try {
    let peopleData;

    if (event.pathParameters) {
      peopleData = await peopleModel.query('id').eq(event.pathParameters.id).exec();
    } else {
      peopleData = await peopleModel.scan().exec();
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(peopleData),
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
