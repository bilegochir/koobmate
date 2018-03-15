import Post from '../models/PostModel'
import User from '../models/UserModel'
import Category from '../models/CategoryModel'
import Message from '../models/MessageModel'
import BookRequest from '../models/RequestModel'
import { triggerAsyncId } from 'async_hooks';

//var Post = mongoose.model('Post')

export const addNewPost = (req, res) => {

    let newPost = new Post(req.body);
    newPost.save((err, post) => {
        if (err) {
            res.send(err);
        }
        console.log(post)
        res.json(post);
    })
};

export const addNewCategory = (req, res) => {

    let newCategory = new Category(req.body);``
    newCategory.save((err, cat) => {
        if (err) {
            res.send(err);
        }
        
        res.json(cat);
    })
};

export const saveRequest = (req, res) => {

    let newRequest = new BookRequest(req.body);
    newRequest.save((err, cat) => {
        if (err) {
            res.send(err);
        }
        
        res.json(cat);
    })
};

export const addNewMessage = (req, res) => {

    let newMessage = new Message(req.body);
    newMessage.save((err, msg) => {
        if (err) {
            res.send(err);
        }
        
        res.json(msg);
    })
};

export const updatePost = (req, res) => {
    try {
        Post.update({ _id: req.body._id}, req.body, (err, post) => {
            if (err) {
                res.send(err);
            }

            res.json(post);
        })
    } catch (error) {
        console.log(error)
    }
    
};

export const getPosts = (req, res) => {
    Post.find({}, (err, post) => {
        if (err) {
            res.send(err);
        }

        res.json(post);
    })
};

export const getRequests = (req, res) => {

    BookRequest.find({owner: req.params.owner}, (err, post) => {
        if (err) {
            res.send(err);
        }

        res.json(post);
    })
};

export const getMessages = (req, res) => {
    Message.find({book: req.params.book}, (err, post) => {
        if (err) {
            res.send(err);
        }
        
        res.json(post);
    }).sort('-created_date').exec()
};

export const searchBook = (req, res) => {

    Post.find({ $or : [ 

        { title : { $regex: req.params.query, $options: 'i' } }, 
        { content : { $regex: req.params.query, $options: 'i' }  } ] }, (err, post) => {

        if (err) {
            res.send(err);
        }

        res.json(post);
    })
};

export const getCategories = (req, res) => {
    Category.find({}, (err, post) => {
        if (err) {
            res.send(err);
        }

        res.json(post);
    })
};

export const getPost = (req, res) => {
    try {
        Post.find({_id: req.params.id}, (err, post) => {
            if (err) 
                res.send(err);
            
            if(post !== null)
                res.json(post);
        })
    } catch (error) {
        console.log(error)
    }
    
};

export const getBooksByUser = (req, res) => {
    try {
        Post.find({user: req.params.user}, (err, post) => {
            if (err) 
                res.send(err);
            
            res.json(post);
        })
    } catch (error) {
        console.log(error)
    }
    
};

export const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    })
};
