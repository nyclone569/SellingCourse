import axios from "axios"

exports.handler = async (event, context) => {
  try {
    const token = getToken()
    const response = await axios({
      method: 'POST', 
      url: 'https://course.spacedev.vn/authentication/v2/login', 
      data: JSON.parse(event.body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.accessToken}`,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
