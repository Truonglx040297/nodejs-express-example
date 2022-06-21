import { Basic } from "../common/basic.interface";

export interface CreateCustomer {
  name: string;
  address: string;
  email: string;
}

export interface Customer extends Basic, CreateCustomer {}
