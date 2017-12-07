/// <reference types="react" />
import { Component, ErrorInfo, ReactElement, ReactPortal } from 'react';
export declare const hoc: <P, S>(base?: typeof Component) => {
    new (props: any, render: any, context: any): {
        _context: any;
        partial(partial: any, arg?: any, key?: any): any;
        setState<K extends keyof S>(f: (prevState: Readonly<S>, props: P) => Pick<S, K>, callback?: () => any): void;
        setState<K extends keyof S>(state: Pick<S, K>, callback?: () => any): void;
        forceUpdate(callBack?: () => any): void;
        render(): string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactElement<any>)[] | ReactPortal;
        props: Readonly<{
            children?: string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactElement<any>)[] | ReactPortal;
        }> & Readonly<P>;
        state: Readonly<S>;
        context: any;
        refs: {
            [key: string]: Element | Component<any, {}>;
        };
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, prevContext: any): void;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    };
};
declare const PureJsx: {
    new (props: any, render: any, context: any): {
        _context: any;
        partial(partial: any, arg?: any, key?: any): any;
        setState<K extends never>(f: (prevState: Readonly<{}>, props: {}) => Pick<{}, K>, callback?: () => any): void;
        setState<K extends never>(state: Pick<{}, K>, callback?: () => any): void;
        forceUpdate(callBack?: () => any): void;
        render(): string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactElement<any>)[] | ReactPortal;
        props: Readonly<{
            children?: string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactElement<any>)[] | ReactPortal;
        }> & Readonly<{}>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: Element | Component<any, {}>;
        };
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, prevContext: any): void;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    };
};
export default PureJsx;
