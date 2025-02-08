import { Product } from '@prisma/client';

export interface SampleProduct extends Omit<Product, 'id'> {}