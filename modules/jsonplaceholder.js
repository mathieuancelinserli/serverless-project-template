exports.on_backend_call = function(ctx) {
  const res = host_api.storage.getItem('foo:bar');
  console.log('calling jsonplaceholder', Date.now(), res);
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
