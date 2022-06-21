import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import { CustomerController } from "./src/customer/customer.controller";
import { CustomerService } from "./src/customer/customer.service";
import { CustomerRepository } from "./src/customer/customer.repository";

const app = express();
dotenv.config();

app.use(bodyParser.json());

const customerRepo = new CustomerRepository();
const customerService = new CustomerService(customerRepo);
app.use("/api", new CustomerController(customerService).createRouter());

app.listen(process.env.PORT, () => {
  console.log("Node server started running on", process.env.PORT);
});
