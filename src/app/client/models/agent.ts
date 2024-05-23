import {ServiceAgent} from "./serviceAgent";

export interface Agent {
  id? : number;
  firstName : string;
  lastName : string;
  address : string;
  phoneNumber : string;
  email : string;
  image : string;
  services: ServiceAgent[];
}
