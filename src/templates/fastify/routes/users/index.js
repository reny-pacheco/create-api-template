'use strict';
const users = require('../../models/users');

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return users;
  });
};
