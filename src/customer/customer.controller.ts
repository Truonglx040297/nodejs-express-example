import express from "express";
import { CustomerService } from "./customer.service";

export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  createRouter() {
    const router = express.Router();
    router.post("/customer", (req, res) => {
      this.customerService.createCustomer(req.body, res);
    });
    return router;
  }
}
