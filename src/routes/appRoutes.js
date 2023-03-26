import { addNewContact } from "../controllers/appController";

// Define end-points
const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)//shows the request enpoint
            console.log(`Request type: ${req.method}`)//shows the HTTP request method used
            next();
        },
            (req, res, next) => {
                res.send('GET request successful')
            })

        .post(addNewContact);

    app.route('/contact/:contactId')
        .put((req, res) => res.send('PUT request successful'))

        .delete((req, res) => res.send('DELETE request successful'))

}

export default routes;