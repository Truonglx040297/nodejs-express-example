import express from "express";
import { CustomerService } from "./customer.service";

export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  createRouter() {
    const router = express.Router();

    router.post("/customer", (req, res) => {
      this.customerService.createCustomer(req.body, res);
    });

    router.put("/customer/:id", (req, res) => {
      this.customerService.updateCustomer(req.body, +req.params.id, res);
    });

    router.get("/customer", (req, res) => {
      this.customerService.getAll(res);
    });

    router.get("/customer/:id", (req, res) => {
      this.customerService.getOne(+req.params.id, res);
    });

    router.delete("/customer/:id", (req, res) => {
      this.customerService.delete(+req.params.id, res);
    });

    return router;
  }
}
