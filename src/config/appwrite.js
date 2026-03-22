import { Client, Databases, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Substitua pela URL do seu servidor se não for o Cloud
    .setProject('69bf792d03c39e61eacf');

export const databases = new Databases(client);
export const account = new Account(client);
export default client;
