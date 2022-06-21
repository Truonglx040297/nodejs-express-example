import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

export class DBC {
  async createConnection() {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
    });
    return connection;
  }

  async create<T>(table: string, data: T) {
    try {
      const connection = await this.createConnection();
      const listColumn = Object.keys(data).toString();
      const listValue = Object.values(data)
        .map((e) => `'${e}'`)
        .toString();

      const query = `INSERT INTO ${table} (${listColumn})
    VALUES (${listValue});`;
      await connection.execute(query);
      return { success: true };
    } catch (err) {
      throw err;
    }
  }
}
