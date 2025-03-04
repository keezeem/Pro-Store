import { z } from 'zod';

export const insertProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  images: z.array(z.string()),
  brand: z.string(),
  description: z.string(),
  stock: z.number(),
  price: z.number().or(z.string()), // To handle potential string inputs from forms
  rating: z.number().default(0),
  numReviews: z.number().default(0),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  createdAt: Date;
};
