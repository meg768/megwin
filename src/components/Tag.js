import React from 'react';
import PropTypes from 'prop-types';

module.exports = class extends React.Component {

	constructor(...props) {
		super(...props);
	};

	static defaultProps = {
		tag: 'div'
	};

	static propTypes = {
		tag: PropTypes.string.isRequired
	};

	render() {
		var {tag: Tag, ...attributes} = this.props;

		return(
			<Tag {...attributes}>
				{this.props.children}
			</Tag>
		);

	};

}
