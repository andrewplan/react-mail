import React from "react";
import { Link } from 'react-router';

import Contact from "./Contact";
import ContactLink from "./ContactLink"
import { getContacts } from './../services/contactsService';

export default class Contacts extends React.Component {
		constructor( props ) {
				super( props );

				this.state = {
					contacts: []
				}
		}

		componentWillMount() {
				this.setState( { contacts: getContacts() } );
		}

		render() {
				const styles = this.getStyles();
				const contacts = this.state.contacts
						.map( contact => (
								<Link
										key={ contact._id }
										to={ `/contacts/${ contact._id }` }
								>
										<ContactLink
												key={ contact._id }
												company={ contact.company }
												email={ contact.email }
												name={ contact.name }
												phone={ contact.phone }
										/>
								</Link>
						) );

				return (
						<div>
								<div>
										<h1>Contacts</h1>
										<div style={ styles.contactsWrapper }>
												{ contacts }
										</div>
								</div>

								<div>
										{ this.props.children }
								</div>
						</div>
				);
		}

		getStyles() {
				return {
						contactsWrapper: {
								display: "flex"
								, flexWrap: "wrap"
								, justifyContent: "space-around"
						}
				}
		}
}
