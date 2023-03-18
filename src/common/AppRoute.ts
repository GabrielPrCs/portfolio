interface IAppRoute {
    path: string;
    element: JSX.Element;
}

export default class AppRoute<T = void> implements IAppRoute {
    path: string;
    element: JSX.Element;

    constructor(props: IAppRoute) {
        this.path = props.path;
        this.element = props.element;
    }

    getPath(params: T): string {
        return this.path;
    }
}
