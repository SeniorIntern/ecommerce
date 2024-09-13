import { z } from 'zod';

const ProductSchema = z.object({
  productName: z
    .string()
    .min(2, {
      message: 'Product name must be at least 2 characters.'
    })
    .max(240, {
      message: 'Product name must be less than 240 characters.'
    }),
  price: z
    .union([
      z.coerce
        .number({
          message: 'Price must be a number'
        })
        .min(1)
        .max(240)
        .int({
          message: 'Price must be a whole number'
        })
        .positive({
          message: 'Price must be positive'
        }),
      z.literal('')
    ]),
  category: z
    .string()
    .min(2, {
      message: 'Category must be at least 2 characters.'
    })
    .max(240, {
      message: 'Category must be less than 240 characters.'
    }),
  description: z
    .string()
    .min(2, {
      message: 'Product description must be at least 10 characters long'
    })
    .max(800, {
      message: 'Product description must not be more than 800 characters long'
    }),
  stock: z
    .union([
      z.coerce
        .number({
          message: 'Stock must be a number'
        })
        .min(1)
        .max(240)
        .int({
          message: 'Stock must be a whole number'
        })
        .positive({
          message: 'Stock must be positive'
        }),
      z.literal('')
    ])
});

const UserRegistrationFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'Full name cannot be less than 3 characters.' })
    .max(50, {
      message: 'Full name cannot be more than 120 characters long.'
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(7, { message: 'Password must be atleast 7 characters long.' })
    .max(32, { message: 'Password must not be more than 32 characters long.' }),
  username: z
    .string()
    .min(3, { message: 'Username must be atleast 3 characters long.' })
    .max(50, {
      message: 'Username cannot be more than 120 characters long.'
    })
});

export { ProductSchema, UserRegistrationFormSchema };
