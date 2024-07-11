/*
  Warnings:

  - A unique constraint covering the columns `[invoiceId]` on the table `ConfirmationPayment` will be added. If there are existing duplicate values, this will fail.
  - Made the column `invoiceId` on table `ConfirmationPayment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ConfirmationPayment" DROP CONSTRAINT "ConfirmationPayment_invoiceId_fkey";

-- AlterTable
ALTER TABLE "ConfirmationPayment" ALTER COLUMN "invoiceId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "phone" SET DATA TYPE BIGINT;

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmationPayment_invoiceId_key" ON "ConfirmationPayment"("invoiceId");

-- AddForeignKey
ALTER TABLE "ConfirmationPayment" ADD CONSTRAINT "ConfirmationPayment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
