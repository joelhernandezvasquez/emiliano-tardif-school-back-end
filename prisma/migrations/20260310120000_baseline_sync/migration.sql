-- Baseline migration: records changes that were already applied to this
-- database (via a prior manual `db push` or similar) but were never captured
-- as a migration file. Resolved as already-applied on existing environments;
-- runs for real only when this migration history is used against a fresh
-- database.

-- CreateEnum
CREATE TYPE "EnrollStatus" AS ENUM ('registered', 'enrolled', 'noShow', 'cancelled', 'completed');

-- AlterTable
ALTER TABLE "Enrollments" DROP COLUMN "attendance",
DROP COLUMN "notes",
ADD COLUMN     "status" "EnrollStatus" NOT NULL DEFAULT 'registered';

-- DropEnum
DROP TYPE "Attendance";

-- CreateTable
CREATE TABLE "StudentCourse" (
    "student_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "StudentCourse_pkey" PRIMARY KEY ("student_id","course_id")
);

-- AddForeignKey
ALTER TABLE "StudentCourse" ADD CONSTRAINT "StudentCourse_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentCourse" ADD CONSTRAINT "StudentCourse_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
