// There is issue with module.export 
// so we have used global
const io = global.io;

// Emit an event to a specific room
function emitToRoom(roomId, eventName, data) {
    console.log(`socketIo ${io}`)
    io.of('/socket').to(roomId).emit(eventName, data);
}

// All custom event of socket
const SOCKET_EVENTS = {
    TODO_ADDED: 'todoAdded',
    TODO_REMOVED: 'todoRemoved',
    TODO_UPDATED: 'todoUpdated'
};

module.exports ={
    emitToRoom,
    SOCKET_EVENTS
}
