import knex from "knex";

export abstract class BaseDB {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: "ec2-34-228-216-172.compute-1.amazonaws.com",
            user: "bruno",
            password: process.env.SENHA_TCC,
            database: "qualEpisodioAssistir",
            ssl: true
        }
    })
}