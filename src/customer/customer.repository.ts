import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { DBC } from "../../db";

export class CustomerRepository extends DBC {}
