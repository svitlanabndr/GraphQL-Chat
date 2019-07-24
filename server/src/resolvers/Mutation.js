const { Prisma } = require('prisma-binding')

function postMessage(parent, args, context, info) {
    return context.prisma.createMessage({
        body: args.body
    })
}

async function postReply(parent, args, context, info) {
    const messageExists = await context.prisma.$exists.message({
        id: args.messageId
    });

    if (!messageExists)
        throw new Error(`Message with ID ${args.messageId} does not exist`);
    
    return context.prisma.createReply({
        body: args.body,
        message: { connect: { id: args.messageId } }
    });
}

async function updateLikeCount(parent, { id }, context, info) {
    const messageExists = await context.prisma.$exists.message({ id });

    if (!messageExists)
        throw new Error(`Message with ID ${args.messageId} does not exist`);

    const message = await context.prisma.messages({ where: { id } }, info);
    const prevLikes = message[0].likesCount;

    return context.prisma.updateMessage({
        where: { id },
        data: { likesCount: prevLikes + 1 },
    });
}

async function updateDislikeCount(parent, { id }, context, info) {
    const messageExists = await context.prisma.$exists.message({ id });

    if (!messageExists)
        throw new Error(`Message with ID ${args.messageId} does not exist`);

    const message = await context.prisma.messages({ where: { id } }, info);
    const prevDislikes = message[0].dislikesCount;

    return context.prisma.updateMessage({
        where: { id },
        data: { dislikesCount: prevDislikes + 1 },
    });
}

module.exports = {
    postMessage,
    postReply,
    updateLikeCount,
    updateDislikeCount
}
