
//create routes for the enppints
//route function
const routes = (app) => {
    app.route('/item')
        //get request
        .get((req,res) => 
        res.send('GET request successful!'))
        
        //post request
        .post((req,res) => 
        res.send('POST request successful!'));
     
   //this route is for put and delete 
    app.route('/contact/:contactID')
        //update item      
        .put((req,res) =>
        res.send('PUT request successful!'))
        //delete item
        .delete((req,res) =>
        res.send('DELETE request successful!'));
}

export default routes;