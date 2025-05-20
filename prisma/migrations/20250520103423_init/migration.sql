/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Courses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Courses_name_key" ON "Courses"("name");
