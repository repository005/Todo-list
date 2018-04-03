import React from 'react';

class ClearButton extends React.Component {
	render() {

		return (
			<button type='reset' className='clear-button' onClick={this.props.onClick}>Очистить список</button>
		);
	}
}

export default ClearButton;