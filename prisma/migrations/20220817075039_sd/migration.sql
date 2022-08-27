/*
  Warnings:

  - Added the required column `mail_sent` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "full_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "torque" INTEGER NOT NULL,
    "one_time_password" INTEGER NOT NULL,
    "mail_sent" DATETIME NOT NULL
);
INSERT INTO "new_User" ("active", "createdAt", "email", "full_name", "id", "one_time_password", "password", "phone_number", "torque") SELECT "active", "createdAt", "email", "full_name", "id", "one_time_password", "password", "phone_number", "torque" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
