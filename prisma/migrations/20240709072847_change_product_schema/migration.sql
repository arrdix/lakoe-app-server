-- DropForeignKey
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_productId_fkey";

-- DropForeignKey
ALTER TABLE "Variants" DROP CONSTRAINT "Variants_productId_fkey";

-- AlterTable
ALTER TABLE "Categories" ALTER COLUMN "productId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Variants" ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variants" ADD CONSTRAINT "Variants_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
