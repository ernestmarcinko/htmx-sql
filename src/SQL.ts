import htmx from "htmx.org";
import { HtmxExtension } from "./types";

// "Stolen" from: https://gist.github.com/tmarshall/31e640e1fa80c597cc5bf78566b1274c
const temple = (template: string, vars = {}) => {
    const handler = new Function(
        "vars",
        [
            "const tagged = ( " + Object.keys(vars).join(", ") + " ) =>",
            "`" + template + "`",
            "return tagged(...Object.values(vars))",
        ].join("\n")
    );

    return handler(vars);
};

export default class SQL {
    constructor() {
        this.init(window?.htmx);
    }

    init(h?: typeof htmx) {
        h?.defineExtension("sql", {
            onEvent: this.onEvent.bind(this),
        } as HtmxExtension);
    }

    onEvent(name: string, evt: any) {
        if (name === "htmx:configRequest" && evt.detail?.parameters) {
            const params = evt.detail.parameters;
            const sql = evt.target.getAttribute("hx-sql");
            const exec = evt.target.getAttribute("hx-exec");

            if (!!sql) {
                params.sql = temple(sql, params);
            }
            if (!!exec) {
                params.exec = temple(exec, params);
            }
        }
    }
}
