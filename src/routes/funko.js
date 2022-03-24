'use strict';

const express = require('express');
const { FunkoModel } = require('../models');
const router = express.Router();

router.post('/funko', async (request, response, next) => {
  let newFunkoData = request.body;
  let funkoResponseData = await FunkoModel.create(newFunkoData);
  response.send(funkoResponseData);
});

router.get('/funko', async (request, response, next) => {
  let allFunkoData = await FunkoModel.findAll();
  response.status(200).send(allFunkoData);
});

router.get('/funko/:id', async (request, response, next) => {
  let funkoId = request.params.id;
  let oneFunkoData = await FunkoModel.findOne({where: {id: funkoId}});
  response.status(200).send(oneFunkoData);
});

router.put('/funko/:id', async (request, response, next) => {
  let funkoId = request.params.id;
  let updatedData = request.body;
  let funkoToUpdate = await FunkoModel.findOne({where: {id: funkoId}});
  let updatedFunkoData = await funkoToUpdate.update(updatedData);
  response.status(200).send(updatedFunkoData);
});

router.delete('/funko/:id', async (request, response, next) => {
  let funkoId = request.params.id;
  await FunkoModel.destroy({where: {id: funkoId}});
  response.status(200).send('Funko Destroyed');
});


module.exports = router;
