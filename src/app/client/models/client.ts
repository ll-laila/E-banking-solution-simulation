import {PaymentAccount} from "./PaymentAccount";

export interface Client {
  id? : number;
  firstName : string;
  lastName : string;
  address : string;
  cin : string;
  email : string;
  phoneNumber : string;
  password : string;
  paymentAccount: PaymentAccount[];
}
