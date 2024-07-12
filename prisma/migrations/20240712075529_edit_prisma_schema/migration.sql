/*
  Warnings:

  - You are about to drop the column `variantOptionId` on the `VariantOptionValues` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "VariantOptionValues" DROP CONSTRAINT "VariantOptionValues_variantOptionId_fkey";

-- DropForeignKey
ALTER TABLE "VariantOptions" DROP CONSTRAINT "VariantOptions_variantId_fkey";

-- DropIndex
DROP INDEX "VariantOptionValues_variantOptionId_key";

-- AlterTable
ALTER TABLE "VariantOptionValues" DROP COLUMN "variantOptionId";

-- AlterTable
ALTER TABLE "VariantOptions" ADD COLUMN     "variantOptionGroupId" INTEGER,
ALTER COLUMN "variantId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "VariantOptionGroup" (
    "id" SERIAL NOT NULL,
    "variantOptionValuesId" INTEGER,

    CONSTRAINT "VariantOptionGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VariantOptionGroup_variantOptionValuesId_key" ON "VariantOptionGroup"("variantOptionValuesId");

-- AddForeignKey
ALTER TABLE "VariantOptions" ADD CONSTRAINT "VariantOptions_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOptions" ADD CONSTRAINT "VariantOptions_variantOptionGroupId_fkey" FOREIGN KEY ("variantOptionGroupId") REFERENCES "VariantOptionGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOptionGroup" ADD CONSTRAINT "VariantOptionGroup_variantOptionValuesId_fkey" FOREIGN KEY ("variantOptionValuesId") REFERENCES "VariantOptionValues"("id") ON DELETE SET NULL ON UPDATE CASCADE;
