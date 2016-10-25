import React from 'react';
import { Link } from 'react-router';

import SentMessageLink from './SentMessageLink';
import { getSentMessages } from './../services/sentService';

export default class Sent extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            messages: []
        };
    }

    componentWillMount() {
        this.setState( {
            messages: getSentMessages()
        } );
    }

    render() {
				const styles = this.getStyles();
				const messages = this.state.messages.map( message => (
						<Link
                key={ message._id }
                to={ `/sent/${ message._id }` }
            >
                <SentMessageLink
                    key={ message._id }
                    recipientEmail={ message.recipientEmail }
                    subject={ message.subject }
                />
						</Link>
				) );

				return (
						<div style={ styles.wrapper }>
								<div style={ styles.messageLinkWrapper }>
										{ messages }
								</div>
                <div style={ styles.activeMessageWrapper }>
                    { this.props.children }
                </div>
						</div>
				);
		}

		getStyles() {
				return {
						activeMessageWrapper: {
							border: "1px solid #e0e0e0"
							, display: "inline-block"
							, height: 570
							, flex: 2
						}
						, messageLinkWrapper: {
							 flex: 1
							, height: 570
							, overflow: "scroll"
						}
						, wrapper: {
							display: "flex"
							, marginTop: 20
						}
				}
		}


}
