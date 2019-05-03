const Mutations = {
    async createBlogPost(parent, args, ctx, info) {
        // TODO: Check if they are logged in
    
        const item = await ctx.prisma.mutation.createBlogPost(
          {
            data: {
              ...args,
            },
          },
          info
        );
    
        console.log(item);
    
        return item;
      },
};

module.exports = Mutations;
