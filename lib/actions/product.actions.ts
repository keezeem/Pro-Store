import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { Product } from "@/types/index"; // Ensure the correct path for Product type


export async function getLatestProducts(): Promise<Product[]> {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },

  });

  return convertToPlainObject(data) as unknown as Product[]; // Explicitly cast to Product[]
}

// get product b it's slug
// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}

// Get latest products

// export async function getLatestProducts() {
//   const data = await prisma.product.findMany({
//     take: LATEST_PRODUCTS_LIMIT,
//     orderBy: { createdAt: 'desc' },
//   });
//   return convertToPlainObject(data);
// }

