import { sql } from "@vercel/postgres";

export async function load() {
    return {
        cart: await sql`SELECT * from ShoppingList.CART `
    }
}

export const actions = {
    create: async ({ cookies, request }) => {
        const { title, price, note } = Object.fromEntries(await request.formData());
        await sql`INSERT INTO ShoppingList.CART (Title, Price, Note, Status, Date) VALUES (${title}, ${price}, ${note}, 0, to_char(now(), 'YYYY-MM-DD'))`;
        return {
            cart: await sql`SELECT * from ShoppingList.CART `
        }
    },
    update: async ({ params, request }) => {
        const { title, price, note } = Object.fromEntries(await request.formData());
        await sql`UPDATE ShoppingList.CART SET Title = ${title}, Price = ${price}, Note = ${note} WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from ShoppingList.CART `
        }
    },
    delete: async ({ params }) => {
        await sql`DELETE FROM ShoppingList.CART WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from ShoppingList.CART `
        }
    },
    reset: async ({ params }) => {
        await sql`UPDATE ShoppingList.CART SET Status = 0 WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from ShoppingList.CART `
        }
    },
    complete: async ({ params }) => {
        await sql`UPDATE ShoppingList.CART SET Status = 1 WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from ShoppingList.CART `
        }
    },
    pin: async ({ params }) => {
        await sql`UPDATE ShoppingList.CART SET Status = 2 WHERE ID = ${params.id}`;
        return {
            cart: await sql`SELECT * from ShoppingList.CART `
        }
    }
}