import React from 'react';
import PropTypes from 'prop-types';
import {sprintf} from 'yow';

import Tag from './Tag.js';

module.exports = class Button extends React.Component {

	constructor(...props) {
		super(...props);
	};

	static defaultProps = {
		tag      : 'button',
		outline  : false,
		color    : 'secondary',
		disabled : false
	};

	static propTypes = {
		tag      : PropTypes.string,
		color    : PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger']),
		size     : PropTypes.oneOf(['large', 'small', 'sm', 'lg']),
	    outline  : PropTypes.bool,
	    disabled : PropTypes.bool
	};

	render() {
		var classes = ['btn'];
		var {disabled, action, size, color, active, outline, ...attributes} = this.props;

		if (disabled)
			classes.push('disabled');

		if (active)
			classes.push('active');

		if (color) {
			if (outline)
				classes.push(sprintf('btn-outline-%s', color));
			else
				classes.push(sprintf('btn-%s', color));
		}

		if (size) {
			if (size == 'small')
				size = 'sm';
			if (size == 'large')
				size = 'lg';

			classes.push(sprintf('btn-%s', size));
		}

		// Change to <a/> if href specified
		if (attributes.href) {
			tag = 'a';
	    }

		return(
			<Tag className={classes.join(' ')} {...attributes} >
				{this.props.children}
			</Tag>
		);

	};

}
