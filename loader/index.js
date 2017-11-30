'use strict';

const loaderUtils = require( 'loader-utils' );

function isSourceCodeFile( source )
{
	source = source.trim( );
	while ( source.startsWith( '/' ) )
	{
		if ( source.startsWith( '/*' ) )
			source = source.substr( source.indexOf( '*/' ) + 2 ).trim( );
		else
			source = source.substr( source.indexOf( '\n' ) ).trim( );
	}

	const useStrictHeaders = [ "'use strict'", '"use strict"' ];
	if (
		source.startsWith( useStrictHeaders[ 0 ] ) ||
		source.startsWith( useStrictHeaders[ 1 ] )
	)
		return true;
	return false;
}

module.exports = function( source )
{
	this.cacheable( );

	const options = Object.assign( { }, loaderUtils.getOptions( this ) );

	if ( isSourceCodeFile( source ) )
		return source;

	// Options
	const strict       = options.strict || false;
	const contexts     = options.contexts || [ ];
	const requireReact = options.requireReact == null
		? contexts.indexOf( 'React' ) === -1
		: options.requireReact;

	const contextsList = ( contexts.length > 0 )
		? "{ " + options.contexts.join( ', ' ) + " }"
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
