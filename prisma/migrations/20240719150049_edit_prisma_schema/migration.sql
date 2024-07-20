-- DropForeignKey
ALTER TABLE "Couriers" DROP CONSTRAINT "Couriers_invoiceId_fkey";

-- AlterTable
ALTER TABLE "Couriers" ALTER COLUMN "invoiceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Couriers" ADD CONSTRAINT "Couriers_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
