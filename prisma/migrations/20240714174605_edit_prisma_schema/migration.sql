-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "subcategoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
