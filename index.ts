'use strict';

import {
	Component,
	ErrorInfo,
	ReactElement,
	ReactPortal,
} from 'react'

export const hoc = < P, S >( base = Component ) =>
	class PureJsx extends base< P, S >
	{
		public _context;

		constructor( props, render, context )
		{
			super( props );

			this._context = context || { };

			if ( typeof render === 'function' )
				this.render = render( this._context );

			else if (
				typeof render === 'object' &&
				typeof render.default === 'function'
			)
				this.render = render.default( this._context );
		}

		partial( partial, arg, key )
		{
			return partial( this._context ).bind( this, arg, key )( );
		}
	};

const PureJsx = hoc( );

export default PureJsx;
