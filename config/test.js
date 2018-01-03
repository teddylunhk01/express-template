const supertest = require('supertest')
const { expect } = require('chai')
const api = 'http://localhost:3000'

module.exports = {
  server: supertest.agent(api),
  prefix: '/api/v1',
  expect
}