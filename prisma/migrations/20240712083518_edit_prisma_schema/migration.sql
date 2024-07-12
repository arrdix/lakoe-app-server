/*
  Warnings:

  - The primary key for the `VariantOptionToGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `variantOptionGroupId` on the `VariantOptionToGroup` table. All the data in the column will be lost.
  - Added the required column `name` to the `VariantOptionGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variantGroupId` to the `VariantOptionToGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "VariantOptionToGroup" DROP CONSTRAINT "VariantOptionToGroup_variantOptionGroupId_fkey";

-- AlterTable
ALTER TABLE "VariantOptionGroup" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VariantOptionToGroup" DROP CONSTRAINT "VariantOptionToGroup_pkey",
DROP COLUMN "variantOptionGroupId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "variantGroupId" INTEGER NOT NULL,
ADD CONSTRAINT "VariantOptionToGroup_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "_VariantOptionGroupToVariantOptions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VariantOptionGroupToVariantOptions_AB_unique" ON "_VariantOptionGroupToVariantOptions"("A", "B");

-- CreateIndex
CREATE INDEX "_VariantOptionGroupToVariantOptions_B_index" ON "_VariantOptionGroupToVariantOptions"("B");

-- AddForeignKey
ALTER TABLE "VariantOptionToGroup" ADD CONSTRAINT "VariantOptionToGroup_variantGroupId_fkey" FOREIGN KEY ("variantGroupId") REFERENCES "VariantOptionGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VariantOptionGroupToVariantOptions" ADD CONSTRAINT "_VariantOptionGroupToVariantOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "VariantOptionGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VariantOptionGroupToVariantOptions" ADD CONSTRAINT "_VariantOptionGroupToVariantOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "VariantOptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
