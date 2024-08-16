declare module "react-gtm-module" {
  export interface TagManagerArgs {
    gtmId: string;
    events?: Record<string, any>;
    dataLayer?: Record<string, any>;
    dataLayerName?: string;
    auth?: string;
    preview?: string;
  }

  export default class TagManager {
    static initialize(args: TagManagerArgs): void;
    static dataLayer(args: { dataLayer: Record<string, any> }): void;
  }
}
