-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
