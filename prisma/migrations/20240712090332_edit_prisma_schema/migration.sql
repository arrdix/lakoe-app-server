/*
  Warnings:

  - You are about to drop the `VariantOptionGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VariantOptionToGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_VariantOptionGroupToVariantOptions` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[variantOptionValuesId]` on the table `VariantOptions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "VariantOptionGroup" DROP CONSTRAINT "VariantOptionGroup_variantOptionValuesId_fkey";

-- DropForeignKey
ALTER TABLE "VariantOptionToGroup" DROP CONSTRAINT "VariantOptionToGroup_variantGroupId_fkey";

-- DropForeignKey
ALTER TABLE "VariantOptionToGroup" DROP CONSTRAINT "VariantOptionToGroup_variantOptionId_fkey";

-- DropForeignKey
ALTER TABLE "_VariantOptionGroupToVariantOptions" DROP CONSTRAINT "_VariantOptionGroupToVariantOptions_A_fkey";

-- DropForeignKey
ALTER TABLE "_VariantOptionGroupToVariantOptions" DROP CONSTRAINT "_VariantOptionGroupToVariantOptions_B_fkey";

-- AlterTable
ALTER TABLE "VariantOptions" ADD COLUMN     "variantOptionValuesId" INTEGER;

-- DropTable
DROP TABLE "VariantOptionGroup";

-- DropTable
DROP TABLE "VariantOptionToGroup";

-- DropTable
DROP TABLE "_VariantOptionGroupToVariantOptions";

-- CreateIndex
CREATE UNIQUE INDEX "VariantOptions_variantOptionValuesId_key" ON "VariantOptions"("variantOptionValuesId");

-- AddForeignKey
ALTER TABLE "VariantOptions" ADD CONSTRAINT "VariantOptions_variantOptionValuesId_fkey" FOREIGN KEY ("variantOptionValuesId") REFERENCES "VariantOptionValues"("id") ON DELETE SET NULL ON UPDATE CASCADE;
