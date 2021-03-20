module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        db.create_product([name, description, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! You got an error.' });
                console.log(err)
            })
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.read_product(id)
            .then(product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! You got an error.' });
                console.log(err)
            });
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db');

        db.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! You got an error.' });
                console.log(err)
            });
    },
    update: (req, res, next) => {
        const db = req.app.get('db');
        const { params, query } = req;

        db.update_products([params.id, query.desc])
            .then(() => {
                res.status(500).send({ errorMessage: 'Oops! You got an error.' });
                console.log(err)
            });
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params

        db.delete_products(id)
        then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Opps! You got an error.' });
                console.log(err)
            });
    }
};