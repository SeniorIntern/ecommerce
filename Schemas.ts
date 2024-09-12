import { z } from 'zod';

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

export { UserRegistrationFormSchema };
