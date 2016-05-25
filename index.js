'use strict';

import React from 'react'

export default class PureJsx extends React.Component
{
	constructor( props, render, context )
	{
		super( props );

		this._context = context || { };

		if ( typeof render === 'function' )
			this.render = render( this._context );
	}

	partial( partial, arg, key )
	{
		return partial( this._context ).bind( this, arg, key )( );
	}
}
