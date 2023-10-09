import { sql } from "@vercel/postgres";

export async function load() {
    return {
        cart: await sql`SELECT * from CART `
    }
}

export const actions = {
    create: async ({ cookies, request }) => {
        const { title, price, note } = Object.fromEntries(await request.formData());
        await sql`INSERT INTO CART (Title, Price, Note, Status, Date) VALUES (${title}, ${price}, ${note}, 0, to_char(now(), 'YYYY-MM-DD'))`;
        return {
            cart: await sql`SELECT * from CART `
        }
    },
    update: async ({ params, request }) => {
        const { title, price, note } = Object.fromEntries(await request.formData());
        await sql`UPDATE CART SET Title = ${title}, Price = ${price}, Note = ${note} WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from CART `
        }
    },
    delete: async ({ params }) => {
        await sql`DELETE FROM CART WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from CART `
        }
    },
    reset: async ({ params }) => {
        await sql`UPDATE CART SET Status = 0 WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from CART `
        }
    },
    complete: async ({ params }) => {
        await sql`UPDATE CART SET Status = 1 WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from CART `
        }
    },
    pin: async ({ params }) => {
        await sql`UPDATE CART SET Status = 2 WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from CART `
        }
    }
}