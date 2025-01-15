
  exports.on_backend_call = function(ctx) {
    const name = (ctx.request.query.name && ctx.request.query.name[0]) ? ctx.request.query.name[0] : 'World';
    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body_json: { departure: "08:00 AM", arrival: "11:30 AM", duration: "5h 30m" }
    }
  };
