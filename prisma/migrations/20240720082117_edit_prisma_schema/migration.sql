/*
  Warnings:

  - You are about to drop the column `couriersId` on the `Invoices` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[courierId]` on the table `Invoices` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_couriersId_fkey";

-- DropIndex
DROP INDEX "Invoices_couriersId_key";

-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "couriersId",
ADD COLUMN     "courierId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_courierId_key" ON "Invoices"("courierId");

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Couriers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
