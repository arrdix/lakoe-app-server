/*
  Warnings:

  - Made the column `description` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "isActive" SET DEFAULT true;

-- AlterTable
ALTER TABLE "VariantOptionValues" ALTER COLUMN "isActive" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Variants" ALTER COLUMN "isActive" SET DEFAULT true;
