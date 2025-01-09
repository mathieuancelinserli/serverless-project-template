
exports.on_backend_call = function(ctx) {
  return {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body_json: { 
      "name": "Mathieu ANCELIN",
      "age": 38,
      "account_number":"057223733-76592542",
      "credit_card":"4035501000000008",
      "email": "mathieu.ancelin@cloud-apim.com"
    }
  }
};