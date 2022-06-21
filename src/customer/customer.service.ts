import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { CreateCustomer } from "./customer.interface";
import { CustomerRepository } from "./customer.repository";

export class CustomerService {
  constructor(private readonly customerRepo: CustomerRepository) {}

  async createCustomer(
    data: CreateCustomer,
    res: Response<any, Record<string, any>, number>
  ) {
    try {
      const a = await this.customerRepo.create("customer", data);
      res.send(a);
    } catch (err) {
      res.send(err);
    }
  }
}
