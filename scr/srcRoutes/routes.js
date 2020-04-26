
//create routes for the endpints
//route function
const routes = (app) => {
    app.route('/item')
        // get request, using next function
        .get((req,res, next) => {
        //add middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req,res, next) => {
        res.send('GET request successful!');
    })
       
        //post request
        .post((req,res) => 
        res.send('POST request successful!'));
     
   //this route is for put and delete 
    app.route('/item/:itemID')
        //update item      
        .put((req, res) =>
        res.send('PUT request successful!'))
        //delete item
        .delete((req, res) =>
        res.send('DELETE request successful!'));
}

export default routes;