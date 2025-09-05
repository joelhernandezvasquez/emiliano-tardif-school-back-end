/*
  Warnings:

  - The values [RENACER_MUJERES,RENACER_HOMBRE,RENACER_PAREJAS] on the enum `CourseLevel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CourseLevel_new" AS ENUM ('NIVEL_1_JESUS_ESTA_VIVO', 'NIVEL_2_JESUS_NOS_CAPACITA', 'NIVEL_3_JESUS_NOS_ENVIA', 'RENACER');
ALTER TABLE "Courses" ALTER COLUMN "level" TYPE "CourseLevel_new" USING ("level"::text::"CourseLevel_new");
ALTER TYPE "CourseLevel" RENAME TO "CourseLevel_old";
ALTER TYPE "CourseLevel_new" RENAME TO "CourseLevel";
DROP TYPE "CourseLevel_old";
COMMIT;
