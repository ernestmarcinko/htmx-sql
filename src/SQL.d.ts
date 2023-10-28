import htmx from "htmx.org";
export default class SQL {
    constructor();
    init(h?: typeof htmx): void;
    onEvent(name: string, evt: any): void;
}
