import { addNewPost, getPosts, getUsers, updatePost, 
    getPost, addNewCategory, getCategories, searchBook,
    addNewMessage, getMessages, getBooksByUser,
    getRequests, saveRequest } 
    from '../controllers/RESTController'
    
import { register, login } from '../controllers/AuthenticationController';

const routes = (app) => {

    app.route('/book').get((req, res, next) => {
        next();
    }, getPosts)

    app.route('/book').post(addNewPost);
    app.route('/book').put(updatePost);
    app.route('/book/:id').get(getPost);
    app.route('/bookByUser/:user').get(getBooksByUser);
    app.route('/search/:query').get(searchBook);

    app.route('/category').get(getCategories);
    app.route('/category').post(addNewCategory);

    app.route('/request/:owner').get(getRequests);
    app.route('/request').post(saveRequest);

    app.route('/message').post(addNewMessage);
    app.route('/message/:book').get(getMessages);

    app.route('/register').post(register);
    app.route('/login').post(login);
    app.route('/user').get(getUsers);
    
}

export default routes;
