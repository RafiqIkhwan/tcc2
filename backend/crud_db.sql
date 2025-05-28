-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2025 at 04:46 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `text` longtext DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `text`, `gender`, `createdAt`, `updatedAt`) VALUES
(12, 'RAFIQ IKHWAN NUGRAHA', 'Tipe data CHAR dan VARCHAR adalah tipe data karakter (string) yang akan sering kita gunakan. Format query tipe data CHAR dan VARCHAR: Dimana M adalah jumlah karakter yang akan dialokasikan oleh MySQL. Misalkan nilai M=5, maka MySQL menyediakan 5 karakter ', 'Male', '2025-03-03 14:19:05', '2025-03-04 15:14:03'),
(13, 'crud_db', 'Skibidi Toilet adalah seri web machinima dari serangkai seri video YouTube dan YouTube Shorts viral yang diunggah di kanal DaFuq!?Boom!. Serial ini menggambarkan perang antara Skibidi Toilet — kepala tanpa tubuh di dalam toilet bergerak yang dapat dibunuh', 'Male', '2025-03-03 14:19:48', '2025-03-03 14:32:32'),
(14, 'rafiq ', 'Korupsi Pertamina terbaru melibatkan tujuh tersangka yang ditahan oleh Kejaksaan Agung terkait dugaan korupsi tata kelola minyak mentah dan produk kilang pada PT Pertamina (Persero) dari tahun 2018 hingga 2023. Kasus ini diperkirakan merugikan negara hing', 'Male', '2025-03-04 14:25:09', '2025-03-04 14:25:09'),
(19, 'nurul', '\"Sayang, setiap kali aku melihatmu, aku merasa beruntung bisa memanggilmu milikku. Kecantikanmu bukan hanya dari wajahmu, tetapi juga dari hatimu yang penuh kasih. Terima kasih telah menjadi cahaya dalam hidupku.\"\n\n\"Di setiap senyummu, aku menemukan kebahagiaan yang tak ternilai. Kamu adalah bintang yang menerangi hariku, dan aku berjanji akan selalu menjagamu dengan sepenuh hati.\"', 'Female', '2025-03-04 15:11:44', '2025-03-04 15:11:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
