import { Product } from '@prisma/client';

export type SampleProduct = Omit<Product, 'id'>