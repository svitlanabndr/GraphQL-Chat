async function products(parent, args, context) {
    const where = args.filter 
        ? { title: args.filter } 
        : {};
    
    const productList = await context.prisma.products({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy
    });
    
    const count = await context.prisma
        .productsConnection({
            where
        })
        .aggregate()
        .count();

    return {
        productList,
        count
    };
}

module.exports = {
    products
}
