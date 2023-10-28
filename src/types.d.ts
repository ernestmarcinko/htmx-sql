import SQL from "./SQL";
import htmx from "htmx.org";

export interface HtmxExtension {
    onEvent?: (name: string, evt: CustomEvent) => any;
    transformResponse?: (text: any, xhr: XMLHttpRequest, elt: any) => any;
    isInlineSwap?: (swapStyle: any) => any;
    handleSwap?: (swapStyle: any, target: any, fragment: any, settleInfo: any) => any;
    encodeParameters?: (xhr: XMLHttpRequest, parameters: any, elt: any) => any;
}


declare module "htmx.org" {
  function defineExtension(name: string, ext: HtmxExtension): void;
  type HtmxExtensions = {
    "sql": HtmxExtension;
  };
}

declare global {
  interface Window {
    htmxSQL: SQL;
    htmx: typeof htmx;
  }
}