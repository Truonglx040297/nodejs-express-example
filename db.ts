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

  async update<T>(table: string, data: T, id: number) {
    try {
      const connection = await this.createConnection();
      let updateStatement = "";
      for (const [key, value] of Object.entries(data)) {
        updateStatement += `${key} = '${value}',`;
      }
      updateStatement = updateStatement.slice(0, -1);

      const query = `UPDATE ${table}
      SET ${updateStatement}
      WHERE id = ${id};`;

      await connection.execute(query);
      return { success: true };
    } catch (err) {
      throw err;
    }
  }

  async findOne<T>(table: string, id: number) {
    try {
      const connection = await this.createConnection();
      const query = `select * from ${table} where id = ${id}`;
      const [rows, fields] = await connection.execute(query);
      let tempResult: any = rows;
      return { data: tempResult[0] };
    } catch (err) {
      throw err;
    }
  }

  async findAll(table: string) {
    try {
      const connection = await this.createConnection();
      const query = `select * from ${table}`;
      const [rows, fields] = await connection.execute(query);
      return { data: rows };
    } catch (err) {
      throw err;
    }
  }

  async delete<T>(table: string, id: number) {
    try {
      const connection = await this.createConnection();
      const query = `delete from ${table} where id = ${id}`;
      await connection.execute(query);
      return { success: true };
    } catch (err) {
      throw err;
    }
  }
}
