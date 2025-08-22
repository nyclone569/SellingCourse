import axios from "axios"

exports.handler = async (event, context) => {
  try {
    // Forward the request to the external API
    const response = await axios({
      method: event.httpMethod,
      url: 'https://course.spacedev.vn/authentication/v2/login',
      data: event.body ? JSON.parse(event.body) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...event.headers, // Forward headers from the client
      },
    });

    // Return the response from the external API
    return {
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
      body: JSON.stringify({ 
        message: error.message,
        data: error.response?.data
      }),
    };
  }
};
