const axios = require('axios');

exports.handler = async (event, context) => {
  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
      body: '',
    };
  }

  try {
    // Extract the target URL path and parameters
    const path = event.path.replace('/.netlify/functions/apiProxy', '');
    const targetUrl = `https://course.spacedev.vn${path}`;
    
    // Prepare headers (remove Netlify-specific headers)
    const headers = {};
    if (event.headers) {
      // Forward important headers
      if (event.headers['content-type']) {
        headers['Content-Type'] = event.headers['content-type'];
      }
      if (event.headers['authorization']) {
        headers['Authorization'] = event.headers['authorization'];
      }
    }

    // Forward the request to the external API
    const response = await axios({
      method: event.httpMethod,
      url: targetUrl,
      data: event.body ? JSON.parse(event.body) : undefined,
      headers: headers,
      params: event.queryStringParameters,
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
    console.error('API Proxy Error:', error);
    
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