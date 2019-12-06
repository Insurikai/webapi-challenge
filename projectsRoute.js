const express = require('express');
const db = require('./data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).send(projects);
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
});

router.get('/:id', (req, res) => {
  db.get(req.params.id)
    .then(project => {
      res.status(200).send(project);
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
});

router.get('/:id/actions', (req, res) => {
  db.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).send(actions);
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
});

router.post('/', (req, res) => {
  db.insert(req.body)
    .then(project => {
      res.status(200).send(project);
    })
    .catch(err => {
      res.status(500).send({ error: err.toString() });
    });
});

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
    .then(recordsDeleted => {
      res
        .status(200)
        .send(`Successfully deleted project with id ${req.params.id}.`);
    })
    .catch(err => {
      res.status(500).send({ error: err.toString() });
    });
});

router.put('/:id', (req, res) => {
  db.update(req.params.id, req.body)
    .then(project => {
      res.status(200).send(project);
    })
    .catch(err => {
      res.status(500).send({ error: err.toString() });
    });
});

module.exports = router;
