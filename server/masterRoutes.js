const contactRoutes = require( './features/Contact/contactRoutes' );
const messageRoutes = require( './features/Message/messageRoutes' );

module.exports = app => {
    contactRoutes( app );
    messageRoutes( app );
};
