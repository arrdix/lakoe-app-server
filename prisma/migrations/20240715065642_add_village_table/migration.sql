/*
  Warnings:

  - Added the required column `receiverVillage` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "receiverVillage" TEXT NOT NULL;
