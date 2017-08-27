import React from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag.js';

module.exports = class extends React.Component {

	constructor(...props) {
		super(...props);
	};

	static defaultProps = {
		tag: 'div'
	};

	static propTypes = {
		tag: PropTypes.string
	};

	render() {

		return(
			<Tag {...this.props}>
				{this.props.children}
			</Tag>
		);

	};

}
