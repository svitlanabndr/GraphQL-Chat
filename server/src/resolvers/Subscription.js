function newProductSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.product({
        mutation_in: ['CREATED']
    }).node();
}

const newProduct = {
    subscribe: newProductSubscribe,
    resolve: payload => {
        return payload;
    }
};

function newReviewSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.review({
        mutation_in: ['CREATED']
    }).node();
}

const newReview = {
    subscribe: newReviewSubscribe,
    resolve: payload => {
        return payload;
    }
};

module.exports = {
    newProduct,
    newReview
}
