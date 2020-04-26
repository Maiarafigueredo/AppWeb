import {addNewItem, getItem, getItemWithID, updateItem, deleteItem} from '../srcControllers/controller';

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
    }, getItem)
       
        //post endpoint
        .post(addNewItem);
     
    app.route('/item/:itemID')
        
         //get a specific item
        .get(getItemWithID)      
         
         //update a specific item
        .put(updateItem)
         
        //delete a specific item
        .delete(deleteItem);
}

export default routes;