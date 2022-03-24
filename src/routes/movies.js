'use strict';

const express = require('express');
const { MovieModel } = require('../models');
const router = express.Router();

router.post('/movie', async (request, response, next) => {
  let newMovieData = request.body;
  let movieResponseData = await MovieModel.create(newMovieData);
  response.send(movieResponseData);
});

router.get('/movie', async (request, response, next) => {
  let allMovieData = await MovieModel.findAll();
  response.status(200).send(allMovieData);
});

router.get('/movie/:id', async (request, response, next) => {
  let movieId = request.params.id;
  let oneMovieData = await MovieModel.findOne({where: {id: movieId}});
  response.status(200).send(oneMovieData);
});

router.put('/movie/:id', async (request, response, next) => {
  let movieId = request.params.id;
  let updatedData = request.body;
  let movieToUpdate = await MovieModel.findOne({where: {id: movieId}});
  let updatedMovieData = await movieToUpdate.update(updatedData);
  response.status(200).send(updatedMovieData);
});

router.delete('/movie/:id', async (request, response, next) => {
  let movieId = request.params.id;
  await MovieModel.destroy({where: {id: movieId}});
  response.status(200).send(null);
});

module.exports = router;