/*
  Warnings:

  - You are about to drop the column `book_title` on the `reviews` table. All the data in the column will be lost.
  - Added the required column `author` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverImage` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `synopsis` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_reviews" ("createdAt", "id", "score", "updatedAt", "user_id") SELECT "createdAt", "id", "score", "updatedAt", "user_id" FROM "reviews";
DROP TABLE "reviews";
ALTER TABLE "new_reviews" RENAME TO "reviews";
CREATE INDEX "reviews_user_id_title_idx" ON "reviews"("user_id", "title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
