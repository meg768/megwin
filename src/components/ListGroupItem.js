import React from 'react';
import PropTypes from 'prop-types';
import {sprintf} from 'yow';
import classNames from 'classnames';

import Tag from './Tag.js';

module.exports = class ListGroupItem extends React.Component {

	constructor(...props) {
		super(...props);
	};

	static defaultProps = {
		tag: 'div'
	};

	static propTypes = {
		tag:      PropTypes.string,
		color:    PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
	    active:   PropTypes.bool,
	    disabled: PropTypes.bool
	};

	render() {
		let classes = ['list-group-item'];
		let {style, disabled, color, active, ...attributes} = this.props;
		let defaultStyle = {};

		if (disabled)
			classes.push('disabled');

		if (active)
			classes.push('active');

		if (color)
			classes.push(sprintf('list-group-item-%s', color));

		return(
			<Tag className={classes.join(' ')} style={{...defaultStyle, ...style}} {...attributes}>
				{this.props.children}
			</Tag>
		);

	};

}
