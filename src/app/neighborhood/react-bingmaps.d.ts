declare module "react-bingmaps" {
  import { Component } from "react";

  export interface ReactBingmapsProps {
    bingmapKey: string;
    center: [number, number];
    zoom?: number;
    pushPins?: {
      location: [number, number]; // Correcting the location type to be [number, number]
      option?: {
        color?: string;
      };
    }[];
  }

  export class ReactBingmaps extends Component<ReactBingmapsProps> {}

  // You can define other components/interfaces as needed
}
