/// <reference types="react" />
import { Component, ErrorInfo, ReactElement, ReactPortal } from 'react';
export declare const hoc: <P, S>(base?: typeof Component) => {
    new (props: any, render?: any, context?: any): {
        _context: any;
        partial(partial: any, arg?: any, key?: any): any;
        setState<K extends keyof S>(state: S | ((prevState: Readonly<S>, props: P) => S | Pick<S, K>) | Pick<S, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        render(): string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactElement<any>)[] | ReactPortal;
        props: Readonly<{
            children?: string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactElement<any>)[] | ReactPortal;
        }> & Readonly<P>;
        state: Readonly<S>;
        context: any;
        refs: {
            [key: string]: Element | Component<any, {}, any>;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): any;
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    };
};
declare const PureJsx: {
    new (props: any, render?: any, context?: any): {
        _context: any;
        partial(partial: any, arg?: any, key?: any): any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: {}) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        render(): string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactElement<any>)[] | ReactPortal;
        props: Readonly<{
            children?: string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactElement<any>)[] | ReactPortal;
        }> & Readonly<{}>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: Element | Component<any, {}, any>;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
};
export default PureJsx;
