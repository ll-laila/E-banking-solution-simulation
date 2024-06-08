import {PaymentAccount} from "./PaymentAccount";

export interface Client {
  id : number;
  firstName : string;
  lastName : string;
  cin : string;
  email : string;
  address : string;
  phoneNumber : string;
  paymentAccount: PaymentAccount;
}
