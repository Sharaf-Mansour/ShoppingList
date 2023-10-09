import { sql } from "@vercel/postgres";

const GetCart = async () => {
    const { rows } = await sql`SELECT * from CART`;
    return rows;

}

export const load = async () => {
    return {
        cart: GetCart()
    }
}

export const actions = {
    create: async ({ cookies, request }) => {
        const { title, price, note } = Object.fromEntries(await request.formData());
        await sql`INSERT INTO CART (Title, Price, Note, Status, add_date) VALUES (${title}, ${price}, ${note}, 0, now())`;
        return {
            cart: GetCart()
        }
    },
    update: async ({ params, request }) => {
        const { title, price, note } = Object.fromEntries(await request.formData());
        await sql`UPDATE CART SET Title = ${title}, Price = ${price}, Note = ${note} WHERE ID = ${params.id}`;
        return {
            cart: GetCart()
        }
    },
    delete: async ({ params }) => {
        await sql`DELETE FROM CART WHERE ID = ${params.id}`;
        return {
            cart: GetCart()
        }
    },
    reset: async ({ params }) => {
        await sql`UPDATE CART SET Status = 0 WHERE ID = ${params.id}`;
        return {
            cart: GetCart()
        }
    },
    complete: async ({ params }) => {
        await sql`UPDATE CART SET Status = 1 WHERE ID = ${params.id}`;
        return {
            cart: GetCart()
        }
    },
    pin: async ({ params }) => {
        await sql`UPDATE CART SET Status = 2 WHERE ID = ${params.id}`;
        return {
            cart: GetCart()
        }
    }
}