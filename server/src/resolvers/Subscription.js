function newMessageSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.message({
        mutation_in: ['CREATED']
    }).node();
}

const newMessage = {
    subscribe: newMessageSubscribe,
    resolve: payload => {
        return payload;
    }
};

function newReplySubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.reply({
        mutation_in: ['CREATED']
    }).node();
}

const newReply = {
    subscribe: newReplySubscribe,
    resolve: payload => {
        return payload;
    }
};

function newReactionSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.message({
        mutation_in: ['UPDATED']
    }).node();
}

const newReaction = {
    subscribe: newReactionSubscribe,
    resolve: payload => {
        return payload;
    }
};

module.exports = {
    newMessage,
    newReply,
    newReaction
}
