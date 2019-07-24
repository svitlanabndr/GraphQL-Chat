function reviews(parent, args, context) {
    return context.prisma.product({
        id: parent.id
    }).reviews();
}

module.exports = {
    reviews
}
