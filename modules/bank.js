
exports.on_backend_call = function(ctx) {
  return {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body_json: { 
      "name": "Mathieu ANCELIN",
      "age": 38,
      "role": "speaker",
      "credit_card":"4035501000000008",
      "email": "mathieu.ancelin@cloud-apim.com"
    }
  }
};