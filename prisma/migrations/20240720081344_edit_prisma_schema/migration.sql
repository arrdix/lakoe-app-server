/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `Couriers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[couriersId]` on the table `Invoices` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Couriers" DROP CONSTRAINT "Couriers_invoiceId_fkey";

-- DropIndex
DROP INDEX "Couriers_invoiceId_key";

-- AlterTable
ALTER TABLE "Couriers" DROP COLUMN "invoiceId";

-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "couriersId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_couriersId_key" ON "Invoices"("couriersId");

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_couriersId_fkey" FOREIGN KEY ("couriersId") REFERENCES "Couriers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
