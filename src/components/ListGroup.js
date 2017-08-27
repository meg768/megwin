import React from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag.js';

module.exports = class ListGroup extends React.Component {

	constructor(...props) {
		super(...props);
	};

	static defaultProps = {
		tag: 'div',
		style: {}
	}


	static propTypes = {
		tag: PropTypes.string
	};

	render() {
		var classes = ['list-group'];
		var defaultStyle = {};
		var {style, ...attributes} = this.props;

		return(
			<Tag className={classes.join(' ')} style={{...defaultStyle, ...style}} {...attributes}>
				{this.props.children}
			</Tag>
		);

	};

}
