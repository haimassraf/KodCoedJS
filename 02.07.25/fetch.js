const p1 = fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    body: JSON.stringify({ 
        name: 'haim',
        lastName: 'assraf'
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(res => {
        return res.json();
    })

    const p2 = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())

    Promise.all([p1, p2]).then(([data, data2]) => {
        console.log(data);
        console.log(data2);  
    })