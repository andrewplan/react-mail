const contactCtrl = require( './contactCtrl' );

module.exports = app => {
    app.route( '/api/contacts' )
        .get( contactCtrl.getContacts );
}
