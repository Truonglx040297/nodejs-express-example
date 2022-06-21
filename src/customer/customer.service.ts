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

  async updateCustomer(
    data: CreateCustomer,
    id: number,
    res: Response<any, Record<string, any>, number>
  ) {
    try {
      const a = await this.customerRepo.update("customer", data, id);
      res.send(a);
    } catch (err) {
      res.send(err);
    }
  }

  async getAll(res: Response<any, Record<string, any>, number>) {
    try {
      const a = await this.customerRepo.findAll("customer");
      res.send(a);
    } catch (err) {
      res.send(err);
    }
  }

  async getOne(id: number, res: Response<any, Record<string, any>, number>) {
    try {
      const a = await this.customerRepo.findOne("customer", id);
      res.send(a);
    } catch (err) {
      res.send(err);
    }
  }

  async delete(id: number, res: Response<any, Record<string, any>, number>) {
    try {
      const a = await this.customerRepo.delete("customer", id);
      res.send(a);
    } catch (err) {
      res.send(err);
    }
  }
}
