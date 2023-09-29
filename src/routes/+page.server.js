import { Database } from "bun:sqlite";
const db = new Database("static/MainDB.db");

export const load = async () => {
    const query = db.query(`SELECT * from ListTable`);
    const result = query.all();
    return { message: result }
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const price = data.get('price');
        const note = data.get('note');
        const query = db.prepare('INSERT INTO ListTable (Title, Price, Note) VALUES ($title, $price, $note)');
        query.run(title, price, note);
    }
}