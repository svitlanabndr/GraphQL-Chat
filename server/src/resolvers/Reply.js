function message(parent, args, context) {
    return context.prisma.review({
        id: parent.id
    }).message();
}

module.exports = {
    message
}
