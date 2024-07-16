/*
  Warnings:

  - You are about to drop the column `productId` on the `Categories` table. All the data in the column will be lost.
  - Added the required column `categoriesId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_productId_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "categoriesId" INTEGER NOT NULL,
ADD COLUMN     "categoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
