
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    try {
        const response = await fetch('https://api.jsonserve.com/xS8ekS');
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                'Access-Control-Allow-Origin': 'https://resplendent-entremet-ca8cb9.netlify.app',
            },
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
