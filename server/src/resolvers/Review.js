function product(parent, args, context) {
    return context.prisma.review({
        id: parent.id
    }).product();
}

module.exports = {
    product
}
