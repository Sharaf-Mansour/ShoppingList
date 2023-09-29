import { Database } from "bun:sqlite";
const db = new Database("static/MainDB.db");

export const load = async () => {
    const query = db.query(`SELECT * from ListTable`);
    const result = query.all();
    return { message: result }
}

export const actions = {
    create: async ({ cookies, request }) => {
        const {title,price,note} = Object.fromEntries(await request.formData());
        const query = db.prepare('INSERT INTO ListTable (Title, Price, Note) VALUES ($title, $price, $note)');
        query.run(title, price, note);
    }
}