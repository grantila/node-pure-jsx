'use strict';

const loaderUtils = require( 'loader-utils' );

module.exports = function( source )
{
	this.cacheable( );

	const query = loaderUtils.parseQuery( this.query ) || { };

	// Options
	const strict       = query.strict || false;
	const contexts     = query.contexts || [ ];
	const requireReact = query.requireReact == null
		? contexts.indexOf( 'React' ) === -1
		: query.requireReact;

	const contextsList = ( contexts.length > 0 )
		? "{ " + query.contexts.join( ', ' ) + " }"
		: "";

	const strictHeader = !strict
		? ""
		: "'use strict';\n\n";

	const requireReactHeader = !requireReact
		? ""
		: "import React from 'react'\n\n";

	const mainHeader = `export default function( ${contextsList} )
		{
			return function( arg, key )
			{
				const $ = this.constructor;
				const props = this.props;
				const state = this.state;

				return `;

	const header = strictHeader + requireReactHeader + mainHeader;

	const footer = `;
			};
		}`;

	return header + source + footer;
};
