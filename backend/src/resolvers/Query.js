const { forwardTo } = require('prisma-binding');

const Query = {
  blogPost: forwardTo('prisma'),
  blogPosts: forwardTo('prisma')
};

module.exports = Query;
