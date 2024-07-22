/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Stores` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "waybill" TEXT;

-- AlterTable
ALTER TABLE "Stores" ADD COLUMN     "userId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Stores_userId_key" ON "Stores"("userId");

-- AddForeignKey
ALTER TABLE "Stores" ADD CONSTRAINT "Stores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
