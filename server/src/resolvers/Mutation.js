function postProduct(parent, args, context, info) {
    return context.prisma.createProduct({
        title: args.title,
        price: args.price
    })
}

async function postReview(parent, args, context, info) {
    const productExists = await context.prisma.$exists.product({
        id: args.productId
    });

    if (!productExists) {
        throw new Error(`Product with ID ${args.productId} does not exist`);
    }
    
    return context.prisma.createReview({
        text: args.text,
        product: { connect: { id: args.productId } }
    });
}

module.exports = {
    postProduct,
    postReview
}
