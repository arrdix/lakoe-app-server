/*
  Warnings:

  - A unique constraint covering the columns `[receiverEmail]` on the table `Invoices` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `receiverEmail` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "receiverEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_receiverEmail_key" ON "Invoices"("receiverEmail");
