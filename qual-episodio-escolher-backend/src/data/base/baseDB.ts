import knex from "knex";

export abstract class BaseDB {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: "ec2-34-228-216-172.compute-1.amazonaws.com",
            user: "root",
            password: process.env.SENHA_TCC,
            database: "qualEpisodioAssistir",
            ssl: true
        }
    })
}