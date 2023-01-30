-- CreateTable
CREATE TABLE "clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_product" INTEGER NOT NULL,
    "id_client" INTEGER NOT NULL,
    CONSTRAINT "orders_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orders_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
