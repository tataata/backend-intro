// import the express lib
const express = require('express')
// create express server
const app = express()
let port = 3000


// app.get(path, callback [, callback ...])
app.get('/', (req, res) => {
    console.log('a get request');
    res.send('Greets from the server!');
})

app.get('/demo', (req, res) => {
    console.log('a GET to the demo');
    res.send('You get the /demo test');
})

app.get('/info', (req, res) => {
    console.log('a GET to the info');
    res.send('You get the /info');
})

app.get('/todos', (req, res) => {
    console.log('GET request to todos');

    // send data back
    res.status(200).json({
        success: true,
        my_data: [
            {
                task: 'learn express',
                status: 'open',
                id: '01'
            },
            {
                task: 'learn JS',
                status: 'open',
                id: '02'
            },
            {
                task: 'sleep',
                status: 'open',
                id: '03'
            }
        ]
    });
});

app.post('/todos', (req, res) => {
    console.log('a POST request');

    // response
    res.status.json({
        success: true,
        message: 'Data was saved!'
    });
});

app.put('todos/:id', (req, res) => {
    // WIP

    // response
    res.status(200).json({
        success: true,
        message: 'Data was updated!'
    });
})

app.delete('todos/:id', (req, res) => {
    // WIP

    // response
    res.status(200).json({
        success: true,
        message: 'Data was deleted!'
    });
})


// Errors
// Create a error for the missing paths
app.use('*', (req, res, next) => {
    // create an error
    let my_error = new Error('There is no path here!');
    my_error.statusCode  = 404;
    // pass it to the next function:
    next(my_error);
})

// Function to send error messages back:
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
      message: err.message || 'Something is wrong on the server'
    });
})

// app.listen([port[, host[, backlog]]][, callback])
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})