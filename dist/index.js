'use strict';
import { Component, } from 'react';
export const hoc = (base = Component) => class PureJsx extends base {
    constructor(props, render, context) {
        super(props);
        this._context = context || {};
        if (typeof render === 'function')
            this.render = render(this._context);
        else if (typeof render === 'object' &&
            typeof render.default === 'function')
            this.render = render.default(this._context);
    }
    partial(partial, arg, key) {
        return partial(this._context).bind(this, arg, key)();
    }
};
const PureJsx = hoc();
export default PureJsx;
//# sourceMappingURL=index.js.map