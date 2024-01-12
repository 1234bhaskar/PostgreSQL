import { Client } from 'pg';
//import 'dotenv/config';
import { config } from 'dotenv';

//config();

export async function getClient() {
    const client = new Client(process.env.POSTGRESS_URL);
    await client.connect();
    return client;
}