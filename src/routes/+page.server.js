import { sql } from "@vercel/postgres";
const parseFloatOrZero = (value) => {
    const result = parseFloat(value);
    return isNaN(result) ? 0 : result;
}
export const load = async () => {
    const { rows } = await sql`SELECT * from CART`;

    return {
        cart: rows
    }
}

export const actions = {
    create: async ({ cookies, request }) => {
        const { title, price, note } = Object.fromEntries(await request.formData());
        await sql`INSERT INTO CART (Title, Price, Note, Status, add_date) 
        VALUES ('${title}', ${parseFloatOrZero(price)}, '${note}', 1, now())`;

    },
    undo: async ({ cookies, request }) => {
        const { id } = Object.fromEntries(await request.formData());

        await sql`UPDATE CART SET Status = 1 WHERE ID = ${parseInt(id)}`;

    },
    complete: async ({ cookies, request }) => {
        const { id } = Object.fromEntries(await request.formData());

        await sql`UPDATE CART SET Status = 0 WHERE ID = ${parseInt(id)}`;

    },
    pin: async ({ cookies, request }) => {
        const { id } = Object.fromEntries(await request.formData());

        await sql`UPDATE CART SET Status = 2 WHERE ID = ${parseInt(id)}`;
    },
    update: async ({ cookies, request }) => {
        const { id, title, price, note } = Object.fromEntries(await request.formData());
        await sql`UPDATE CART SET Title = '${title}', Price = ${parseFloatOrZero(price)}, Note = '${note}' WHERE ID = ${id}`;

    },
    delete: async ({ cookies, request }) => {
        const { id } = Object.fromEntries(await request.formData());

        await sql`DELETE FROM CART WHERE ID = ${id}`;

    }
}