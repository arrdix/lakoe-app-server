/*
  Warnings:

  - A unique constraint covering the columns `[variantId]` on the table `VariantOptions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VariantOptions_variantId_key" ON "VariantOptions"("variantId");
