/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `Variants` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Variants_productId_key" ON "Variants"("productId");
