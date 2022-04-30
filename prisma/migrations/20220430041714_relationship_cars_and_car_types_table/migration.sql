/*
  Warnings:

  - Added the required column `car_type_id` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cars` ADD COLUMN `car_type_id` INTEGER UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `cars` ADD CONSTRAINT `cars_car_type_id_fkey` FOREIGN KEY (`car_type_id`) REFERENCES `car_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
