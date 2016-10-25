import React from 'react';

export default class SentMessageLink extends React.Component {
    render() {
        const styles= this.getStyles();

        return (
            <div style={ styles.wrapper }>
                <h2>{ this.props.subject }</h2>
                <p>To: { this.props.recipientEmail }</p>
            </div>
        );
    }

    getStyles() {
  			return {
  					wrapper: {
  							alignItems: "baseline"
  							, border: "1px solid #e0e0e0"
  							, borderRadius: 4
  							, display: "flex"
  							, justifyContent: "space-between"
  							, margin: 10
  							, padding: 10
  							, width: "95%"
  					}
  			}
  	}
}
