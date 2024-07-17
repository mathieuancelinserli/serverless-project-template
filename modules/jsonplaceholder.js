exports.on_backend_call = function(ctx) {
  console.log('calling jsonplaceholder', Date.now());
  return fetch('https://jsonplaceholder.typicode.com/todos').then(r => r.json()).then(todos => {
    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body_json: todos.map(todo => {
        return {
          ...todo,
          env: '${environment.ENV}'
        };
      })
    }
  });
};
