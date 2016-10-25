export function getSentMessages() {
    return sentMessages.slice();
}

export function addSentMessage( sentMessage ) {
    sentMessage._id = createId();
    sentMessages.push( sentMessage );
}

export function createId() {
    if ( sentMessages.length === 0 ) {
        return 1;
    }
    return sentMessages[ sentMessages.length - 1 ]._id + 1;
}

export function findSentMessageById( id ) {
    for ( let i = 0; i < sentMessages.length; i++ ) {
        if ( sentMessages[ i ]._id.toString() === id.toString() ) {
            return sentMessages[ i ];
        }
    }

    return {};
}

const sentMessages = [];
