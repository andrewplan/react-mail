import React from "react";
import { browserHistory } from 'react-router';

import { addSentMessage } from './../services/sentService';

export default class Draft extends React.Component {
		constructor() {
				super();

				this.state = {
						recipientEmail: ''
						, ccEmail: ''
						, bccEmail: ''
						, subject: ''
						, content: ''
				};
		}

		handleChange( field, event ) {
				this.setState( {
						[ field ]: event.target.value
				} );
				{ /* console.log( this.state ); */ }
		}

		sendMessage( event ) {
				event.preventDefault();
				addSentMessage( {
						recipientEmail: this.state.recipientEmail
						, ccEmail: this.state.ccEmail || ''
						, bccEmail: this.state.bccEmail || ''
						, subject: this.state.subject || ''
						, content: this.state.content || ''
				} );
				browserHistory.push( '/sent' );
		}

		render() {
				const styles = this.getStyles();

				return (
					<div>
						<h1>New Message</h1>
						<form style={ styles.form }>
							<input
								onChange={ this.handleChange.bind( this, 'recipientEmail' ) }
								placeholder="To: person@email.com"
								style={ styles.input }
								type="text"
								value={ this.state.recipientEmail }
							/>

							<input
								onChange={ this.handleChange.bind( this, 'ccEmail' ) }
								placeholder="cc: person@email.com"
								style={ styles.input }
								type="text"
								value={ this.state.ccEmail }
							/>

							<input
								onChange={ this.handleChange.bind( this, 'bccEmail' ) }
								placeholder="bcc: person@email.com"
								style={ styles.input }
								type="text"
								value={ this.state.bccEmail }
							/>

							<input
								onChange={ this.handleChange.bind( this, 'subject' ) }
								placeholder="Subject"
								style={ styles.input }
								type="text"
								value={ this.state.subject }
							/>

							<textarea
								onChange={ this.handleChange.bind( this, 'content' ) }
								cols="50"
								rows="17"
								style={ styles.draft }
								value={ this.state.content }
							/>

							<button
									onClick={ this.sendMessage.bind( this ) }
									style={ styles.sendButton }
							>
								Send
							</button>
						</form>

					</div>
				);
			}

			getStyles() {
				return {
					draft: {
						resize: "none"
						, width: "100%"
					}
					, form: {
						margin: "0 auto"
						, width: "90%"
					}
					, input: {
						border: "1px solid #e0e0e0"
						, borderRadius: 3
						, height: 28
						, marginBottom: 5
						, width: "100%"
					}
					, sendButton: {
						backgroundColor: "#00d8ff"
						, border: "1px solid #e0e0e0"
						, color: "white"
						, fontWeight: "bold"
						, height: 40
						, width: 100
					}
				}
			}
}
