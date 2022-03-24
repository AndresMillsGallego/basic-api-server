'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const { sequelize } = require('../src/models');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

// Below is where I will write all my REST tests
describe('Testing our HTTP methods', () => {

  // This will test the status code on a bad path
  test('API should return a 404 status if the route is bad', async () => {
    const response = await request.get('/invalidRoute');
    expect(response.status).toEqual(404);
  });

  // Here are the tests for my Funko Model
  // This test will make sure the POST method is successful
  test('This should create a funko', async () => {
    let response =  await request.post('/funko').send({
      name: 'Wall-E',
      number: 45,
      collection: 'Pixar/Wall-E',
      condition: 'Excellent',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Wall-E');
    expect(response.body.number).toEqual(45);
    expect(response.body.collection).toEqual('Pixar/Wall-E');
    expect(response.body.condition).toEqual('Excellent');
  });

  // This test will make sure the GET (all) method is successful
  test('This should GET All funkos', async () => {
    let response =  await request.get('/funko');
    expect(response.status).toEqual(200);
  });

  // This test will make sure the Get (One) method is successful
  test('This should GET One funko', async () => {
    let response =  await request.get('/funko/1');
    expect(response.status).toEqual(200);
  });

  // This test will make sure the PUT method is successful
  test('This should UPDATE a funko', async () => {
    let updatedData = {name: 'Donald Duck'};
    let response =  await request.put('/funko/1').send(updatedData);
    expect(response.status).toEqual(200);
  });

  // This test will make sure the DELETE method is successful
  test('This should DESTORY a funko', async () => {
    let response =  await request.delete('/funko/1');
    expect(response.status).toEqual(200);
  });
});

// These are the tests for my Movie model
// This test will make sure the POST method is successful
test('This should create a movie', async () => {
  let response =  await request.post('/movie').send({
    title: 'The Goonies',
    genre: 'Action/Adventure',
    yearReleased: 1985,
  });
  expect(response.status).toEqual(200);
  expect(response.body.title).toEqual('The Goonies');
  expect(response.body.genre).toEqual('Action/Adventure');
  expect(response.body.yearReleased).toEqual(1985);
});

// This test will make sure the GET (all) method is successful
test('This should GET All movies', async () => {
  let response =  await request.get('/movie');
  expect(response.status).toEqual(200);
});

// This test will make sure the Get (One) method is successful
test('This should GET One movie', async () => {
  let response =  await request.get('/movie/1');
  expect(response.status).toEqual(200);
});

// This test will make sure the PUT method is successful
test('This should UPDATE a movie', async () => {
  let updatedData = {title: 'Adventures In Babysitting'};
  let response =  await request.put('/movie/1').send(updatedData);
  expect(response.status).toEqual(200);
});

// This test will make sure the DELETE method is successful
test('This should DESTORY a movie', async () => {
  let response =  await request.delete('/movie/1');
  expect(response.status).toEqual(200);
});