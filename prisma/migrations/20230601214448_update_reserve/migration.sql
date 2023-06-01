/*
  Warnings:

  - The primary key for the `Reserva` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_local` on the `Reserva` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_evento` on the `Reserva` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Reserva` DROP PRIMARY KEY,
    MODIFY `id_local` INTEGER NOT NULL,
    MODIFY `id_evento` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_evento`, `id_local`, `data_reserva`);

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_id_evento_fkey` FOREIGN KEY (`id_evento`) REFERENCES `Evento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_id_local_fkey` FOREIGN KEY (`id_local`) REFERENCES `Local`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
