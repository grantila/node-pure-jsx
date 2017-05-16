# Pure JSX

This is an opinionated helper around React that will allow you to have pure JSX files, beginning with any tag (e.g. `<div>`). React import, and other dependency injection mechanisms, as well as a middle class between your component class and `React.Component` is provided.

There is a built-in loader for WebPack, for the pure JSX files suffixed `.jsx`.

In the view, you have access to a context which can contain any data. This is accompanied by a _"query"_ object in WebPack. You also have access to `state` and `props` without needing to prepend `this.`. The constructor is available as `$`, so that static class members are referenced as `$.member`. This is useful to inject dependent sub-components.

# Usage

## The component logic

```js
import PureJsx from 'pure-jsx'
import view from './view.jsx'

// This should be the same for the entire app, and is reached from all views
const appContext = { app: 'hello world' };

export default class MyComponent extends PureJsx
{
    constructor( props )
    {
        super( props, view, appContext );

        this.state = { value: "example" };
    }
}
```

## The view

All properties in the _context_ (above) will be exposed, if accompanied with the corresponding WebPack loader query (below).

```html
<div>{ app }: { state.value }</div>
```

## The WebPack loader

You specify the context variables in the `query` object for the `pure-jsx/loader`.

```js
module: {
    loaders: [
        {
            test    : /\.jsx$/,
            include : "./app", // Your app root
            // Use webpack-combine-loaders to use this together with babel
            loader  : webpackCombineLoaders( [
                // Your choice of babel presets, if at all
                {
                    loader  : 'babel-loader',
                    query   : {
                        cacheDirectory: true,
                        presets: [ 'react', 'es2015', 'stage-1' ]
                    }
                },
                {
                    loader: 'pure-jsx/loader',
                    query   : {
                        strict   : true, // Will prepend 'use strict'
                        contexts : [ 'app' ] // Your context variables
                    }
                }
            ] )
        }
    ]
}
```

## HOC (Higher-Order Component)

PureJSX can return a HOC of any component, e.g. if you want it to subclass a custom class (or `React.PureComponent`). To do this, use the provided `hoc` function:

```js
import { hoc }           from 'pure-jsx'
import { PureComponent } from 'react'

import view from './view.jsx'

// This should be the same for the entire app, and is reached from all views
const appContext = { app: 'hello world' };

export default class MyComponent extends hoc( PureComponent )
{
    constructor( props )
    {
        super( props, view, appContext );

        this.state = { value: "example" };
    }
}
```
