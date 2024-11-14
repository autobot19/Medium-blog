import z from "zod"

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(5),
    name: z.string().optional()
})

//type interfrence in zod
export type signupInput = z.infer<typeof signupInput>




export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(5),
})

//type interfrence in zod
export type signinInput = z.infer<typeof signinInput>

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})

export type createBlogInput = z.infer<typeof createBlogInput>

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type updateBlogInput = z.infer<typeof updateBlogInput>