/*
  Warnings:

  - A unique constraint covering the columns `[variantOptionId]` on the table `VariantOptionValues` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VariantOptionValues_variantOptionId_key" ON "VariantOptionValues"("variantOptionId");
