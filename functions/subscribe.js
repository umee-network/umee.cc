const SendXRestApi = require('send_x_rest_api')
const api = new SendXRestApi.ContactApi()
const { SENDX_API_KEY, SENDX_TEAM_ID, SENDX_TAG } = process.env

exports.handler = function (event, _context, cb) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  }

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    }
  }
  const { email } = JSON.parse(event.body)
  const newContact = new SendXRestApi.ContactRequest()
  newContact.email = email
  newContact.tags = [SENDX_TAG]

  api.contactIdentifyPost(
    SENDX_API_KEY,
    SENDX_TEAM_ID,
    newContact,
    (err, data) => {
      if (err) {
        cb(null, {
          statusCode: 400,
          body: JSON.stringify({
            status: 'error',
            error: err.message,
          }),
        })
      } else {
        cb(null, {
          statusCode: 200,
          body: JSON.stringify({ email, message: data.message }),
        })
      }
    }
  )
}
