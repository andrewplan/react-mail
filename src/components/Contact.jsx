import React from "react";
import { findContactById } from './../services/contactsService';

export default class Contact extends React.Component {
		constructor( props ) {
				super( props );

				this.state = {
						name: ''
						, company: ''
						, email: ''
						, phone: ''
				}
		}

		componentWillMount() {
				this.getContact.call( this, this.props.params.contactId );
		}

		componentWillUpdate( nextProps, nextState ) {
				if ( nextProps.params.contactId !== this.props.params.contactId ) {
						this.getContact.call( this, nextProps.params.contactId );
				}
		}

		getContact( contactId ) {
				let contact = findContactById( contactId );

				this.setState( {
						name: contact.name
						, company: contact.company
						, email: contact.email
						, phone: contact.phone
				} );
		}

		getStyles() {
			return {
				contactWrapper: {
					margin: 10
				}
				, name: {
					fontWeight: "bold"
				}
			}
		}

		render() {
				const styles = this.getStyles();

				return (
						<ul style={ styles.contactWrapper }>
								<li style={ styles.name }>{ this.state.name }</li>
								<li>Company: { this.state.company }</li>
								<li>Email: { this.state.email }</li>
								<li>: Phone #: { this.state.phone }</li>
						</ul>
				);
		}

}
