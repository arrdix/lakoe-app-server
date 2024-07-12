-- AlterTable
ALTER TABLE "Invoices" ALTER COLUMN "receiverPhone" DROP NOT NULL,
ALTER COLUMN "receiverPhone" SET DATA TYPE BIGINT;
