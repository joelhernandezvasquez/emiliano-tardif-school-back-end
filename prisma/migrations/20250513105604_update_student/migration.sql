/*
  Warnings:

  - You are about to drop the column `asuntos_médicos` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `dirección` on the `Students` table. All the data in the column will be lost.
  - Added the required column `asuntos_medicos` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Students" DROP COLUMN "asuntos_médicos",
DROP COLUMN "dirección",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "asuntos_medicos" TEXT NOT NULL,
ADD COLUMN     "direccion" TEXT,
ALTER COLUMN "parroquia" DROP NOT NULL;
