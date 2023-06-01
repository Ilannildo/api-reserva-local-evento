-- CreateTable
CREATE TABLE `Local` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `capacidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserva` (
    `id_local` VARCHAR(191) NOT NULL,
    `id_evento` VARCHAR(191) NOT NULL,
    `data_reserva` DATETIME(3) NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`id_evento`, `id_local`, `data_reserva`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
