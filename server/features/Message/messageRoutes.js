const messageCtrl = require( './messageCtrl' );

module.exports = app => {
    app.route( '/api/messages' )
        .get( messageCtrl.getMessages );
}
