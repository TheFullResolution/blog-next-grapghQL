const { forwardTo } = require('prisma-binding');

const Query = {
  blogPost: forwardTo('db'),
  blogPosts: forwardTo('db')
};

module.exports = Query;
