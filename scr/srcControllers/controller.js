// <!-- *   Title: <Building RESTful APIs with node.js and Express>
// *    Author: Emmanuel Henri>
// *    Date: <2019>
// *    Availability: https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express/building-a-rest-api-with-node-and-express-->
import mongoose from 'mongoose';
import {ItemSchema } from '../srcModels/model';

//item constructor
const Item = mongoose.model('Item', ItemSchema);

//function add New Item
export const addNewItem = (req, res) => {
    let newItem = new Item(req.body);

    //function to save the item in the database
    newItem.save((err, item) => {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

export const getItem = (req, res) => {
    Item.find({}, (err, item) => {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

export const getItemWithID = (req, res) => {
    Item.findById(req.params.itemID, (err, item) => {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

export const updateItem = (req, res) => {
    Item.findOneAndUpdate({ _id: req.params.itemID }, req.body, { new: true, useFindAndModify: false }, (err, item) => {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });
}

export const deleteItem = (req, res) => {
    Item.remove({ _id: req.params.itemID }, (err, item) => {
        if(err) {
            res.send(err);
        }
        res.json({ message: "Item deleted"});
    });
}