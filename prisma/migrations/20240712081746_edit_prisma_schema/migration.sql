/*
  Warnings:

  - You are about to drop the column `variantOptionGroupId` on the `VariantOptions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "VariantOptions" DROP CONSTRAINT "VariantOptions_variantOptionGroupId_fkey";

-- AlterTable
ALTER TABLE "VariantOptions" DROP COLUMN "variantOptionGroupId";

-- CreateTable
CREATE TABLE "VariantOptionToGroup" (
    "variantOptionId" INTEGER NOT NULL,
    "variantOptionGroupId" INTEGER NOT NULL,

    CONSTRAINT "VariantOptionToGroup_pkey" PRIMARY KEY ("variantOptionId","variantOptionGroupId")
);

-- AddForeignKey
ALTER TABLE "VariantOptionToGroup" ADD CONSTRAINT "VariantOptionToGroup_variantOptionId_fkey" FOREIGN KEY ("variantOptionId") REFERENCES "VariantOptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOptionToGroup" ADD CONSTRAINT "VariantOptionToGroup_variantOptionGroupId_fkey" FOREIGN KEY ("variantOptionGroupId") REFERENCES "VariantOptionGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
