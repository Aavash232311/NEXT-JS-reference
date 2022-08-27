-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "restaurant_name" TEXT NOT NULL,
    "restaurant_number" INTEGER NOT NULL,
    "restaurant_slogan" TEXT NOT NULL,
    "restaurant_address" TEXT NOT NULL,
    "restaurant_type" TEXT NOT NULL,
    "profile_url" TEXT NOT NULL,
    "cover_url" TEXT NOT NULL,
    "date_array" TEXT NOT NULL
);
