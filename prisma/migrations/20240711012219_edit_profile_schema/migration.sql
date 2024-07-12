/*
  Warnings:

  - You are about to drop the column `profileId` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_profileId_fkey";

-- DropIndex
DROP INDEX "Users_profileId_key";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "profileId";

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
