/*
  Warnings:

  - You are about to drop the column `roleId` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_roleId_fkey";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "roleId",
ADD COLUMN     "role" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_role_fkey" FOREIGN KEY ("role") REFERENCES "Roles"("name") ON DELETE SET NULL ON UPDATE CASCADE;
