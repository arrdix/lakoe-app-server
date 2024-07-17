/*
  Warnings:

  - A unique constraint covering the columns `[sku]` on the table `VariantOptionValues` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VariantOptionValues_sku_key" ON "VariantOptionValues"("sku");
