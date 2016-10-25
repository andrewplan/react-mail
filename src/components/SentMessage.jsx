import React from 'react';
import { findSentMessageById } from './../services/sentService';

export default class SentMessage extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            key: ''
            , recipientEmail: ''
            , ccEmail: ''
            , bccEmail: ''
            , subject: ''
            , content: ''
        };
    }

    componentWillMount() {
        this.getMessage.call( this, this.props.params.sentMessageId );
    }

    componentWillUpdate( nextProps, nextState ) {
        if ( nextProps.params.sentMessageId !== this.props.params.sentMessageId ) {
            this.getMessage.call( this, nextProps.params.sentMessageId );
        }
    }

    getMessage( sentMessageId ) {
        let message = findSentMessageById( sentMessageId );
        console.log( 'message is ', message );
        this.setState( {
            key: message._id
            , recipientEmail: message.recipientEmail
            , ccEmail: message.ccEmail
            , bccEmail: message.bccEmail
            , subject: message.subject
            , content: message.content
        } );
    }

    render() {
        return(
            <div>
                <h2>{ this.state.recipientEmail }</h2>
                <p>{ this.state.ccEmail }</p>
                <p>{ this.state.bccEmail }</p>
                <h3>{ this.state.subject }</h3>
                <p>{ this.state.content }</p>
            </div>
        );
    }

}
