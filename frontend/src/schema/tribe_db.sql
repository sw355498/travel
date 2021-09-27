-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2021 at 11:01 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clone_db`
--
CREATE DATABASE IF NOT EXISTS `clone_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `clone_db`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'men'),
(2, 'women');

-- --------------------------------------------------------

--
-- Table structure for table `fruit`
--

CREATE TABLE `fruit` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fruit`
--

INSERT INTO `fruit` (`id`, `name`, `intro`) VALUES
(0, '香蕉', ''),
(4, '蘋果', '一種水果\r\n\r\n                '),
(5, '蘋果', '大蘋果\r\n                '),
(6, '蘋果', '大蘋果\r\n                '),
(7, '蘋果', '大蘋果\r\n                ');

-- --------------------------------------------------------

--
-- Table structure for table `phone`
--

CREATE TABLE `phone` (
  `id` int(5) UNSIGNED NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(6) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`id`, `phone`, `user_id`) VALUES
(6, ' 02203202', 3),
(7, ' 052203230', 3),
(8, ' 09123445666', 6),
(9, ' 09123445666', 7),
(10, ' 09123445666', 11);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `account`, `create_time`, `password`, `valid`) VALUES
(1, 'peter', '02203202,052203223', 'peter@tset.com', 'Peter', '2021-06-25 11:53:29', '', 1),
(2, 'peter', '02203202,052203230', 'peter@gmail.com', 'Peter', '2021-06-25 11:55:20', '', 1),
(3, 'peter', '02203202,052203230', 'peter@gmail.com', 'Peter', '2021-06-25 11:56:13', '', 1),
(4, 'peter', '02203202,052203230', 'peter@gmail.com', 'Peter', '2021-06-25 11:57:38', '', 1),
(5, 'Ann', '09123445666', 'ann@test.com', 'Ann', '2021-06-26 09:41:54', '', 1),
(6, 'Ann', '09123445666', 'ann@test.com', 'Ann', '2021-06-26 09:42:17', '1234', 1),
(7, 'adam', NULL, NULL, 'adam', '2021-06-26 13:49:14', '827ccb0eea8a706c4c34a16891f84e7b', 1),
(8, NULL, NULL, NULL, 'kk', '2021-06-26 13:51:29', '81dc9bdb52d04dc20036dbd8313ed055', 1),
(9, 'Jason', '09123445666', 'jason@test.com', 'jason', '2021-06-27 00:09:11', '', 1),
(101, 'Tony', '0912222222', 'tony@test.ocm', 'tony', '2021-06-27 23:25:04', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_like`
--

CREATE TABLE `user_like` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(5) UNSIGNED NOT NULL,
  `user_id` int(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_like`
--

INSERT INTO `user_like` (`id`, `product_id`, `user_id`) VALUES
(1, 2, 2),
(2, 1, 1),
(3, 1, 1),
(4, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_order`
--

CREATE TABLE `user_order` (
  `id` int(6) UNSIGNED NOT NULL,
  `product_id` int(5) UNSIGNED NOT NULL,
  `user_id` int(6) UNSIGNED NOT NULL,
  `amount` int(4) UNSIGNED NOT NULL,
  `order_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_order`
--

INSERT INTO `user_order` (`id`, `product_id`, `user_id`, `amount`, `order_date`) VALUES
(1, 2, 3, 7, '2021-06-20'),
(2, 1, 2, 3, '2021-06-20'),
(3, 1, 2, 3, '2021-06-21'),
(4, 2, 3, 4, '2021-06-21'),
(5, 3, 4, 5, '2021-06-22'),
(6, 5, 2, 2, '2021-06-22'),
(7, 2, 7, 5, '2021-06-23'),
(8, 6, 4, 7, '2021-06-23'),
(9, 5, 3, 4, '2021-06-24'),
(10, 5, 5, 5, '2021-06-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fruit`
--
ALTER TABLE `fruit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_like`
--
ALTER TABLE `user_like`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_order`
--
ALTER TABLE `user_order`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fruit`
--
ALTER TABLE `fruit`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `phone`
--
ALTER TABLE `phone`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `user_like`
--
ALTER TABLE `user_like`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_order`
--
ALTER TABLE `user_order`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Database: `my_test_db`
--
CREATE DATABASE IF NOT EXISTS `my_test_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `my_test_db`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'men'),
(2, 'women');

-- --------------------------------------------------------

--
-- Table structure for table `fruit`
--

CREATE TABLE `fruit` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fruit`
--

INSERT INTO `fruit` (`id`, `name`, `intro`) VALUES
(0, '香蕉', ''),
(4, '蘋果', '一種水果\r\n\r\n                '),
(5, '蘋果', '大蘋果\r\n                '),
(6, '蘋果', '大蘋果\r\n                '),
(7, '蘋果', '大蘋果\r\n                ');

-- --------------------------------------------------------

--
-- Table structure for table `phone`
--

CREATE TABLE `phone` (
  `id` int(5) UNSIGNED NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(6) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`id`, `phone`, `user_id`) VALUES
(6, ' 02203202', 3),
(7, ' 052203230', 3),
(8, ' 09123445666', 6),
(9, ' 09123445666', 7),
(10, ' 09123445666', 11);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(5) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` tinyint(3) NOT NULL,
  `price` int(6) UNSIGNED NOT NULL,
  `picture` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `category`, `price`, `picture`) VALUES
(1, 'ironman', 1, 2000, 'ironman.jfif'),
(2, 'spiderman', 1, 3000, 'spiderman.png'),
(3, 'blackwidow', 2, 3500, 'blackwidow.jpg'),
(4, 'Hulk', 1, 2500, 'Hulk.png'),
(5, 'Dr. strange', 1, 1000, 'Dr.strange.jpg'),
(6, 'wonder-woman', 2, 3000, 'wonder-woman.jpg'),
(7, 'Thor', 1, 2300, 'Thor.jpg'),
(8, 'Scarlet Witch', 2, 3000, 'Scarlet Witch.jpg'),
(9, 'Deadpool', 1, 2220, 'Deadpool.png'),
(10, 'Harley Quinn', 2, 3000, 'Harley Quinn.jfif');

-- --------------------------------------------------------

--
-- Table structure for table `product_photos`
--

CREATE TABLE `product_photos` (
  `id` int(3) UNSIGNED NOT NULL,
  `image_name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` int(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `account`, `create_time`, `password`, `valid`) VALUES
(1, 'peter', '02203202,052203223', 'peter@tset.com', 'Peter', '2021-06-25 11:53:29', '', 1),
(2, 'peter', '02203202,052203230', 'peter@gmail.com', 'Peter', '2021-06-25 11:55:20', '', 1),
(3, 'peter', '02203202,052203230', 'peter@gmail.com', 'Peter', '2021-06-25 11:56:13', '', 1),
(4, 'peter', '02203202,052203230', 'peter@gmail.com', 'Peter', '2021-06-25 11:57:38', '', 1),
(5, 'Ann', '09123445666', 'ann@test.com', 'Ann', '2021-06-26 09:41:54', '', 1),
(6, 'Ann', '09123445666', 'ann@test.com', 'Ann', '2021-06-26 09:42:17', '1234', 1),
(7, 'adam', NULL, NULL, 'adam', '2021-06-26 13:49:14', '827ccb0eea8a706c4c34a16891f84e7b', 1),
(8, NULL, NULL, NULL, 'kk', '2021-06-26 13:51:29', '81dc9bdb52d04dc20036dbd8313ed055', 1),
(9, 'Jason', '09123445666', 'jason@test.com', 'jason', '2021-06-27 00:09:11', '', 1),
(101, 'Tony', '0912222222', 'tony@test.ocm', 'tony', '2021-06-27 23:25:04', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_like`
--

CREATE TABLE `user_like` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(5) UNSIGNED NOT NULL,
  `user_id` int(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_like`
--

INSERT INTO `user_like` (`id`, `product_id`, `user_id`) VALUES
(1, 2, 2),
(2, 1, 1),
(3, 1, 1),
(4, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_order`
--

CREATE TABLE `user_order` (
  `id` int(6) UNSIGNED NOT NULL,
  `product_id` int(5) UNSIGNED NOT NULL,
  `user_id` int(6) UNSIGNED NOT NULL,
  `amount` int(4) UNSIGNED NOT NULL,
  `order_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_order`
--

INSERT INTO `user_order` (`id`, `product_id`, `user_id`, `amount`, `order_date`) VALUES
(1, 2, 3, 7, '2021-06-20'),
(2, 1, 2, 3, '2021-06-20'),
(3, 1, 2, 3, '2021-06-21'),
(4, 2, 3, 4, '2021-06-21'),
(5, 3, 4, 5, '2021-06-22'),
(6, 5, 2, 2, '2021-06-22'),
(7, 2, 7, 5, '2021-06-23'),
(8, 6, 4, 7, '2021-06-23'),
(9, 5, 3, 4, '2021-06-24'),
(10, 5, 5, 5, '2021-06-24');

-- --------------------------------------------------------

--
-- Table structure for table `user_order_product`
--

CREATE TABLE `user_order_product` (
  `id` int(5) UNSIGNED NOT NULL,
  `user_id` int(6) UNSIGNED NOT NULL,
  `order_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_order_product_detail`
--

CREATE TABLE `user_order_product_detail` (
  `id` int(5) UNSIGNED NOT NULL,
  `order_id` int(5) UNSIGNED NOT NULL,
  `product_id` int(5) UNSIGNED NOT NULL,
  `amount` int(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fruit`
--
ALTER TABLE `fruit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_photos`
--
ALTER TABLE `product_photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_like`
--
ALTER TABLE `user_like`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_order`
--
ALTER TABLE `user_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_order_product`
--
ALTER TABLE `user_order_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_order_product_detail`
--
ALTER TABLE `user_order_product_detail`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fruit`
--
ALTER TABLE `fruit`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `phone`
--
ALTER TABLE `phone`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `product_photos`
--
ALTER TABLE `product_photos`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `user_like`
--
ALTER TABLE `user_like`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_order`
--
ALTER TABLE `user_order`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_order_product`
--
ALTER TABLE `user_order_product`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_order_product_detail`
--
ALTER TABLE `user_order_product_detail`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `phpmember`
--
CREATE DATABASE IF NOT EXISTS `phpmember` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `phpmember`;

-- --------------------------------------------------------

--
-- Table structure for table `memberdata`
--

CREATE TABLE `memberdata` (
  `m_id` int(11) NOT NULL,
  `m_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `m_username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `m_passwd` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `m_sex` enum('男','女') COLLATE utf8_unicode_ci NOT NULL,
  `m_birthday` date DEFAULT NULL,
  `m_level` enum('admin','member') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'member',
  `m_email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_url` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_phone` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_address` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `m_login` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `m_logintime` datetime DEFAULT NULL,
  `m_jointime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `memberdata`
--

INSERT INTO `memberdata` (`m_id`, `m_name`, `m_username`, `m_passwd`, `m_sex`, `m_birthday`, `m_level`, `m_email`, `m_url`, `m_phone`, `m_address`, `m_login`, `m_logintime`, `m_jointime`) VALUES
(1, '系統管理員', 'admin', '1234', '男', NULL, 'admin', NULL, NULL, NULL, NULL, 22, '2016-09-10 11:36:30', '2008-10-20 16:36:15'),
(2, '張惠玲', 'elven', '$2y$10$YdUhOvUTvwK5oWp/i3LafOd2ImwsE/85YmmoY2konsxdmMSsvczFO', '女', '1987-04-05', 'member', 'elven@superstar.com', '', '0966765556', '台北市濟洲北路12號2樓', 12, '2016-08-29 11:44:33', '2008-10-21 12:03:12'),
(3, '彭建志', 'jinglun', '$2y$10$WqB2bnMSO/wgBiHSOBV2iuLbrUCsp8VmNJdK2AyIW6IANUL9jeFjC', '男', '1987-07-01', 'member', 'jinglun@superstar.com', '', '0918181111', '台北市敦化南路93號5樓', 0, NULL, '2008-10-21 12:06:08'),
(4, '謝耿鴻', 'sugie', '$2y$10$6uWtdYATI3b/wMRk.AaqIei852PLf.WjeKm8X.Asl0VTmpxCkqbW6', '男', '1987-08-11', 'member', 'edreamer@gmail.com', '', '0914530768', '台北市中央路201號7樓', 2, '2016-08-29 14:03:53', '2008-10-21 12:06:08'),
(5, '蔣志明', 'shane', '$2y$10$pWefN9xkeXOKCx59GF6ZJuSGNnIFBY4q/DCmCvAwOFtnoTCujb3Te', '男', '1984-06-20', 'member', 'shane@superstar.com', NULL, '0946820035', '台北市建國路177號6樓', 0, NULL, '2008-10-21 12:06:08'),
(6, '王佩珊', 'ivy', '$2y$10$RPrt3YfaSs0d82inYIK6he.JaPqOrisWMqASuxN5g62EyRio.lyEa', '女', '1988-02-15', 'member', 'ivy@superstar.com', NULL, '0920981230', '台北市忠孝東路520號6樓', 0, NULL, '2008-10-21 12:06:08'),
(7, '林志宇', 'zhong', '$2y$10$pee.jvO6f4sSKahlc4cLLO9RUMyx8aphyqkSUdwHTNSy4Ax7YPdpq', '男', '1987-05-05', 'member', 'zhong@superstar.com', NULL, '0951983366', '台北市三民路1巷10號', 0, NULL, '2008-10-21 12:06:08'),
(8, '李曉薇', 'lala', '$2y$10$oiC9CaGiOdWu.6w5b3.b/Ora6fSuh8Lrbj8Kg5BUPT15O3QptksQS', '女', '1985-08-30', 'member', 'lala@superstar.com', NULL, '0918123456', '台北市仁愛路100號', 0, NULL, '2008-10-21 12:06:08'),
(9, '賴秀英', 'crystal', '$2y$10$8Q0.JEGILRM91qAlMmWnB.wpcY.rJEbgNgV5ntIlqZmdGaHPwikji', '女', '1986-12-10', 'member', 'crystal@superstar.com', NULL, '0907408965', '台北市民族路204號', 0, NULL, '2008-10-21 12:06:08'),
(10, '張雅琪', 'peggy', '$2y$10$RNqnXDNHkcTI2Zh2bkTKnOesz0FLXhihhT8ZL8OHoMeYSq7jsILMi', '女', '1988-12-01', 'member', 'peggy@superstar.com', NULL, '0916456723', '台北市建國北路10號', 0, NULL, '2008-10-21 12:06:08'),
(11, '陳燕博', 'albert', '$2y$10$seMLwqcQRQiWa0jMBAcMMertjLbrPLRGNZoKc0NZ5FxTwWha7W3lm', '男', '1993-08-10', 'member', 'albert@superstar.com', NULL, '0918976588', '台北市北環路2巷80號', 0, NULL, '2008-10-21 12:06:08'),
(13, '黃信溢', 'dkdreamer', '1234', '女', '1987-04-05', 'member', 'edreamer@gmail.com', '', '955648889', '愛蘭里梅村路213巷8號', 1, '2016-08-29 17:42:24', '2016-08-29 17:41:46'),
(14, 'lin', 'kg2008520', '12345', '男', '2021-07-01', 'member', NULL, NULL, NULL, NULL, 0, '2021-07-09 17:28:07', '2021-07-09 17:28:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `memberdata`
--
ALTER TABLE `memberdata`
  ADD PRIMARY KEY (`m_id`),
  ADD UNIQUE KEY `m_username` (`m_username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `memberdata`
--
ALTER TABLE `memberdata`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('admin', '[{\"db\":\"tribe_db\",\"table\":\"journey\"},{\"db\":\"tribe_db\",\"table\":\"guild\"},{\"db\":\"tribe_db\",\"table\":\"tribes\"},{\"db\":\"tribe_db\",\"table\":\"guide\"},{\"db\":\"tribe_db\",\"table\":\"journey_img\"},{\"db\":\"travel_db\",\"table\":\"viewpoint_img\"},{\"db\":\"travel_db\",\"table\":\"product\"},{\"db\":\"travel_db\",\"table\":\"viewpoint\"},{\"db\":\"travel_db\",\"table\":\"user\"},{\"db\":\"tribe_db\",\"table\":\"member\"}]'),
('root', '[{\"db\":\"travel_db\",\"table\":\"user\"},{\"db\":\"travel_db\",\"table\":\"guide_language\"},{\"db\":\"travel_db\",\"table\":\"member\"},{\"db\":\"travel_db\",\"table\":\"authority\"},{\"db\":\"playersdb\",\"table\":\"players\"},{\"db\":\"my_test_db\",\"table\":\"users\"},{\"db\":\"travel_db\",\"table\":\"order\"},{\"db\":\"travel_db\",\"table\":\"admin\"},{\"db\":\"my_test_db\",\"table\":\"product\"},{\"db\":\"my_test_db\",\"table\":\"phone\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('admin', '2021-09-27 09:01:47', '{\"Console\\/Mode\":\"collapse\"}'),
('root', '2021-07-20 23:54:02', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `stock`
--
CREATE DATABASE IF NOT EXISTS `stock` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `stock`;

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `stock_id` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`stock_id`, `stock_name`) VALUES
('2330', '台積電'),
('2603', '長榮'),
('2618', '長榮航');

-- --------------------------------------------------------

--
-- Table structure for table `stock_price`
--

CREATE TABLE `stock_price` (
  `stock_id` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `open_price` decimal(10,2) UNSIGNED NOT NULL,
  `high_price` decimal(10,2) UNSIGNED NOT NULL,
  `low_price` decimal(10,2) UNSIGNED NOT NULL,
  `close_price` decimal(10,2) UNSIGNED NOT NULL,
  `delta_price` decimal(10,2) NOT NULL,
  `transactions` int(10) UNSIGNED NOT NULL,
  `volume` bigint(20) UNSIGNED NOT NULL,
  `amount` decimal(14,2) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stock_price`
--

INSERT INTO `stock_price` (`stock_id`, `date`, `open_price`, `high_price`, `low_price`, `close_price`, `delta_price`, `transactions`, `volume`, `amount`) VALUES
('2603', '2021-08-02', '133.00', '144.50', '123.50', '141.50', '9.50', 281788, 654101689, '87163069053.00'),
('2603', '2021-08-03', '140.50', '146.50', '137.50', '141.00', '-0.50', 241321, 572352123, '81384687489.00'),
('2603', '2021-08-04', '141.00', '145.00', '140.50', '143.50', '2.50', 121158, 301280543, '42974650502.00'),
('2603', '2021-08-05', '143.50', '144.50', '137.00', '138.50', '-5.00', 123296, 275125528, '38602640303.00'),
('2603', '2021-08-06', '138.00', '149.00', '137.00', '142.00', '3.50', 216663, 483808973, '69981671219.00'),
('2603', '2021-08-09', '143.00', '147.50', '142.00', '142.50', '0.50', 146560, 336946441, '48718820491.00'),
('2603', '2021-08-10', '147.00', '148.50', '138.00', '139.50', '-3.00', 170024, 411742074, '59071157421.00'),
('2603', '2021-08-11', '140.00', '141.50', '126.50', '132.00', '-7.50', 212961, 507389998, '67973974847.00'),
('2603', '2021-08-12', '134.50', '137.00', '130.50', '137.00', '5.00', 132067, 308309639, '41306359750.00'),
('2603', '2021-08-13', '137.50', '139.50', '130.50', '130.50', '-6.50', 102785, 213785296, '29158269838.00'),
('2603', '2021-08-16', '132.50', '135.00', '129.00', '130.50', '0.00', 77103, 165834653, '21950143678.00'),
('2603', '2021-08-17', '133.50', '135.00', '126.00', '126.50', '-4.00', 72845, 144221803, '18832249491.00'),
('2603', '2021-08-18', '124.00', '136.00', '121.50', '136.00', '0.00', 117954, 273901893, '35824651128.00'),
('2603', '2021-08-19', '136.00', '138.50', '127.50', '128.00', '-8.00', 152357, 321246335, '42829774176.00'),
('2603', '2021-08-20', '131.50', '134.00', '128.50', '132.50', '4.50', 95488, 225267651, '29638774077.00'),
('2603', '2021-08-23', '138.00', '145.50', '137.00', '144.00', '11.50', 140029, 330334696, '47119806182.00'),
('2603', '2021-08-24', '147.00', '148.00', '139.00', '140.00', '-4.00', 158856, 359468075, '51378792812.00'),
('2603', '2021-08-25', '141.00', '145.50', '138.50', '144.00', '4.00', 93272, 201656434, '28653093346.00'),
('2603', '2021-08-26', '143.50', '145.00', '139.00', '142.50', '-1.50', 83019, 188060333, '26719809541.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`stock_id`),
  ADD KEY `stock_id` (`stock_id`);

--
-- Indexes for table `stock_price`
--
ALTER TABLE `stock_price`
  ADD PRIMARY KEY (`stock_id`,`date`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `stock_price`
--
ALTER TABLE `stock_price`
  ADD CONSTRAINT `stock_price_ibfk_1` FOREIGN KEY (`stock_id`) REFERENCES `stock` (`stock_id`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
--
-- Database: `travel_db`
--
CREATE DATABASE IF NOT EXISTS `travel_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `travel_db`;

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`id`, `name`) VALUES
(1, '秀林鄉'),
(2, '新城鄉'),
(3, '花蓮市'),
(4, '吉安鄉'),
(5, '壽豐鄉'),
(6, '光復鄉'),
(7, '豐濱鄉'),
(8, '瑞穗鄉');

-- --------------------------------------------------------

--
-- Table structure for table `authority`
--

CREATE TABLE `authority` (
  `member_id` int(6) NOT NULL,
  `guide_id` int(5) NOT NULL,
  `valid` int(6) NOT NULL,
  `id` int(6) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `guide`
--

CREATE TABLE `guide` (
  `id` int(3) UNSIGNED NOT NULL,
  `member_id` int(3) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `goodat` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `certificate` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_account` int(50) UNSIGNED NOT NULL,
  `picture` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` datetime NOT NULL,
  `valid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `guide`
--

INSERT INTO `guide` (`id`, `member_id`, `name`, `phone`, `email`, `gender`, `goodat`, `certificate`, `language`, `intro`, `bank_account`, `picture`, `create_time`, `valid`) VALUES
(1, 1, 'Ann', '0966666666', 'Ann@test.com', '男', '水上活動,原鄉體驗,生態觀光', '', '0', '                        您好      我叫XXXX', 0, 'g1.jpg', '2021-07-15 14:14:05', 1),
(2, 2, 'Jim', '0911111114', 'Jim@test.com', '男', '水上活動,原鄉體驗', '', '0', '                                                                               哈哈哈哈哈               ', 0, '02.png', '2021-07-15 14:16:24', 1),
(3, 0, 'mandy', '0911111113', '', '男', '水上活動,原鄉體驗,生態觀光', '聽音樂', '0', '                                                                                                                                                                                                                              ', 123, 'g4.jpg', '2021-07-15 14:20:12', 1),
(4, 0, 'Jimmy', '', 'jimmy@test.com', '', '生態觀光', '', '0', '                              ', 0, 'g9.jpg', '2021-07-15 14:24:28', 1),
(5, 0, 'Angel', '0911111111', 'amy@test.com', '', '水上活動,生態觀光', '', '0', '                              ', 0, 'pic1.jpg', '2021-07-15 16:39:19', 0),
(6, 0, 'Amy', '0911111111', 'amy@test.com', '男', '水上活動,原鄉體驗', '呵呵呵呵', '0', '', 0, 'pic1.jpg', '2021-07-15 16:39:24', 0),
(16, 0, 'Jimmy', '0933333333', 'jimmy@test.com', '男', '水上活動,原鄉體驗', '', '0', '               我叫xxx是大家本次在北京的導遊，大家可以叫我小x，很高興能在這茫茫的十幾億人海中與大家相遇，這是我們的緣分，俗話說百年修得同船度，咱們也是百年修得同車緣。既然大家在大連遇見我為大家服務，我一定會讓大家玩的開心、玩的盡興。希望我們的服務會給你們帶來，在家千日好、出門也不難的感覺\r\n               ', 0, 'g4.jpg', '2021-07-16 02:42:15', 1),
(17, 0, 'Ann', '0911111111', 'ann@test.com', '男', '', '', '0', '', 0, 'catwalk.png', '2021-07-16 10:15:35', 1),
(18, 0, 'Jay', '0922222223', 'jay@test.con', '男', '水上活動', '', '0', '                              12344                              ', 0, 'g13.jpg', '2021-07-16 16:25:32', 1),
(19, 0, 'Ann', '0922222222', 'ann@test.com', '女', '水上活動', '多益 登山', '0', '                              Hello                              ', 0, 'g1.jpg', '2021-07-16 17:16:23', 1),
(20, 0, 'mandy', '0911111111', 'mandy@test.com', '男', '水上活動、原鄉體驗', '', '0', '您好 我叫ASDD', 0, 'g4.jpg', '2021-07-16 17:19:17', 0),
(21, 0, 'Andy', '0933333333', 'amy@test.com', '男', '水上活動', '', '0', '                              ', 0, 'g6.jpg', '2021-07-16 19:48:20', 0),
(22, 0, 'Emma', '0911111111', 'john@test.com', '男', '', '', '0', '', 0, 'g5.jpg', '2021-07-16 19:56:19', 0),
(23, 0, 'Jimmy', '0922222223', 'john@test.com', '男', '水上活動', '', '0', '', 0, '', '2021-07-17 00:10:24', 1),
(24, 0, 'Jimmy', '0922222223', 'john@test.com', '男', '水上活動', '', '0', '', 0, '', '2021-07-17 00:11:17', 1),
(25, 0, 'Jimmy', '0922222223', 'john@test.com', '男', '水上活動', '', '0', '', 0, '', '2021-07-17 00:12:39', 1),
(26, 0, 'Mei', '0933333333', 'amy@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 00:19:07', 1),
(27, 0, 'Mei', '0933333333', 'amy@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 00:19:44', 1),
(28, 0, 'Amy', '0911111113', 'amy@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 00:19:54', 1),
(29, 0, 'Mei', '0911111113', 'amy@test.com', '男', '', '', '1', '', 0, '', '2021-07-17 00:22:34', 1),
(30, 0, 'Jimmy', '0922222223', 'john@test.com', '男', '水上活動', '', '1', '', 0, '', '2021-07-17 00:23:02', 1),
(31, 0, 'Jimmy', '0922222222', 'tom@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 00:58:59', 1),
(32, 0, 'Emma', '0933333333', 'amy@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 01:14:22', 1),
(33, 0, 'Emma', '0933333333', 'amy@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 01:14:47', 1),
(34, 0, 'Jimmy', '0922222222', 'john@test.com', '男', '', '', '1', '', 0, '', '2021-07-17 01:32:18', 1),
(35, 0, 'Joe', '0966666666', 'ann@test.com', '男', '', '', '1', '', 0, '', '2021-07-17 01:35:53', 1),
(36, 0, 'Joe', '0966666666', 'ann@test.com', '男', '水上活動、原鄉體驗', '', '1', '', 0, '', '2021-07-17 01:38:29', 1),
(37, 0, 'Emma', '0933333333', 'ann@test.com', '男', '水上活動', '', '1', '', 0, '', '2021-07-17 01:46:12', 1),
(38, 0, 'Emma', '0933333333', 'ann@test.com', '男', '水上活動', '', '1', '', 0, '', '2021-07-17 01:46:46', 1),
(39, 0, 'Emma', '0933333333', 'ann@test.com', '男', '水上活動、原鄉體驗', '', '1', '', 0, '', '2021-07-17 01:46:52', 1),
(40, 0, 'Emma', '0933333333', 'ann@test.com', '男', '水上活動、原鄉體驗', '', '1', '', 0, '', '2021-07-17 01:47:22', 1),
(41, 0, 'Amy', '0922222222', 'john@test.com', '男', '水上活動、原鄉體驗', '', '2', '', 0, '', '2021-07-17 01:48:06', 1),
(42, 0, 'Amy', '0922222222', 'john@test.com', '男', '水上活動、原鄉體驗', '', '2', '', 0, '', '2021-07-17 01:52:22', 1),
(43, 0, 'Amy', '0922222222', 'john@test.com', '男', '水上活動、原鄉體驗', '', '2', '', 0, '', '2021-07-17 01:52:39', 1),
(44, 0, 'Mei', '0922222222', 'amy@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:02:56', 1),
(45, 0, 'Mei', '0922222222', 'ann@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:06:12', 1),
(46, 0, 'Andy', '0933333333', 'john@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:08:35', 1),
(47, 0, 'Mei', '0911111111', 'john@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:09:47', 1),
(48, 0, 'Andy', '0933333333', 'ann@test.com', '男', '水上活動', '', '0', '', 0, '', '2021-07-17 02:11:19', 1),
(49, 0, 'Emma', '0911111111', 'amy@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:13:18', 1),
(50, 0, 'Jimmy', '0933333333', 'amy@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:15:21', 1),
(51, 0, 'Emma', '0911111111', 'ann@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:20:12', 1),
(52, 0, 'Emma', '0911111111', 'ann@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:21:47', 1),
(53, 0, 'Mei', '0922222222', 'john@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:22:13', 1),
(54, 0, 'Jimmy', '0922222222', 'ann@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:28:55', 1),
(55, 0, 'Jimmy', '0922222222', 'ann@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:29:01', 1),
(56, 0, 'Emma', '0933333333', 'ann@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:29:19', 1),
(57, 0, 'Amy', '0911111113', 'john@test.com', '男', '', '', '0', '', 0, '', '2021-07-17 02:32:58', 1),
(58, 0, 'Amy', '0911111113', 'john@test.com', '男', '', '', '0', '', 0, 'g1.jpg', '2021-07-17 02:33:14', 1),
(59, 0, '花蓮一日遊', '0933333333', '45656@test.com', '男', '', '5467', '2', '166516', 6516556, '', '2021-07-17 15:12:42', 1),
(60, 0, 'Andy', '0933333333', '45656@test.com', '男', '', '5467', '2,3', '416516', 15616, '', '2021-07-17 15:13:41', 1);

-- --------------------------------------------------------

--
-- Table structure for table `guide_language`
--

CREATE TABLE `guide_language` (
  `id` int(3) NOT NULL,
  `guide_id` int(3) NOT NULL,
  `language_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `guide_language`
--

INSERT INTO `guide_language` (`id`, `guide_id`, `language_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 59, 2),
(6, 59, 3),
(7, 60, 2),
(8, 60, 3);

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `id` int(3) UNSIGNED NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`id`, `name`) VALUES
(1, '中文'),
(2, '英文'),
(3, '日文'),
(4, '韓文');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(3) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` datetime DEFAULT NULL,
  `valid` tinyint(1) NOT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  `birth` date DEFAULT NULL,
  `points` int(20) UNSIGNED NOT NULL,
  `coupon` tinyint(50) UNSIGNED NOT NULL,
  `gender` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `name`, `phone`, `email`, `account`, `password`, `time`, `valid`, `create_time`, `birth`, `points`, `coupon`, `gender`, `photo`) VALUES
(2, 'Shaq jerry', '0931401054', 'jerry@test.com', 'jerry321', '1234', '2021-07-28 02:16:54', 1, '2021-07-17 18:20:05', '2021-07-02', 111, 3, '男', ''),
(3, 'Wang james', '0932984309', 'james@test.com', 'james234', '1232', '2021-07-15 02:16:54', 1, '2021-07-17 18:20:05', '2021-07-06', 202, 34, '男', ''),
(4, '王陽明', '0926369778', 'yang@gmail.com', 'yang444', 'wlll11111', '2021-07-15 02:22:18', 1, '2021-07-17 18:26:11', '2010-12-04', 3333333, 55, '男', ''),
(5, '柯文哲', '0986352165', 'coco@test.com', 'penny9492', 'fffaaaa', '2011-02-04 02:22:18', 1, '2021-07-17 18:26:11', '2011-07-01', 202, 11, '男', ''),
(6, 'booker devin', '0927450655', 'devin@yahoo.com.tw', 'saadevin', 'j2j2j2j2', '2012-01-04 02:26:54', 1, '2021-07-17 18:30:22', '2000-11-02', 111, 255, '男', ''),
(7, 'Joanna Greeen', '0932984309', 'peee@item.com', 'GreeenGreeen', '1232Greeen', '2021-07-23 02:26:54', 0, '2021-07-17 18:30:22', '2021-07-08', 202000, 22, '女', ''),
(8, '鐘佩君', '0928522518', 'KEE@212121.com', 'kee0222', 'wlll11111', '2021-07-17 20:30:51', 1, '2021-07-17 18:32:30', '2012-05-10', 666, 255, '女', ''),
(9, 'Liu demon', '0926643693', 'yanssg@gmail.com', 'carlos1111', '11111', '2021-07-12 02:32:41', 1, '2021-07-17 18:33:47', '2013-07-10', 100, 255, '女', ''),
(10, 'BOOOO zoe', '0931422222', 'zoe@bitXX.com', 'bixxxzoe', 'opopopop', '2011-07-01 02:33:54', 1, '2021-07-17 18:35:34', '2012-05-10', 606, 3, '女', ''),
(11, 'Ty-Shon  Alexander', '0922686295', 'Alexander295@gmail.com', 'Alexander295', 'motherlover', '2021-07-12 15:16:45', 1, '2021-07-20 07:22:32', '2012-07-30', 200, 2, '男', ''),
(12, 'Chris Paul', '0932867439', 'pualin7@gmail.com', 'pualin7', 'sugardaddy', '2012-07-11 15:16:45', 1, '2021-07-20 07:22:32', '2010-07-29', 22, 22, '男', ''),
(13, 'Saitama', '0930153957', 'OnePunchMan@gmail.com', 'noSecoundPounch', 'slutlover', '2015-07-08 15:23:49', 1, '2021-07-20 07:28:46', '2012-07-30', 20000000, 1, '男', ''),
(14, 'Fubuki', '0932826648', 'Fubuki333@gamil.com', 'Fubuki333', 'whoami5555', '2027-07-23 15:23:49', 1, '2021-07-20 07:28:46', '2010-03-10', 2222, 22, '女', ''),
(15, 'Emma Mackey', '0912952777', 'sexeducation@gmail.com', ' Maeve Wiley', 'mouseaway99', '2012-07-12 15:29:30', 1, '2021-07-20 07:33:19', '2002-06-05', 200, 2, '女', ''),
(16, 'Asa Butterfield', '0954171534', 'OtisLoveMaeve@gmail.com', ' OtisMilburn', 'Masturbateismyright', '2011-07-22 15:29:30', 1, '2021-07-20 07:33:19', '2013-07-02', 200, 0, '男', ''),
(17, '炭治郎', '0971013828', 'Kamado@gmail.com', 'Kamado24hr', 'carbonisheavy', '2012-07-21 15:36:17', 1, '2021-07-20 07:41:49', '2009-06-10', 200, 222, '男', ''),
(18, '禰󠄀豆子', '0958871238', ' Zenitsu@gmail.com', 'Zachllllllll', 'icannotlivewithout', '2013-07-16 15:36:17', 1, '2021-07-20 07:41:49', '2016-07-14', 44, 22, '女', ''),
(19, 'Hashibira Inosuke', '0989197591', 'pigpig@gmail.com', ' Inosukesing222butte', 'looooooooooog', '2021-07-08 15:42:05', 1, '2020-12-15 07:42:05', '2019-07-03', 777, 77, '男', ''),
(20, 'joe biden', '0988017340', 'Iampresident@gmail.com', 'makeamericangreataga', 'fotgetpassword', '2015-07-16 15:42:05', 1, '2021-07-20 07:45:17', '2013-07-02', 22233, 22, '男', ''),
(21, 'john cena', '0988572678', 'youcannotseeme@gmail.com', 'lovetaiwancena', 'tobigtosuck', '2014-07-19 15:45:52', 1, '2021-07-20 07:49:54', '2016-03-04', 777, 1, '男', ''),
(22, '陳敬宣', '0915434429', 'viiiiiiian@gmail.com', 'exexexex1299', 'boasttry444', '2021-07-20 09:45:52', 1, '2021-07-20 07:49:54', '2013-07-02', 94, 151, '女', ''),
(23, 'ben simmons', '0972161869', 'hatefreeshot@gmail.com', 'hoy222guycanshot', 'piiiiiiiiiiiiiiinu11111', '2012-07-21 15:50:19', 1, '2021-07-20 07:53:57', '2011-07-12', 5, 5, '男', ''),
(24, 'Bijin sara', '0955491832', 'Bijins8928isme@gmail.com', 'Bijins892', 'wannayou66666', '2013-07-24 15:50:19', 1, '2021-07-20 07:53:57', '2013-07-02', 5278, 151, '女', ''),
(25, 'joe', '09123445678', 'qw5980165@gmail.com', 'joeqqq', '', NULL, 1, '2021-07-20 08:09:59', '2021-07-01', 0, 0, '女', '');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchase_time` datetime NOT NULL,
  `order_id` int(20) UNSIGNED NOT NULL,
  `status` tinyint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id` tinyint(3) NOT NULL,
  `product_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `buy_time` datetime NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(10) NOT NULL,
  `product_order` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(6) UNSIGNED NOT NULL,
  `number` tinyint(6) NOT NULL,
  `total` int(10) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id`, `product_name`, `buy_time`, `name`, `status`, `product_order`, `price`, `number`, `total`, `user_id`) VALUES
(1, '太魯閣國家公園深度一日遊', '2021-07-09 19:50:00', 'John', 1, '', 3000, 1, 3000, 1),
(2, '慕谷慕魚半日遊', '2021-07-09 20:17:00', 'John', 1, '', 4500, 1, 4500, 1),
(3, '崇德瑩農場及清水斷崖獨木舟體驗半日遊', '2021-07-09 20:17:00', 'John', 1, '', 3200, 1, 3200, 1),
(5, '花蓮一日遊', '2021-07-11 19:14:57', 'John', 1, '', 2500, 1, 2500, 1),
(6, '花蓮文化之旅', '2021-07-11 19:20:33', '', 1, '', 2000, 1, 2000, 0),
(7, '花蓮半日遊', '2021-07-11 19:23:17', 'John', 1, '', 1000, 4, 3000, 1),
(8, '花蓮一日遊', '2021-07-11 19:26:04', 'John', 1, '', 2600, 1, 2600, 1),
(9, '雲山水半日遊', '2021-07-11 19:29:25', '', 1, '', 1200, 1, 1200, 0),
(10, '花蓮一日遊', '2021-07-11 19:34:36', '', 1, '', 1850, 1, 1850, 0),
(11, '花蓮太巴塱部落半日遊', '2021-07-11 19:37:29', '', 1, '', 1950, 1, 1950, 0),
(12, '東大門夜市', '2021-07-13 10:46:21', 'Ann', 1, '', 3000, 1, 3000, 4),
(13, '七星潭', '2021-07-14 05:57:41', 'John', 1, '', 1800, 7, 12600, 1),
(29, '月洞', '2021-07-14 06:02:08', 'John', 1, '', 1750, 8, 14000, 1),
(30, '月洞', '2021-07-14 06:03:31', 'John', 1, '', 2600, 1, 2600, 1),
(32, '東大門夜市', '2021-07-18 10:22:09', 'john', 1, '', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(5) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(6) UNSIGNED NOT NULL,
  `number` tinyint(6) UNSIGNED NOT NULL,
  `viewpoint_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `itinerary` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `topic_id` int(10) UNSIGNED DEFAULT NULL,
  `content` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guide_id` int(50) UNSIGNED NOT NULL,
  `status` int(3) UNSIGNED NOT NULL DEFAULT 1,
  `create_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `number`, `viewpoint_id`, `itinerary`, `topic_id`, `content`, `guide_id`, `status`, `create_time`) VALUES
(1, '太魯閣國家公園深度一日遊', 3000, 10, '7', '太魯閣牌樓 → 太魯閣國家公園遊客中心→砂卡礑步道→小錐麓步道→燕子口     →白楊步道 景觀台 ', 1, '費用包含\r\n1.來回車資\r\n2.司機(兼導遊)車上重點導覽\r\n3. 油費、過路費、停車費\r\n4.旅行業綜合責任險200萬責任險暨20萬意外醫療險\r\n費用不包含\r\n1.餐食:為方便遊玩請自理\r\n2.個人因素所產生之消費.如飲料,私人購物...等費用\r\n3.個人旅遊平安保險,旅客若有個別需求,得自行投保旅行平安保險\r\n4.本行程表上未註明之各項開銷,自費或自由行程所衍生之任何費用\r\n5.司導小費\r\n注意事項\r\n最少出團人數 2 人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前 1 天發出取消旅遊的 Email 通知。\r\n若遇颱風、暴風雪等天候不佳的情況，將於出發前 1 天（當地時間 12:00 ）決定此團是否取消出發，之後將隨時以電子郵件形式通知。\r\n因交通、天氣等不可抗力因素所引起的時間延誤，商家有權取消或調整景點停留時間。\r\n預訂成功後，出發前一天 16:00- 20:00 由專員打電話或傳簡訊告知正確接駁時間。\r\n嬰兒票不佔位，僅提供保險且不含餐食，請知悉。\r\n若需兒童安全座椅（NT$100/個）請於下訂時備註，並於現場付款給司導。\r\n司機兼導遊服務，考量行車安全各景點行程將做簡單介紹。\r\n', 1, 1, '2021-07-09'),
(2, '慕谷慕魚半日遊', 4500, 20, '6', '慕谷慕魚生態廊道介紹→遠眺銅門電廠→揚清橋、清流橋→灣月峽谷→神仙溪谷、溪水親水區→銅門老街（原住民蕃刀製作）', 1, '費用包含：\r\n1.檢查哨來回接駁花蓮慕谷慕魚專車\r\n2.步行導覽及落地解說\r\n3.花蓮慕谷慕魚入山證申請\r\n費用不包含：\r\n1.保險\r\n2.餐費\r\n2.花蓮慕谷慕魚市區接駁注意事項\r\n注意事項\r\n最少出團人數 2 人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前 1 天發出取消旅遊的 Email 通知。\r\n若遇颱風、暴風雪等天候不佳的情況，將於出發前 1 天（當地時間 12:00 ）決定此團是否取消出發，之後將隨時以電子郵件形式通知。\r\n因交通、天氣等不可抗力因素所引起的時間延誤，商家有權取消或調整景點停留時間。\r\n預訂成功後，出發前一天 16:00- 20:00 由專員打電話或傳簡訊告知正確接駁時間。\r\n嬰兒票不佔位，僅提供保險且不含餐食，請知悉。\r\n若需兒童安全座椅（NT$100/個）請於下訂時備註，並於現場付款給司導。\r\n', 4, 1, '2021-07-09'),
(3, '崇德瑩農場及清水斷崖獨木舟體驗半日遊', 3200, 15, '1,2,3', '造訪崇德瑩農場享受大自然的美景→與崇德瑩農場動物們近距離接觸→無敵海景邊用餐→園區內戶外活動(騎沙灘', 3, '費用包含\r\n1.全套裝備（安全帽/救生衣/防滑鞋/獨木舟/槳）\r\n2.基礎教學\r\n3.教練指導\r\n4.公共意外責任險每位遊客台幣 300 萬（每一事故理賠上限是2400萬、年度理賠上限是4800萬）\r\n5.協助拍照服務\r\n6.午餐\r\n費用不包含\r\n1.未載明的交通費用\r\n2.其他個人消費\r\n注意事項\r\n最少出團人數 4 人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前 1 天發出取消旅遊的 Email 通知。\r\n若因當日參加人數眾多，可能改為在花蓮火車站前以巴士接駁，並會在活動前一天傳送確切的接駁時間及地點。\r\n活動安排將會因參加人員狀況、設施狀況、天候因素等而做調整，以安全及整體品質為最高考量。\r\n活動期間若氣候或現場狀況不佳時，請聽從教練及領隊指示行事。\r\n請穿泳裝或帶替換衣物，近視者請配戴隱形眼鏡。若必須戴眼鏡體驗，需自行留意與保護，避免眼鏡於浪大時被沖走。\r\n請自備足夠的水、更換衣物、防曬、防蚊、雨具、暈船藥等用品。\r\n活動場地無服務櫃台與置物櫃，私人物品敬請自行放於車上妥善保管。\r\n現場提供簡易沖洗但不提供更衣！為避免旅客互相等待時間太長，我們會發放毛巾，送回目的地後收回。\r\n日出/餘暉為自然現象，需視當日天侯狀況，不保證看得到。\r\n此行程以當日浪況做為出團標準，活動安排會因參加人員狀況/設施狀況/天候因素而做調整，以安全及整體品質為最高考量。\r\n活動時本公司提供隨行拍照，本公司有權使用活動中照片，刊載於網頁、社群或廣告中使用。', 2, 1, '2021-07-09'),
(4, '花蓮一日遊', 1800, 10, ' 4,8,11,12,13,16', '松園別館 ➜翡翠谷  ➜ 慶修院  ➜  七星潭  ➜ 花蓮文創園區 ➜  東大門夜市', NULL, '費用包含\r\n1.來回車資\r\n2.司機(兼導遊) \r\n3. 油費、過路費、停車費\r\n4.旅行業綜合責任險200萬責任險暨20萬意外醫療險\r\n費用不包含\r\n1.餐食:為方便遊玩請自理\r\n2.個人因素所產生之消費.如飲料,私人購物...等費用\r\n3.個人旅遊平安保險,旅客若有個別需求,得自行投保旅行平安保險\r\n4.本行程表上未註明之各項開銷,自費或自由行程所衍生之任何費用\r\n5.司導小費\r\n注意事項\r\n最少出團人數 2 人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前 1 天發出取消旅遊的 Email 通知。\r\n若遇颱風、暴風雪等天候不佳的情況，將於出發前 1 天（當地時間 12:00 ）決定此團是否取消出發，之後將隨時以電子郵件形式通知。\r\n因交通、天氣等不可抗力因素所引起的時間延誤，商家有權取消或調整景點停留時間。\r\n預訂成功後，出發前一天 16:00- 20:00 由專員打電話或傳簡訊告知正確接駁時間。\r\n嬰兒票不佔位，僅提供保險且不含餐食，請知悉。\r\n若需兒童安全座椅（NT$100/個）請於下訂時備註，並於現場付款給司導。', 2, 1, '2021-07-09'),
(5, '花蓮一日遊', 2500, 10, '8,9,10,11', '曼波海灘＞四八高地戰備坑道＞七星潭＞東大門夜市', NULL, '第一站:漫波海灘\r\n曼波海灘是花蓮景點中一處隱藏秘境，雖與熱門景點七星海相鄰，但遊客鮮至，所以曼波海灘擁有花蓮景點獨一份的幽靜。來到花蓮，若想要安靜的觀賞海景，拍照與放鬆心情，那麼曼波海灘絕對是你的不二之選。除此之外，海灘上堆滿了砂石，在這裏可以暢快淋漓的利用砂石創作，沒有人干擾。另外，在曼波海灘景點附近還可以買到新鮮的曼波魚。\r\n第二站:四八高地\r\n花蓮四八高地＆四八高地戰備坑道，兩處不一樣的景點，不過都很紅且緊鄰在旁。\r\n花蓮四八高地戰備坑道，位於四八高地曼波園區內，是近年才開放的花蓮新景點，主要參觀軍事重地的秘境景點。\r\n四八高地則是能盡收七星潭月牙灣海景，但目前最精采的角度，已經立標語禁止大家進入，因為藏有潛在危險性。\r\n第三站:七星潭\r\n位在花蓮市區東北方，位於花蓮市新城鄉的北埔村，可取道美崙工業區，由花蓮師院（現為「國立東華大學美崙校區」）前指標前行即可到達。此地海灘呈一優美的弧形海灣，海水潔淨湛藍，黑石晶瑩剔透，在此可遠眺青山蒼鬱，公路綿延。\r\n七星潭富有詩意的名稱，據說是位於花蓮師範學院和花蓮機場一帶，早年有零星湖泊散佈，後來因建設需要而填實。現在一般稱七星潭，是指美崙工業區和花蓮機場以北的地區，有斷層形成的海峽與優美的弧形海灣，具有豐富的自然人文景觀。在七星潭，可以遠眺清水斷崖，夜間還可以欣賞新城和崇德地區的燈火，區內更有許多景點，提供休憩和知性之旅。\r\n七星潭風景區以自行車道為動脈，從花蓮市南濱公園、經花蓮港、四八高地到七星潭風景區，長達21公里的旅程有不同的風光。花蓮縣政府更興建了石雕園區、賞星廣場、觀日樓、兒童遊樂場等休憩設施，在漁場附近還有海生態的解說牌，也利用防風林區闢建海濱植物園區，動植物生態非常豐富，來一趟知性之旅絕對不虛此行。\r\n第四站:東大門夜市\r\n在第一座濱海夜市「南濱夜市」吹起熄燈號後，「花蓮彩虹夜市」隨之而起，座落於花蓮市中山路、重慶路交叉口，管理單位特別於規劃攤位空間給原本南濱夜市攤商進駐。\r\n東大門夜市占地廣闊，由在地四個超強夜市組成的「東大門夜市」，包含自強夜市、福町夜市、各省一條街、原住民一條街，所以來這逛都能看到之前就很出名的商家，而除了吃美食，夜市裡也有超多可以玩的店，像是打彈珠、棒球九宮格、射箭．．等。\r\n', 3, 1, '2021-07-11'),
(6, '花蓮文化之旅', 2000, 10, '11,12,13,14', '松園別館＞花蓮文創園區＞太平洋公園＞東大門夜市', NULL, '第一站:松園別館\r\n松園別館 簡介\r\n位於花蓮市區的松園別館，大約建立於1943年，當時為花蓮港兵事部辦公室，附近松林成蔭，與附近的放送局(現中廣公司花蓮台)、海岸電台(現中華電信)與自來水廠(現自來水公司美崙淨水廠)等處相連一片。由於此處的地理位置優越、位處制高點，可俯瞰花蓮港及太平洋美景，大片高聳參天的松林與別館的歷史建物相互映襯，更顯其濃厚人文歷史氛圍。\r\n\r\n第二站:花蓮文創園區\r\n花蓮舊酒廠位於花蓮市中華路，前身為「臺灣總督府專賣局花蓮港支局花蓮酒工場」，早在大正2年（1913）時，宜蘭振拓株式會社在花蓮港街租得土地1520坪，成立「花蓮港工場」，以製造紅酒、米酒為主。\r\n目前園區部分場館及戶外場地提供文創與公共性活動申請使用，週末假日辦理釀市集與街頭藝人展演，並不定期舉辦主題性之藝文活動。\r\n\r\n第三站:太平洋公園\r\n太平洋公園包含南濱段及北濱段。南濱公園依南濱海岸線建置規劃，保留原始的自然地景，可遠眺整片太平洋與新月造型的「洄瀾新灣」，公園內設有羅馬風格的中央廣場，並規劃出椰子園、兒童遊樂場等區域。北濱段擁有大型3D彩繪裝置藝術，如全臺最大的3D手繪作品「寰宇巨龍」、海洋世界彩繪牆等，還有極限運動場、沙灘排球場，深受年輕人喜愛。\r\n兩潭自行車道的有一段瀕臨太平洋，從南濱公園為起點，沿途行經北濱公園、曙光橋、江口良三郎公園至花蓮港景觀橋，當地人稱為「濱海自行車道」，沿著太平洋騎乘，廣闊的海洋讓人心曠神怡。\r\n太平洋公園會不定期舉辦假日市集或藝文表演活動等，早晚的活動熱鬧，白天可以騎自行車、散步，晚上這裡則是聽濤、觀星的景點。\r\n\r\n終點站:東大門夜市\r\n在第一座濱海夜市「南濱夜市」吹起熄燈號後，「花蓮彩虹夜市」隨之而起，座落於花蓮市中山路、重慶路交叉口，管理單位特別於規劃攤位空間給原本南濱夜市攤商進駐。\r\n東大門夜市占地廣闊，由在地四個超強夜市組成的「東大門夜市」，包含自強夜市、福町夜市、各省一條街、原住民一條街，所以來這逛都能看到之前就很出名的商家，而除了吃美食，夜市裡也有超多可以玩的店，像是打彈珠、棒球九宮格、射箭．．等。\r\n', 4, 1, '2021-07-11'),
(7, '花蓮半日遊', 1000, 5, '19,20', '雲山水夢幻湖->雲山水落雨松跳石瀑布區->鯉魚潭遊湖', NULL, '-雲山水夢幻湖\r\n湛藍的夢幻湖水來自中央山脈，水質清澈，在陽光照射下產生動人景致，加上兩旁雲山水美景倒映在湖面上，如夢似幻的美景，讓它有「夢幻湖」之稱。\r\n\r\n-雲山水落雨松跳石瀑布區\r\n到了春分時刻，栽種於夢幻湖畔的鳶尾花紛紛綻放，柔和的紫色花朵隨風在水岸旁蕩漾；秋分時節，走在小水壩上的石磚步道，聽著潺潺流水聲，欣賞眼前由綠轉黃而變得繽紛多彩的落羽松林，讓人情不自禁地沉浸在這水中森林的風景中。\r\n\r\n-鯉魚潭環湖\r\n鯉魚潭為花蓮地區最大的內陸湖泊，因一旁的山岳形狀似鯉魚故得其名。依山傍水、湖光山色十分秀麗，可踩踏天鵝船或是搭乘快艇一覽湖上景色，也可以走上步道俯瞰山水，是一清幽之地。\r\n鯉魚潭湖面寬敞平靜、湖水清澈，是很適合從事水上活動的熱門場所。湖邊停滿了不同造型的腳踏船，可以腳踏天鵝船於湖面上享受寧靜的片刻，不想要太累的話還能選擇電動船，另外也有提供多人遊艇、獨木舟和鯉魚潭觀光船不同選擇，都能沉浸在這片湖景之中。\r\n\r\n', 5, 1, '2021-07-11'),
(8, '花蓮一日遊', 2600, 10, '18,20,21', '鯉魚潭環湖->池南森林遊樂園區林業陳列館->池南森林遊樂園區森林步道->池南森林遊樂園區林業功臣紀念碑->白鮑溪朔溪->白鮑溪夜間抓蝦', NULL, '-鯉魚潭自行車環湖\r\n鯉魚潭設有約5公里的環潭自行車道，讓鐵馬騎士能夠享受怡人的湖光山色，而標高601公尺的鯉魚山上更有數條森林步道，站在制高點的觀景台上可以眺望雄偉的中央山脈、奇萊山以及花東縱谷，是享受森林浴、賞鳥賞花賞景的絕佳健行路線。\r\n\r\n-池南森林遊樂園區林業陳列館\r\n昔日的池南國家森林遊樂區，一直扮演重要的角色，是林務局管理的木瓜山事業區的伐木集材地，當時木瓜山事業區內所砍伐的木材，都需要透過哈崙運材鐵道與索道送往池南，再轉往到外地。在1986年停下一切伐木事業之後，雖然風華不在，園區內卻仍保有豐富的林業文化資產，並設立一座林業陳列館，在戶外場地展示蒸汽集材機、柴油集材機及流籠等設備。\r\n\r\n-池南森林遊樂園區森林步道\r\n森林浴步道位於木瓜山事業區第98林班及第99林班，設有縱橫全區之森林步道系統，區內林木蓊鬱，山景秀麗，向西可眺望鯉魚潭風光，向東可眺望花東縱谷及東華大學全景，步道全長累計約11公里長，適合各年齡層遊客使用，每年3月份花蓮林區管理處都會在植樹節前後於此區辦理登山健行活動，增加民眾走出戶外參與森林健行活動盡情享受芬多精，是一個休閒旅遊的好地方.\r\n\r\n-池南森林遊樂園區林業功臣紀念碑\r\n此處主要為紀念林業歷史殉職員工，位於池南區較高處，海拔高約220公尺，由此處可直接觀賞鯉魚潭風景，週邊景色盡入眼簾。\r\n\r\n-白鮑溪朔溪\r\n白鮑溪早年名為白匏溪，發源於中央山脈木瓜南山，是花蓮溪支流之一，向東蜿蜒而下，在壽豐鄉池南村重光橋附近與荖溪匯流入花蓮溪，全長約9公里，溪水終年不斷，水質清澈，整條溪流因多應攔沙壩而形成許多水潭，成為戲水、釣魚、游泳及溯溪的熱門活動去處。\r\n\r\n-白鮑溪夜間抓蝦+BBQ\r\n山谷的險峻、溪河的秀麗和瀑布的磅礡，大自然的鬼斧神工在花蓮的溪谷裡展露無遺，穿上最安全的裝備，跟著經驗豐富的專業教練，在蜿蜒的河道、遼闊的景緻中，一起探索你從未發現的花蓮。由於花蓮溪流水質清澈純淨，孕育了豐富而多樣化的生態。我們在穿上最安全的裝備後，跟著經驗豐富的專業教練，一起探索你從未發現的花蓮。\r\n', 5, 1, '2021-07-11'),
(9, '雲山水半日遊', 1200, 6, '18,19', '雲山水夢幻湖->雲山水落雨松跳石瀑布區->池南森林遊樂區-夜間賞螢', NULL, '-雲山水夢幻湖\r\n湛藍的夢幻湖水來自中央山脈，水質清澈，在陽光照射下產生動人景致，加上兩旁雲山水美景倒映在湖面上，如夢似幻的美景，讓它有「夢幻湖」之稱。\r\n\r\n-雲山水落雨松跳石瀑布區\r\n到了春分時刻，栽種於夢幻湖畔的鳶尾花紛紛綻放，柔和的紫色花朵隨風在水岸旁蕩漾；秋分時節，走在小水壩上的石磚步道，聽著潺潺流水聲，欣賞眼前由綠轉黃而變得繽紛多彩的落羽松林，讓人情不自禁地沉浸在這水中森林的風景中。\r\n\r\n\r\n-池南森林遊樂區-夜間賞螢\r\n教導賞螢的技巧、動物觀察、棲地營造，創造出深度的小文青旅行，透過自然觀察培養親子、情人及家人情感，共創人與親情、土地的良善關係，邀請民眾一起走入螢光小精靈的世界，享受螢光滿布的幸福夜晚。活動也透過周邊民宿的策略聯盟，就是要讓你住得舒適、玩得知識、觀得豐富!\r\n', 5, 1, '2021-07-11'),
(10, '花蓮一日遊', 1850, 10, '15,16,17', '台開心農場動物區->台開心農場生態池->台開心農場日出花海->慶修院->知卡宣森林公園玻璃花室 ->卡宣森林公園水生植物區', NULL, '-台開心農場動物區\r\n\r\n-台開心農場生態池\r\n\r\n-台開心農場日出花海\r\n花園區種植了8萬株向日葵，打造數公頃的黃金花海，吸引許多遊客入園賞花，在美麗的花海之中，留下最美的畫面與回憶。\r\n\r\n-慶修院日本四國的八十八尊石佛＆「寶形造」建設的佛堂\r\n\r\n-知卡宣森林公園玻璃花室\r\n許多人知道花蓮有座「知卡宣森林公園」，除了親水公園能免費玩耍之外，其內有座白色外觀的玻璃花卉溫室，仿若「巴黎羅浮宮」金字塔的袖珍版本，透明玻璃配上金屬搭建的龐大建築物，矗立在綠草地上，以山巒為背景，十分醒目。  \r\n\r\n-知卡宣森林公園水生植物區\r\n在知卡宣森林公園內，有一處水生植物園區，設有一個大型的生態池，種滿了水蠟燭、蘭草、荷花、浮萍、大萍等各種水生植物\r\n\r\n\r\n', 6, 1, '2021-07-11'),
(11, '花蓮太巴塱部落半日遊', 1950, 6, '', '太巴塱部落', NULL, '簡介\r\n太巴塱位於花蓮縣光復鄉，是一處古老的阿美族部落，這裡生活著一群太陽 “Ina” 的子民，是目前台灣最大、人口最密集的原住民部落。一趟 4 小時的半日遊，將帶你認識阿美族早期原始的文物，體驗部落人的原始情感，更棒的是，品嚐最道地豐盛的阿美族風味餐！\r\n太巴塱擁有久遠的歷史，這裡的人是最有資格自稱「台灣人」的一群人了！近年來他們為了推動保存傳統織布、籐編、歌謠吟唱、野外訓練、木雕等文化資產的工作，開始著手整理部落史料。為了將許多美麗的故事流傳下來，部落中出現了工作室、文史館、文化園區等景點。在這裡和部落裡的人互動，不僅可以享受島內的文化交流，更能感受到他們對於部落深厚的情感。幸運的話，遇上每年七八月的豐年祭，還可以一起擺動身體，感受阿美族傳統的歌舞魅力喔！\r\n趁著暑假，帶著全家到花蓮玩，來一場太巴塱部落的文化巡禮吧！\r\n行程介紹\r\n部落文化導覽\r\n於當地人興建的「太巴塱周廣輝生活文化館」，了解阿美族傳統的茅草屋、生活器具\r\n參觀具有 300 年以上歷史的砂荖古井、Saksakay 部落遺址，了解千年古屋的搭建方式\r\n創意 DIY 體驗—紅糯米釀酒製作 DIY\r\n用最能代表太巴塱阿美族文化農作物—在地種植的 「紅糯米」，釀出獨特口感的酒，帶回家與親友分享！\r\n火的饗宴 - 風味體驗餐\r\n餐點以黑糯米雞油飯為主食，香草烤雞為主餐、配上鹹豬肉、野菜、時令青菜等，和部落人一起享用最道地的部落風味餐\r\n關於｜太巴塱紅糯米生活館\r\n太巴塱紅糯米生活館，結合在地豐厚的阿美特色文化與當地資源，致力於太巴塱部落的社區營造。創設與發展目標的發想，來自於部落的創始故事：上天賜給太巴塱部落 katepaay 紅糯米糧食，成為祭天與招待賓客重要的聖品。故以紅糯米、黑糯米及白糯米的結合，塑造部落形象。希望以「紅糯米生活館」為起點，讓太巴塱部落成為阿美族的文化重鎮。體驗包含\r\n在地原住民導覽，帶你認識太巴塱部落\r\n了解阿美族傳統的茅草屋、生活器具\r\n拜訪砂荖古井、Saksakay 部落遺址\r\n帶回一瓶自己釀的紅糯米釀酒和親友分享！\r\n享用道地豐富的原住民風味餐！\r\n詳細說明\r\n體驗時間：4 小時，依現場狀況為主\r\n活動對象：皆可， 12 歲以下孩童不能自行參與活動，需家長一同參與體驗\r\n集合地點：太巴塱國小（花蓮縣光復鄉中正路二段 23 號）\r\n交通方式：\r\n【自行開車】自花蓮市南下，沿台九', 7, 1, '2021-07-11'),
(12, '崇德瑩農場及清水斷崖獨木舟體驗半日遊', 1800, 255, '18', '松園別館＞花蓮文創園區＞太平洋公園＞東大門夜市', NULL, '123', 6, 1, '2021-07-12'),
(13, '花蓮一日遊', 4500, 255, '8,18', '松園別館＞花蓮文創園區＞太平洋公園＞東大門夜市', NULL, '8165', 5, 1, '2021-07-13'),
(14, '花蓮一日遊', 4500, 255, '8,18', '松園別館＞花蓮文創園區＞太平洋公園＞東大門夜市', NULL, '8165', 8, 1, '2021-07-13'),
(15, '123', 1800, 20, '11,11', '松園別館＞花蓮文創園區＞太平洋公園＞東大門夜市', NULL, '57454554', 5, 1, '2021-07-13'),
(16, '123', 2000, 20, '18', '松園別館＞花蓮文創園區＞太平洋公園＞東大門夜市', NULL, '45636', 7, 1, '2021-07-13'),
(17, '崇德瑩農場及清水斷崖獨木舟體驗半日遊', 1800, 255, '18,18', '松園別館＞花蓮文創園區＞太平洋公園＞東大門夜市', NULL, '7546', 5, 1, '2021-07-13'),
(18, '崇德瑩農場及清水斷崖獨木舟體驗半日遊', 2000, 20, '18,18', '山間小路→三棧南溪溯溪一第一深潭→攀岩→深潭跳水一第二深潭(從初級跳水到12米高跳水)一三棧南溪溯溪', NULL, '5756', 8, 1, '2021-07-13'),
(19, '崇德瑩農場及清水斷崖獨木舟體驗半日遊', 2000, 20, '18,18', '山間小路→三棧南溪溯溪一第一深潭→攀岩→深潭跳水一第二深潭(從初級跳水到12米高跳水)一三棧南溪溯溪', NULL, '5756', 5, 1, '2021-07-13'),
(20, '花蓮一日遊', 4500, 10, '8', '雲山水夢幻湖->雲山水落雨松跳石瀑布區->鯉魚潭遊湖', NULL, '566446', 456, 1, '2021-07-13'),
(21, '546', 654, 255, '', '654', NULL, '46', 546, 1, '2021-07-16'),
(22, '花蓮一日遊', 8848, 255, '', '4616316', NULL, '', 65165, 1, '2021-07-16');

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`id`, `name`) VALUES
(1, '水上活動'),
(2, '原鄉體驗'),
(3, '生態觀光');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `account` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `valid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `account`, `password`, `name`, `valid`) VALUES
(1, 'jay', '1234', 'jay', 1),
(4, 'ann', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', NULL, 0),
(5, 'adam', '1111', NULL, 0),
(6, '1111', '1111', NULL, 1),
(7, 'qqqq', 'qqqq', NULL, 1),
(8, '1234', '1234', NULL, 1),
(9, '2222', '2222', NULL, 1),
(10, '2222', '2222', NULL, 1),
(11, 'joee', '1234', NULL, 1),
(12, 'joee', '1234', NULL, 1),
(13, '11111', '1111', NULL, 1),
(14, 'adam1', '1111', NULL, 1),
(15, '111111', '11111', NULL, 1),
(16, '1111111', '1111', '1111', 1),
(17, '', '', NULL, 1),
(18, '', '', NULL, 1),
(19, '', '', NULL, 1),
(20, '', '', NULL, 1),
(21, 'adam', '11111', NULL, 1),
(22, 'adam', '1111', NULL, 1),
(23, 'jay', '', NULL, 1),
(24, 'adam', '1234', NULL, 1),
(25, 'jay', '', NULL, 1),
(26, 'a', '', NULL, 1),
(27, 'aaaaa', '', NULL, 1),
(28, 'a', '', NULL, 1),
(29, '', '1234', NULL, 1),
(30, '111', '111', NULL, 1),
(31, '111', '11111', NULL, 1),
(32, '111', '1111', NULL, 1),
(33, '1111', '11', NULL, 1),
(34, '111', 'dd', NULL, 1),
(35, 'adag', '1234', NULL, 1),
(36, '122', '', NULL, 1),
(37, '', '', NULL, 1),
(38, 'adam', '1234', NULL, 1),
(39, 'adam', '1234', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `viewpoint`
--

CREATE TABLE `viewpoint` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `review` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area_id` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `topic_id` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `viewpoint`
--

INSERT INTO `viewpoint` (`id`, `name`, `intro`, `review`, `area_id`, `topic_id`, `valid`) VALUES
(1, '清水斷崖', '清水斷崖位於清水山東側，自蘇花公路和平至崇德之間，綿延21公里 。其中清水山東南大斷崖尤其險峻，絕壁臨海面長達5公里，非常壯觀。當行車在山壁斷崖與無垠汪海之間，好像騰雲凌空，上有巨壁千仞，下是汪洋萬頃，真是驚險無比，也感受前人拓荒築路的艱辛，眼前所見正是一篇山海與人的壯麗詩篇。在這裡還可以欣賞太平洋海天一色，山海對峙，以及海岸呈現多層次的藍色驚艷。\r\n', '來花蓮一定要來這裡看看！', '1', '1', 1),
(2, '崇德海灘', '崇德步道與崇德海灘在空間上屬於一體，要抵達海灘，必須沿步道步行而下，步行約10分鐘即可抵達崇德海灘，布滿了五顏六色細沙石礫的海灘。崇德步道是從崇德隧道北口觀景平台的石階下去，是一條短程步道，在景觀平台與步道沿線均設置了資源解說系統，遊客可從其中獲得有關此地的景觀資訊或植物的介紹。步道全線是由石板鋪設而成，沿途的植物大部份屬於向陽性的闊葉樹；步行約30分鐘即可抵達步道終點，步道終點的平台設有石椅，遊客可以靜坐此處欣賞白浪拍岸的壯闊景象。\r\n', '風景美麗人煙稀少的海灘，適合想放空散步純看海景的人', '1', '1', 1),
(3, '崇德瑩農場', '「崇德瑩農場」在當地又被稱作《台版紐西蘭》坐落於太平洋海岸與中央山脈之間，好天氣時在浩瀚無垠的太平洋旁，海浪拍打聲與層層浪花，一波波漲潮和退潮海浪，看著看著再唱著幾首喜歡的歌，享受在遼闊的牧場草原望山看海，在美照拍飽飽的同時，也能用心體會花蓮之美\r\n亦為處複合式農場，提供的項目多元，像是基本的露營車、風味餐、下午茶等，可以購買牧草近距離體驗餵食動物，還有飛行傘、沙灘車、極限運動和賞鯨輕旅行', '很棒的免門票景點，視野遼闊，風景很好，可以看山也可以看海，還有一個小湖也很漂亮。\r\n這裡有好幾間貨櫃咖啡廳可以喝飲料休息。\r\n旁邊草地有動物區，有羊和馬，可以購買紅蘿蔔或草來餵食，感覺很多遊客在餵食，但動物們還是很餓，會一直搶食~', '1', '3', 1),
(4, '翡翠谷', '翡翠谷位於秀林鄉銅門村，對岸即為慕谷慕魚生態廊道，最為秀麗之風景為沿著木瓜溪河谷旁蜿蜒而行的翡翠谷古道。古道約有二百多年歷史，在早期是太魯閣族人從中央山脈東遷到木瓜溪時之交通要道，沿途風景宜人，是一個具有歷史意義及遊憩價值的觀光景點。\r\n', '世外桃園', '1', '1', 1),
(5, '三棧溪', '三棧溪是以三棧南溪為主流，而後在三棧村附近和北溪會合後才東流注入太平洋。\r\n其流域有93平方公頃，以三棧南溪為主流，在三棧北溪會合後才出海的溪水，因海岸山脈被溪流所切割，於中游產生壯觀的河谷地。特殊的河谷地形，早期因玫瑰石的開採而名噪一時，後於法令規定限制之下，才讓美景得以保存。本區域動、植物生態多樣豐富；結合位於三棧階地的布拉旦社區人文特色，很適合從事觀察地形、地質、動植物生態、攝影、寫生等自然觀察與生態旅遊活動。\r\n', '水質清澈，深淺落差小，不去到橋下的話，還滿安全的，是戲水的好選擇！', '1', '1', 1),
(6, '慕谷慕魚', '「慕谷慕魚」名稱由太魯閣族“MukuMugi ”音譯而來，語意為『從長滿藤蔓地方而來的人』，隱匿於山谷中的慕谷慕魚，舉目即可望見連綿不絕的青山和清澈的藍天，壯麗的溪谷景致由許多大大小小的石頭組合而成；清澈透明的溪水呈現青綠色，水質清晰到可以直接透視到底部的石頭，潺潺的溪水聲響伴隨著鳥鳴是這裡最迷人的協奏曲。\r\n\r\n\r\n', '河流清澈、風景幽美…超世脫俗的靈雅!', '1', '1', 1),
(7, '太魯閣國家公園', '太魯閣國家公園成立於民國75年（西元1986年），橫跨花蓮、南投及臺中。\r\n太魯閣國家公園以雄偉壯麗、幾近垂直的大理岩峽谷景觀聞名。沿著立霧溪的峽谷風景線而行，觸目所及皆是壁立千仞的峭壁、斷崖、峽谷、連綿曲折的山洞隧道、大理岩層和溪流等風光。\r\n瀑布是太魯閣國家公園重要的景觀，從太魯閣口到文山間，瀑布相當多，最著名的要屬白楊瀑布、銀帶瀑布、長春瀑布、綠水瀑布等，還有許多不知名的小流瀑。\r\n燕子口和九曲洞，是太魯閣峽谷最讓人心動的自然奇觀，也是峽谷最窄的兩段，臨溪側闢有人行步道供遊客漫步欣賞。燕子口對岸大理石峭壁上可見到許多小洞穴，每當春夏之際，常有小雨燕和洋燕在峭壁間穿梭鳴唱，或在洞穴內築巢，故而得名燕子口。而九曲洞「如腸之迴、如河之曲」的隧洞景觀，遊客可沿迴轉曲折的半明半暗路線欣賞峽谷風光。\r\n', '什麼叫做鬼斧神工？來這裡一定能夠親眼見證。孩子們驚呼這就是課本裡面的照片，沒有錯，來這裡眼睛所看到的就是課本裡面所拍攝的。\r\n來台灣沒來太魯閣等於沒來過！真的推薦所有人一定要來此一遊。', '1', '3', 1),
(8, '七星潭', '七星潭位於花蓮市區東北方、機場東側，距離花蓮市區僅4、5公里的距離，可取道美崙工業區抵達。七星潭從前原為一塊沼澤地，早於清光緒五年臺灣圖中，即有記載此地之零星小湖泊，當時並已定名為「七星潭」雖名為潭，但實際上只是海邊的一個灣澳，突出於美崙鼻的一側，據傳說是因在此處觀察北斗七星最為明亮的原因。\r\n七星潭現在已經規劃為縣級風景區，海水湛藍清澈潔淨、海岸景觀秀麗，頻頻受到眾多旅遊人士之青睞。花蓮縣政府因應遊客漸增的趨勢，陸續增添賞景步道、海濱亭台、賞星廣場等多項遊憩設施.', '七星潭是花蓮著名的旅遊景點，不僅風景優美，還有無敵海景可欣賞。', '2', '3', 1),
(9, '四八高地', '花蓮縣七星潭為國際級觀光景點，而緊鄰的四八高地區域，由花蓮縣政府向軍方申請部分土地無償使用，在保有軍事歷史文化及在地生態環境下，規劃為開放的公共空間，包含七星潭四八高地戰備坑道、曼波園區及2020年底開放的花蓮農好基地。\r\n其中，在四八高地下方，有個軍事戰備坑道，當時為了防止美軍可能的登陸行動，而建置此戰備坑道，作為保衛花蓮港飛行場其主陣地北方之屏障，且保留至今，經過花蓮縣政府逐步整理後，於2020年元旦起，開放民眾預約導覽，一同一探究竟。', '四八高地的月牙灣真美~景色不輸外國！\r\n名為高地~其實不高，只不過冬天東北季風強，前來觀景時得特別小心！\r\n', '2', '3', 1),
(10, '曼波海灘', '曼波海灘是花蓮景點中一處隱藏秘境，雖與熱門景點七星海相鄰，但遊客鮮至，所以曼波海灘擁有花蓮景點獨一份的幽靜。來到花蓮，若想要安靜的觀賞海景，拍照與放鬆心情，那麼曼波海灘絕對是你的不二之選。除此之外，海灘上堆滿了砂石，在這裏可以暢快淋漓的利用砂石創作，沒有人干擾。另外，在曼波海灘景點附近還可以買到新鮮的曼波魚。', '客還沒有很多的曼波海灘， 是我們玩最久的景點。疊疊石頭， 拍天空拍大海， 拍超多自以為是文青，或者是各種搞笑的照片和影片。 非常推廌在這裡待久一點, 享受太平洋的壯闊, 再配上背後高聳的護國神山\"中央山脈\" ，永永遠遠都有拍不完的美景。 ', '2', '1', 1),
(11, '東大門夜市', '在第一座濱海夜市「南濱夜市」吹起熄燈號後，「花蓮彩虹夜市」隨之而起，座落於花蓮市中山路、重慶路交叉口，管理單位特別於規劃攤位空間給原本南濱夜市攤商進駐。\r\n東大門夜市占地廣闊，由在地四個超強夜市組成的「東大門夜市」，包含自強夜市、福町夜市、各省一條街、原住民一條街，所以來這逛都能看到之前就很出名的商家，而除了吃美食，夜市裡也有超多可以玩的店，像是打彈珠、棒球九宮格、射箭等。\r\n', '來花蓮必逛，環境衛生乾凈，規劃完善，管理好，攤商吃喝玩樂都有，垃圾分類回收有專人負責。', '3', '3', 1),
(12, '花蓮文創園區', '花蓮舊酒廠位於花蓮市中華路，前身為「臺灣總督府專賣局花蓮港支局花蓮酒工場」，早在大正2年（1913）時，宜蘭振拓株式會社在花蓮港街租得土地1520坪，成立「花蓮港工場」，以製造紅酒、米酒為主。\r\n目前園區部分場館及戶外場地提供文創與公共性活動申請使用，週末假日辦理釀市集與街頭藝人展演，並不定期舉辦主題性之藝文活動。\r\n', '細細品味皆美，來到這裡已經接近黃昏！但原貌的建築呈現一種很放鬆又古典的優雅感，是個難得在都市中一片放空之地，加又有市集！令人期待！', '3', '3', 1),
(13, '松園別館', '位於花蓮市區的松園別館，大約建立於1943年，當時為花蓮港兵事部辦公室，附近松林成蔭，與附近的放送局(現中廣公司花蓮台)、海岸電台(現中華電信)與自來水廠(現自來水公司美崙淨水廠)等處相連一片。由於此處的地理位置優越、位處制高點，可俯瞰花蓮港及太平洋美景，大片高聳參天的松林與別館的歷史建物相互映襯，更顯其濃厚人文歷史氛圍。\r\n', '兩度到此旅遊，花蓮市區方便又近捷的懷舊好去處。\r\n庭園造景的幾株百年老松高大挺拔，蓊鬱參天，造型各異，好不令人讚嘆。\r\n做為過去日軍與美軍及政府徵用的房瓦廳舍而言，兩層樓的舊式建築，還是頗具懷古的價值。', '1', '1', 1),
(14, '太平洋公園', '太平洋公園包含南濱段及北濱段。南濱公園依南濱海岸線建置規劃，保留原始的自然地景，可遠眺整片太平洋與新月造型的「洄瀾新灣」，公園內設有羅馬風格的中央廣場，並規劃出椰子園、兒童遊樂場等區域。北濱段擁有大型3D彩繪裝置藝術，如全臺最大的3D手繪作品「寰宇巨龍」、海洋世界彩繪牆等，還有極限運動場、沙灘排球場，深受年輕人喜愛。\r\n太平洋公園會不定期舉辦假日市集或藝文表演活動等，早晚的活動熱鬧，白天可以騎自行車、散步，晚上這裡則是聽濤、觀星的景點。', '在這裡可以散步也可以下去玩水，可以看海景，背後的山景也很漂亮，非常值得來玩。', '3', '3', 1),
(15, '台開心農場', '洄瀾灣開心農場位於花蓮縣吉安鄉的花蓮光華樂活園區，佔地廣達45公頃，區內種滿向日葵與野薑花、荷花、馬纓丹等各種花卉，每當花季來臨，花團錦簇的景象，給人美不勝收的感受。目前不但全天開放，並且免費入園參觀。\r\n開心農場內最引人注目的，或許是隨處可見的小動物，例如飼養中在鐵籬中的孔雀和山羌，梅花鹿雖隔著木欄，卻能讓人親近互動，更不用說在開放草地中的小山羊，連小朋友都忍不住蹲下輕撫著牠的身軀，是最具療癒效果的休閒園區。\r\n', '因為天氣炎熱，動物也都懶洋洋的，我們待最久的地方是向日葵花海，黃色的向日葵配上黃色的遊園車超級可愛。', '4', '3', 1),
(16, '慶修院', '吉安慶修院原為「真言宗吉野布教所」，是日治時期吉野移民村的宗教信仰據點，為現今東部地區最完整的日式祠廟，亦為花蓮縣縣定古蹟。日治時期，日本移民對於台灣的氣候、生活環境多有所不適應，為尋求內心安定與宗教信仰，由日人川端滿二募建了真言宗布教所，即是現今慶修院的根源與前身。現存於慶修院的八十八尊座石佛，據說為川端滿二遵循空海大師遺規，親身行遍日本四國島上八十八所寺院請回而來，讓移民村居民就近參拜，尋求精神寄託；院內亦保有空海大師石像、不動明王石刻、百度石等文物。為廣宣慶修院獨有宗教文化與歷史，並成為中日文化交流平台，館方積極推動如端午鯉魚祭、青葉祭、納涼祭，及週年慶、跨年敲鐘、春節祈福等文化活動。', '非常具有歷史的日式廟宇，保留的相當完整，裡面有供奉不動明王及八八尊石佛，神像非常完整。然後上香的方式也有一些不太一樣，一小截，點燃橫放，寺院內環境非常乾淨，然後也很有味道，拍照起來也是古色古香，寺院內商店後面還有種植一排的鹿角蕨，養的蠻美的很壯觀，非常值得參觀喔！', '1', '1', 1),
(17, '知卡宣森林公園', '花蓮知卡宣森林公園佔地十八公頃，原名南埔森林公園，以前為空軍的機場，歷經三任縣長及多位地熱心方人士的奔走聯繫下，民國八十九年起，獲得國防部同意，將此一荒廢營區闢為知卡宣森林公園。花蓮知卡宣森林公園內植滿桉樹等各種林木，保有森林的意象外，也為地方增加一難得的廣牟綠地。位在花蓮吉安鄉南埔地區的這塊最大綠地，在花蓮縣不斷規劃下，已為觀光休閒提供一處全新的據點，也為花蓮的觀光旅遊注入清新的活力。', '每年暑假小孩玩水樂園，園區內植物種類豐富，彩繪有花蓮縣內六族原住民族圓柱，就立在大門入口直走約50米處，入口右邊甕牆小徑跟橋別有風情，入口左側直走的廁所外觀似城堡也很特別，大門左右兩側圍牆，目前台灣欒樹盛開，黃花沿著牆灑落滿地很是美麗！', '4', '3', 1),
(18, '池南國家森林遊樂區', '位於花蓮縣壽豐鄉池南村，即花蓮市西南方鯉魚潭池畔的山坡上、木瓜溪下游，佔地約5公頃，分為池南區及木瓜山事業區第98林班兩地。池南國家森林遊樂區屬花蓮林管處管轄，配置有台灣林業陳列館，展示林業經營之過去和未來，以及早期伐木、造林、集材、運材之相片和機械設備，此外另有蹦蹦車鐵道及幻燈多媒體簡介等，供遊客觀賞使用。\r\n', '合散步、放空、欣賞自然風景的地方。此處有兩個室內展示館，林業陳列館有兩層樓，主要展示臺灣森林資源與當地常見動植物，另一個則是展示林業歷史相關器械。\r\n園內步道相當好走，也有部分是無障礙步道，步道周圍的蝸牛種類蠻多，仔細觀察可以發現不少驚喜！', '5', '3', 1),
(19, '雲山水', '雲山水自然生態農莊位於花蓮壽豐鄉，花東縱谷中央山脈及海岸山脈之間，占地約24公頃，其中夢幻湖面積大約4公頃。湛藍的夢幻湖水來自中央山脈，水質清澈，在陽光照射下產生動人景致，加上兩旁雲山水美景倒映在湖面上，如夢似幻的美景，讓它有「夢幻湖」之稱。此外，雲山水自然生態園區種植許多植物，如椰林大道、棕櫚樹、落羽松、鳳凰木和水生植物，還有大片青翠草地及不少野生動物，將此處打造成一個令人驚豔的美麗社區。', '雲山水：這個地方正如他的名字，壯闊的山、漂亮的水、藍色的雲，一個非常壯闊漂亮的山水地，尤其湖邊大面積的落羽松，可以想像秋冬的美麗，現階段配合湖面綠色昂揚愜意，綠色的湖水在陽光下超級美景。跳石可以拍出非常好的瀑布石效果。', '5', '3', 1),
(20, '鯉魚潭', '鯉魚潭位於花蓮縣壽豐鄉池南村鯉魚山下，是花、東、宜三縣境內最大的內陸湖泊，距花蓮市約18公里，為花蓮縣觀光地標之一，老一輩人稱為『大陂』，阿美族人則稱為巴鬧；鯉魚潭南北最長處約2公里，東西最寬處約1.5公里，面積約為104公頃；鯉魚潭水最深處達15公尺，終年清澈不涸，其水源自潭心湧出，更是鯉魚潭奇妙的地方。\r\n', '景色秀麗的大型湖泊，周圍環繞著單車道和山脈，適合從事划船等水上運動。', '5', '1', 1),
(21, '白鮑溪', '位於壽豐鄉鯉魚潭的上游，是鯉魚潭重要的水源之一，從中央山脈傾洩而出的溪水終年清澈，再加上未受破壞，每至夏季透涼的溪水總吸引民眾戲水嘻笑聲迴盪於山谷間與夏蟬競鳴,一付夏日自然樂園景象，是花蓮在地人的私房景點。白鮑溪嚴格說起來算荖溪上游，此處是「台灣翠玉」礦的產地，河床中富涵有各種閃著綠色和紫色的石頭，就是聞名的「豐田玉」和「蛇紋石」，目前到這兒的遊客，除了在河床上盡情戲水時又能一邊在河床中挖寶，撿取喜歡的石頭。白鮑溪自行車生態步道，全長7.3公里景致怡人，結合自行車、登山步道、溯溪、生態及文化等休閒活動，是時下簡單生活的休閒旅遊方式，單車族一定不能錯過。', '真地方真的很棒，有很多的魚水深也夠深，要跳水潛水都很棒！', '5', '1', 1),
(22, '大農大富森林園區', '大農大富平地森林園區為臺灣首座平地森林園區，擁有豐富的自然生態，春天賞花、夏季賞螢與賞鳥、秋冬賞楓，一年四季皆有不同風采。園區內設有北環、南環自行車道，讓人能夠邊騎單車邊吸收芬多精，幸運時還可以看見環頸雉出來覓食，聽著蟲鳴鳥叫，愜意騎車享受森林浴。\r\n', '這裡免收門票，佔地廣闊，視野開闊，有一整片的藍天綠地，能一起大口森呼吸，還有北環、南環自行車道，可以租借一般或電動腳踏車，認識、親近這裡，別忘了拍照留念！\r\n園區內自然生態豐富多樣，夜晚無光害、無污染。', '6', '3', 1),
(23, '馬太鞍濕地', '花蓮光復鄉的馬太鞍濕地，是一處湧泉不絕的天然沼澤濕地，並孕育出豐富的鳥類、蛙類、底棲性魚類等多樣化自然生態。還能體驗獨特的巴拉告生態捕魚法，讓人不僅可以上一堂生態課，還能嘗到現撈的魚蝦、鹽烤吳郭魚，以及特有的石頭火鍋，來一場原民美食饗宴。', '很有深度的一個地方，硬體有些地方需要維修補強一番，整體富有教育性，裡面生態豐富，有溪流可以玩水抓小魚小蝦，水質清澈乾淨，風景很優美，戰地非常廣闊。', '6', '3', 1),
(24, '吉利潭', '四周青山環繞，一汪清潭宛若山間明月，帶點中國風的拱橋倒映在水面上，走在環潭步道上欣賞眼前美景、認識水中生物，為旅人帶走都市的喧囂，這就是隱藏在光復馬錫山下的山中秘境──吉利潭，也是花蓮近期新興景點，擁有戲水道、生態浮島等設施，為炎炎夏日親子戲水、踏青與認識自然生態的好去處。', '原以為吉利潭只是灌溉小水池，進入步道發現裡面有四座拱形橋及涼亭，山巒映湖水美極了，各種角度都漂亮，走台九線到台東，可以來順遊。', '6', '3', 1),
(25, '石梯坪', '石梯坪擁有經風力和海水雕刻而成的特殊岩岸風景，潮間帶上豐富的自然生態資源：螃蟹、海星、海參、寄居蟹、色彩斑斕的魚群，等待觀察力敏銳的人來一探奧秘。夜晚在海蝕平台上方的石梯坪露營區搭營，隔天就能在營帳前迎接美麗的晨曦，看清晨的陽光破雲而出將海面映照得金黃燦爛。', '一個不可思議的地方。人們可以欣賞到太平洋壯麗的景色，以及獨特的岩石侵蝕和海浪衝擊。在陽光充足的日子遊覽(帶上充足的防晒用品和充足的水)，可以看到最好的風景。離花蓮或台東約1.5小時車程，可乘汽車或巴士前往。', '7', '3', 1),
(26, '親不知子天空步道', '步道的地點位在臺11線新豐隧道旁，也是隧道未通車前的舊臺11線上，這裡有個響亮卻略顯孤寂的名字「親不知子斷崖」。早年是穿越斷崖的原住民步道，與廢棄的新磯隧道平行，但古道在1971年左右就荒廢沒有使用，近期在豐濱鄉公所的努力下，重新打造全新的天空步道，並於附近規劃大型停車場和公園綠地，方便民眾休憩遊玩。\r\n天空步道入口有磚造的小燈塔，步道分成二段，一段是原有古道透過水泥加固、拓寬，另一段垂直懸空的懸崖，則以鋼骨跟強化玻璃興建；步道的長度約150公尺，垂直海拔高度約40公尺，其中有20公尺路段採用強化透明玻璃棧\r\n', '棒極了的景觀，可惜步道很狹窄，拍照要請注意頭上的岩石。', '7', '3', 1),
(27, '大石鼻山步道 ', '大石鼻山步道位於花蓮縣豐濱鄉磯崎海濱遊憩區，是條總長約910公尺的登山步道，走完全程大約需要1小時，步道大部分為枕木及石頭階梯，沿途可見野百合、七里香、刺蔥等豐富的植物及各種昆蟲，走到最高點還可全覽整個磯崎海灣，是條適合親子同行的自然生態步道。\r\n\r\n', '不愧是東海岸最美停靠站之一，我們從山腳下的涼亭及旁邊的小沙灘，或者附近空地一樣可以欣賞到大鼻石山的美麗，向北望去是綿延不絕的海岸山脈線，向南看去景觀也很不錯，向東則面對浩瀚無垠的太平洋，在藍天白雲之下，配合一些裝置藝術，也是可以找到不少美麗的拍攝點。', '7', '3', 1),
(28, '新社梯田', '從宜蘭南遷的噶瑪蘭人，到花蓮豐濱鄉建造新聚落，因而村落名為新社，在噶瑪蘭語新社是「萬物養生之地」。在宜蘭習慣耕作的居民仍念念不忘稻米的滋味，於是在臨海台地上開闢梯田、種植稻米，成為現在稻田連接著海的特殊景象，又稱之為海稻米梯田。\r\n 一年一收的新社海梯田為全台最大的林海梯田；梯田背倚海岸山脈，毗鄰海岸，遙望地平線可見其呈鋸齒狀朝海邁進，稻田一端建有木棧步道，民眾可以沿著步道散步賞景。', '翠綠的稻田配上海風吹很有宮崎駿風之谷的感覺，而且稻田後面就是湛藍的太平洋非常的美路邊也非常好停車，超推的一個點，等到稻子成熟變成金黃色的一定會更美。', '7', '3', 1),
(29, '月洞', '月洞位於花蓮縣豐濱鄉，在石梯坪之南距港口村約1公里，是一個天然的鐘乳石洞穴，也是港口部落原住民眼中的一塊淨地；洞中有積水成池大約5公尺，湖水會隨著月亮盈虧而漲落，所以稱作「月洞」，又名「月井」；傳說湖中有許多鱸鰻，有一隻重達10餘公斤是所謂的千年鰻', '觀賞到珍貴的鐘乳石和洞內棲息的蝙蝠，確實令人欣喜。', '7', '3', 1),
(30, '瑞穗牧場', '以鮮奶暢銷到全臺各地的瑞穗牧場，有著餐飲部、露天咖啡座等設施，來到這裡不僅可喝到產地現榨、現煮的鮮奶，還能看見成群的乳牛或鴕鳥悠閒漫步在草地上，與孩子一起拿牧草親手餵食牠們，而遼闊的園區可以讓小朋友盡情玩耍、跑跳，是個適合親子同遊的景點。\r\n', '沒有牧場的臭味，卻又清風徐徐，吃著純牛奶冰淇淋靜靜觀賞四周，如沐浴綠色森林，口中心靈都洗禮。', '8', '3', 1),
(31, '吉蒸牧場', '來到鮮奶產地的瑞穗，當然不容錯過到牧場品嘗鮮榨牛奶的滋味！在瑞穗共有兩間牧場，一處是廣為人知的瑞穗牧場，另一處便是位在秀姑巒溪泛舟遊客中心旁的吉蒸牧場，園區內擁有販售部、餐廳、可愛動物園區，少了一分喧囂氣息的牧場，讓旅人可以多享受一份清淨，靜靜遠眺秀姑巒溪，或是在溪畔旁漫步。', '鮮乳冰淇淋超級好吃！！！可愛動物區還蠻乾淨的都沒有聞到異味！', '7', '3', 1),
(32, '秀姑巒溪', '秀姑巒溪發源於秀姑巒山，全長103公里，全年河水豐沛，為臺灣東部最大的河川。河道迂迴，流經瑞穗切穿海岸山脈，形成峽谷與曲流；每年五月到十月豐水期，可讓遊客體驗泛舟活動的刺激與快感。秀姑巒溪泛舟以奇美為中心，大致可分成二段，前段的航程水流平穩，是培養默契及訓練技術最佳航段。後段水流非常湍急，漩渦、險灘不斷，不必划槳就能前行，但要小心控制方向，否則容易翻船。 \r\n由瑞穗大橋到長虹橋出海口，整個航程約3~4小時，長22公里的河段中，由於河床達65公尺的落差，間有二十餘處險灘、激流，有長有短，泛舟其間刺激無比，是本島最佳的泛舟勝地。出長虹橋後溪面豁然開闊，皓白的石塊羅列水面，有「秀姑漱玉」之稱。每年6-7月所舉行的秀姑巒溪泛舟觀光季，已成為最重要的泛舟活動，如果你不畏危險，有冒險犯難的精神，可來此享受另類刺激體驗。', '天很藍水很涼，風景無敵漂亮', '7', '1', 1),
(33, '奇美部落', '奇美部落位在花蓮瑞穗區大磯山山腰處，依傍著秀姑巒溪。奇美是阿美族「秀姑巒阿美」的大本營，保存了完整的傳統文化。從支撐整個部落運作的「年齡階級制度」，到各式祭儀、植物應用、生活智慧及飲食都被族人傳承至今，堪稱是一座「活的博物館」！如果想要深入認識阿美族的傳統文化，那奇美部落絕對是不能錯過的首選喔！', '幽中取静、異異不同生活、無心機的好客招呼、全然不同都市。', '8', '2', 1),
(34, '新社部落', '新社部落在花蓮縣豐濱鄉，是噶瑪蘭人較為聚集的地方。在歷史上，噶瑪蘭人經歷不少磨難，迫遷各地，在不斷的努力之下，終於得以正名，並持續復興文化與傳承。相對於東海岸其他部落，新社部落顯得較為內斂含蓄。噶瑪蘭的文化特徵，也讓新社部落與眾不同。', '很棒的原鄉體驗！', '7', '2', 1),
(35, '靜浦部落', '靜浦，阿美族語稱「Cawi‘」(札位)，意指山坳裡的平地。靜浦的地理位置在花蓮縣豐濱鄉，得天獨厚的地理位置，讓人可以一次飽覽山、海、河、島的美景。也因為部落位置正好落在秀姑巒溪出海口畔，而醞釀出獨特的河口文化。在深夜、凌晨到出海口利用傳統的三角網捕撈，與海浪搏鬥是族人的日常，一盞一盞頭燈在出海口閃爍，絕對是其他地方看不到的奇妙美景喔！', '風景優美，可以了解到當地文化和體驗部落的生活方式。', '7', '2', 1),
(36, '馬太鞍部落', '馬太鞍部落（阿美語：Fata\'an，或作vata\'an），是台灣花蓮縣光復鄉馬錫山山腳下的一個阿美族原住民部落，亦是阿美族最大的部落之一，現今以大馬太鞍(大同、大馬、大平、大華村)為部落的中心。\r\n「馬太鞍」由來為馬太鞍族人的祖先輾轉遷來此地，發現長滿「樹豆」（阿美語：Fata\'an），當地的樹豆成為族人的主食。\r\n樹豆可以常保不壞，又容易生長，成為馬太鞍人的最愛，常常帶在身上，到處種植，使得附近遍布樹豆，因此就通稱此地為馬太鞍。', '從深入探索馬鞍部落文化，到親手捕魚，用石頭火鍋煮飯，每一個體驗都充滿著自然原生的滋味，拋開方便已久的城市習慣，以最原始的方式過生活，會發現其實從簡單的事物中也能夠獲得大大的快樂。', '6', '2', 1),
(37, '太巴塱部落', '位在光復鄉的太巴塱部落，在阿美族語有螃蟹的意思，因此在部落中處處可見生動的木雕螃蟹圖騰。這裡不僅保留阿美族傳統家屋、部落刀槍、酒皿等文物，還是全臺唯一生產紅糯米的產地，如此珍貴的部落傳統糧食，讓太巴塱部落成立紅糯米文化館、舉辦紅糯米文化祭，給旅客體驗祭典的熱鬧，以及品嘗部落風味料理。', '太巴塱部落阿美族文化發祥地，走一趟尋根之旅，青山環繞空氣新鮮！', '6', '2', 1),
(38, '水璉部落', '位於壽豐鄉台 11 線海岸公路水璉村的水璉部落屬於海岸阿美，這個古老部落從前叢林茂密，水蛭很多阿美族人特稱此地為「吉偉帝庵」(ciwdiyan)，漢人取其諧音稱為「水璉」。代表部落飲食文化的為阿里鳳鳳及山龍眼；以林投葉編織成袋狀裝入白米蒸熟即為阿里鳳鳳，是男子出外農耕，由老婆為出外的老公準備攜帶方便的餐點；又稱情人便當，阿里鳳鳳近年來也透過水璉部落發展為飲食文化體驗活動。\r\n番龍眼因當地適合其生長，便在水璉部落繁衍期族群，與部落的生活形成緊密的關係，更形成了傳說故事。\r\n', '以後有機會每年都想去，好山好水好濃好濃人情！', '5', '2', 1),
(39, '撒固兒部落', '相傳，撒固兒部落，是古代撒奇萊雅六社當中，勢力量龐大的部落。清治時代，部落族人們種刺竹於生活區域外圍，形成自然保護屏障，這似竹子編織而成的鳥窩，而稱之為竹窩宛社。據說撒奇萊雅人登陸的據點，是美崙山腳，其位於花蓮市西北方、靠近美崙溪上游水源地的山腳。抗清失敗後，被政府改稱為國福里。\r\n一八七八年，發生達固部事件，是清軍入侵臺灣，為剿滅東部撒奇萊雅族部落的一場戰役，而其倖存族人藏身於阿美族，展開隱姓埋名生活，從市中心遷移到美崙山腳下的國福里。直到2007年撒奇萊雅族完成正名運動，並開始田調傳統歌舞、恢復男性年齡階級(八年為一階)，及傳統的歲時祭儀。\r\n撒固兒部落，目前位於花蓮市國福社區，其部落命名由來，是因為當時部落種植許多茄冬樹，而茄冬樹族語是Sakur，因此命名為之。於戰役後，族人流離四處，又因溪水暴漲大淹水，從市中心往山腳下搬遷，而來到現址。人口組成仍以撒奇萊雅族為主，少數噶瑪蘭族、太魯閣族及阿美族。', '品嚐各式超乎想像的天然野菜料理，也可動手利用野菜製作傳統的”便當”，不論哪款旅行方式，都值得喜歡旅遊的民眾，前來體驗。', '3', '2', 1),
(40, '北回歸線標誌公園', '北回歸線標誌公園位在瑞穗舞鶴台地，白色日晷造型的北回歸線標誌，是旅客經過舞鶴台地時必拍照的景點，而公園內周遭設有巨大茶壺造型的裝置藝術、廁所、休憩區，在公園兩側的木製迴廊中，設有許多跟天象、氣候、節氣、地球科學等相關的解說牌示，夏日時這裡還會舉辦夏至235的活動，吸引人潮前來探訪吃美食、看表演。', '舞鶴台地的招牌景點，許多遊覽車必定造訪，遊客時常爆滿，入口處的大茶壺是最佳拍照位置，稍微往上走就是最具特色的北回歸線造景，附近有很多茶行，可以逛逛購買伴手禮。', '1', '1', 1),
(41, 'c', 'c', 'c', '1', '1', 0),
(42, 'c', 'c', 'c', '1', '1', 0),
(43, 'j', 'j', 'j', '1', '1', 0),
(44, 'h', 'h', 'hdbdd', '1', '1', 0),
(45, 'd', 'd', 'd', '1', '1', 0),
(46, 'f', 'f', 'f', '1', '1', 0),
(47, 'd', 'd', 'd', '1', '1', 0),
(48, 'd', 'd', 'd', '1', '1', 0);

-- --------------------------------------------------------

--
-- Table structure for table `viewpoint_img`
--

CREATE TABLE `viewpoint_img` (
  `id` int(6) UNSIGNED NOT NULL,
  `viewpoint_id` int(5) NOT NULL,
  `img_src` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `viewpoint_img`
--

INSERT INTO `viewpoint_img` (`id`, `viewpoint_id`, `img_src`) VALUES
(1, 1, '清水斷崖01.jpg'),
(2, 1, '清水斷崖02.jpg'),
(3, 1, '清水斷崖03.jpg'),
(4, 2, '崇德海灘01.jpg'),
(5, 2, '崇德海灘02.jpg\r\n'),
(6, 3, '崇德瑩農場01.png'),
(7, 3, '崇德瑩農場02.jpg'),
(8, 4, '翡翠谷01.jpg'),
(9, 4, '翡翠谷02.jpg'),
(10, 5, '三棧溪02.jpg'),
(11, 5, '三棧溪03.jpg'),
(12, 6, '慕谷慕魚01.jpg'),
(13, 6, '慕谷慕魚03.jpg'),
(14, 7, '太魯閣01.jpg'),
(15, 7, '太魯閣02.png'),
(16, 7, '太魯閣03.png'),
(17, 8, '七星潭01.jpg'),
(18, 8, '七星潭02.jpg'),
(19, 8, '七星潭05.jpg'),
(20, 9, '四八高地03.jpg'),
(21, 9, '四八高地04.jpg'),
(22, 9, '四八高地05.jpg'),
(23, 10, '曼波海灘02.jpg'),
(24, 10, '曼波海灘03.jpg'),
(25, 11, '東大門夜市01.jpg'),
(26, 11, '東大門夜市03.jpg'),
(27, 12, '花蓮文創園區02.jpg'),
(28, 12, '花蓮文創園區02.jpg'),
(29, 13, '松園別館04.jpg'),
(30, 13, '松園別館04.jpg'),
(31, 14, '太平洋公園02.jpg'),
(32, 14, '太平洋公園03.jpg'),
(33, 14, '太平洋公園06.jpg'),
(34, 15, '台開心農場02.jpeg'),
(35, 15, '台開心農場04.jpg'),
(36, 15, '台開心農場03.jpeg'),
(37, 16, '台開心農場09.jpeg'),
(38, 16, '台開心農場09.jpeg'),
(39, 16, '台開心農場09.jpeg'),
(41, 17, '知卡宣森林公園01.jpeg'),
(42, 17, '知卡宣森林公園04.jpeg'),
(43, 17, '知卡宣森林公園02.jpeg'),
(44, 18, '池南森林園區01.jpeg'),
(45, 18, '池南森林園區03.jpeg'),
(46, 18, '池南森林園區04.jpeg'),
(47, 18, '池南森林園區07.jpeg'),
(48, 19, '雲山水03.jpeg'),
(49, 19, '雲山水07.jpeg'),
(50, 19, '雲山水08.jpeg'),
(51, 19, '雲山水06.jpeg'),
(52, 20, '鯉魚潭01.jpeg'),
(53, 20, '鯉魚潭04..jpeg'),
(54, 20, '鯉魚潭05.jpeg'),
(55, 20, '鯉魚潭06.jpeg'),
(56, 21, '白鮑溪01.jpeg'),
(57, 21, '白鮑溪04.jpeg'),
(58, 21, '白鮑溪07.jpeg'),
(59, 22, '大農大富平地森林園區01.jpg'),
(60, 22, '大農大富平地森林園區02.jpg'),
(61, 22, '大農大富平地森林園區03.jpg'),
(62, 23, '馬太鞍01.jpg'),
(63, 23, '馬太鞍02.jpg'),
(64, 23, '馬太鞍03.jpg'),
(65, 24, '吉利潭01.jpg'),
(66, 24, '吉利潭02.jpg'),
(67, 25, '石梯坪01.jpg'),
(68, 25, '石梯坪02.jpg'),
(69, 25, '石梯坪03.jpg'),
(70, 26, '親不知子04.jpg'),
(71, 26, '親不知子05.jpg'),
(72, 26, '親不知子07.jpg'),
(73, 27, '大石鼻山步道02.jpg'),
(74, 27, '大石鼻山步道03.jpg'),
(75, 27, '大石鼻山步道04.jpg'),
(76, 28, '新社梯田01.jpg'),
(77, 28, '新社梯田02.jpg'),
(78, 28, '新社梯田05.jpg'),
(79, 29, '月洞04.jpg'),
(80, 29, '月洞02.jpg'),
(81, 30, '瑞穗牧場01.jpg'),
(82, 30, '瑞穗牧場03.jpg'),
(83, 30, '瑞穗牧場02.jpg'),
(84, 31, '吉蒸牧場03.jpg'),
(85, 31, '吉蒸牧場04.jpg'),
(86, 32, '秀姑巒溪泛舟03.jpg'),
(87, 32, '秀姑巒溪泛舟04.jpg'),
(88, 32, '秀姑巒溪泛舟01.jpg'),
(89, 33, '奇美部落01.jpg'),
(90, 33, '奇美部落04.jpg'),
(91, 34, '新社部落01.jpg'),
(92, 34, '新社部落04.jpg'),
(93, 35, '靜浦02.jpg'),
(94, 35, '靜浦06.jpg'),
(95, 36, '馬太鞍部落03.jpg'),
(96, 36, '馬太鞍部落02.jpg'),
(97, 36, '馬太鞍部落01.jpg'),
(98, 37, '太巴塱部落02.jpg'),
(99, 37, '太巴塱部落05.jpg'),
(100, 38, '水璉部落02.jpg'),
(101, 38, '水璉部落01.jpg'),
(102, 39, '撒固兒部落01.jpg'),
(103, 39, '撒固兒部落02.jpg'),
(104, 39, '撒固兒部落03.jpg'),
(105, 40, '北回歸線標誌公園02.png'),
(106, 40, '北回歸線標誌公園01.png'),
(107, 41, '白鮑溪10.jpeg'),
(108, 41, '白鮑溪11.jpeg'),
(109, 42, '白鮑溪11.jpeg'),
(110, 43, '白鮑溪10.jpeg'),
(111, 43, '白鮑溪10.jpeg'),
(112, 44, ''),
(113, 45, ''),
(114, 46, ''),
(115, 47, ''),
(116, 48, '白鮑溪09.jpeg'),
(117, 48, '白鮑溪10.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guide`
--
ALTER TABLE `guide`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guide_language`
--
ALTER TABLE `guide_language`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `viewpoint`
--
ALTER TABLE `viewpoint`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `viewpoint_img`
--
ALTER TABLE `viewpoint_img`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `guide`
--
ALTER TABLE `guide`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `guide_language`
--
ALTER TABLE `guide_language`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=281;

--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `viewpoint`
--
ALTER TABLE `viewpoint`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `viewpoint_img`
--
ALTER TABLE `viewpoint_img`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;
--
-- Database: `tribe_db`
--
CREATE DATABASE IF NOT EXISTS `tribe_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tribe_db`;

-- --------------------------------------------------------

--
-- Table structure for table `guide`
--

CREATE TABLE `guide` (
  `id` int(3) UNSIGNED NOT NULL,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tribe` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `license` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro_title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `stars` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `journey_id` int(10) UNSIGNED NOT NULL,
  `selected_day` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `guild`
--

CREATE TABLE `guild` (
  `id` int(3) UNSIGNED NOT NULL,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tribe` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `license` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro_title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` varchar(50) NOT NULL,
  `rating` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `guild`
--

INSERT INTO `guild` (`id`, `name`, `tribe`, `language`, `license`, `banner`, `img`, `video`, `intro_title`, `intro`, `rating`, `avatar`) VALUES
(1, '瓦丹', '靜浦部落,新社部落', '中文', '華語導遊證照', '奇美部落大圖1.png\r\n', '奇美部落大圖1.png', 'https://www.youtube.com/embed/9viHdDVNNH0', '', '我是瓦丹', '5', ''),
(2, '瓦庫', '靜浦部落', '中文', '華語導遊證照', '奇美部落大圖1.png\r\n', '奇美部落大圖1.png', 'https://www.youtube.com/embed/9viHdDVNNH0', '', '我是瓦庫', '5', ''),
(3, '瓦庫2', '靜浦部落', '中文', '華語導遊證照', '奇美部落大圖1.png\r\n', '奇美部落大圖1.png', 'https://www.youtube.com/embed/9viHdDVNNH0', '', '我是瓦庫2', '5', ''),
(4, '瓦庫', '3,4', '中文', '華語導遊證照', '奇美部落大圖1.png\r\n', '奇美部落大圖1.png', 'https://www.youtube.com/embed/9viHdDVNNH0', '', '我是瓦庫', '5', ''),
(5, '瓦庫2', '3,4', '中文', '華語導遊證照', '奇美部落大圖1.png\r\n', '奇美部落大圖1.png', 'https://www.youtube.com/embed/9viHdDVNNH0', '', '我是瓦庫2', '5', ''),
(6, '瓦庫2', '3,4', '中文', '華語導遊證照', '奇美部落大圖1.png\r\n', '奇美部落大圖1.png', 'https://www.youtube.com/embed/9viHdDVNNH0', '', '我是瓦庫2', '5', ''),
(7, '瓦庫2', '3,4', '中文', '華語導遊證照', '奇美部落大圖1.png\r\n', '奇美部落大圖1.png', 'https://www.youtube.com/embed/9viHdDVNNH0', '', '我是瓦庫2', '5', '');

-- --------------------------------------------------------

--
-- Table structure for table `journey`
--

CREATE TABLE `journey` (
  `_id` int(5) UNSIGNED NOT NULL,
  `guide_id` int(5) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL,
  `name` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_time` tinyint(5) UNSIGNED NOT NULL,
  `price` int(5) UNSIGNED NOT NULL,
  `total_people` int(5) UNSIGNED NOT NULL,
  `journey_img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transportation` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `introname` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int(5) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL,
  `tribe_intro` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tribe` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `needtoknow` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amountRating` tinyint(5) UNSIGNED NOT NULL,
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `journey_img2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_img` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_img2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_img3` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_img4` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `journey`
--

INSERT INTO `journey` (`_id`, `guide_id`, `member_id`, `name`, `total_time`, `price`, `total_people`, `journey_img`, `location`, `transportation`, `introname`, `content`, `rating`, `status`, `tribe_intro`, `tribe`, `lang`, `needtoknow`, `amountRating`, `description`, `journey_img2`, `banner_img`, `banner_img2`, `banner_img3`, `banner_img4`) VALUES
(1, 0, 0, '半日漁獵生活體驗｜走進太陽的部落', 4, 1000, 0, '靜浦-竹筏漫遊.jpg', '花蓮縣豐濱鄉靜浦村3鄰140號', '自行前往', '<p>● 走進傳說中的太陽部落－靜浦部落</p>\r\n<p>● 零距離接觸太平洋特有的浪花蟹生態</p>\r\n<p>● 花蓮海岸旁的部落體驗，開啟豐富的半日漁獵生活</p>', '<p> ◥ 上午場-09：00 / 下午場-14：00 </p>\r\n<p> ◥ 花蓮靜浦部落集合 </p>\r\n<p> ◥ 開啟靜浦部落的半日漁獵生活體驗 </p>\r\n<p> ◥ 踏上膠筏，划向秀姑巒溪(約40分鐘) </p>\r\n<p> ◥ 岸邊找尋浪花蟹X八卦網捕魚體驗(約60分鐘) </p>\r\n<p> ◥ 部落神射手－射箭體驗(約40分鐘) </p>\r\n<p> ◥ 12：00 / 17：00 靜浦部落半日體驗結束 </p>', 5, 0, '<p>花蓮靜浦部落，一個洋溢熱血與熱情的太陽部落</p>', '靜浦部落', '中文，英文', '<p>- 此靜浦部落半日體驗因安排較多戶外活動體驗，較適合10歲以上孩童參加。</p>\r\n<p>- 請提早10~20分鐘前往靜浦部落集合。</p>\r\n<p>- 各項體驗活動時間會視現場執行狀況調整。</p>\r\n<p>- 活動為團進團出，一旦團隊已離岸，無法讓遲到者另行下水出航，亦無法退費。請特別注意勿遲到，以免影響自身權益 。</p>\r\n<p>- 靜浦部落半日體驗多為水上活動，易濺濕衣物，可多帶替換衣物以便現場更換。</p>\r\n<p>- 為顧慮您的安全，活動請遵從部落族人指示，以免發生危險或受傷。</p>', 20, '花蓮海岸旁的部落體驗，開啟豐富的半日漁獵生活', '半日漁獵生活體驗｜走進太陽的部落2.jpg', '靜浦部落1.jpg', '靜浦部落2.jpg', '靜浦部落3.jpg', '靜浦部落4.jpg'),
(2, 0, 0, '划竹筏·八卦網·射箭·追逐浪花蟹一日遊', 8, 1280, 0, '靜浦-追花逐浪花蟹.jpg', '花蓮縣豐濱鄉靜浦村3鄰140號', '自行前往', '<p>08:00 花蓮火車站或酒店出發</p>\r\n\r\n<p>09:30 靜浦部落</p>\r\n\r\n<p>12:00 午餐﹙自理﹚</p>\r\n\r\n<p>14:00~ 麻糬洞-新社梯田-大鼻石山步道-返回花蓮市區</p>\r\n', '<p>● 走進傳說中的太陽部落－靜浦部落</p>\r\n<p>● 在秀姑巒溪上一面體驗划竹筏的樂趣，一面欣賞沿途景色：優雅的長虹橋，背後層山疊翠，旁有幽靜的奚卜蘭島，前方是寬闊的太平洋，山、海、溪、島交織，伴著微風吹襲，黃昏時刻，還能望見純白的鷺鷥群飛過。</p>\r\n<p>● 俐落的收繩索、披掛外網、分開內網，抓好八卦網利用身體擺動用力將網撒出去。流暢的動作，可不是每個人都有辦法。靜浦的捕魚生活，八卦網是重要的一環，歡迎體驗漁民生活</p>\r\n<p>● 嚮往傳說中的神射手</p>\r\n<p>● 石門洞海岸地景，因此處海岸有海蝕洞，形狀如門才有此稱呼，當地人也俗稱此地為麻糬洞。位於台11 線旁石門遊憩區，從木棧道向海岸前行，因角度的關係，海蝕洞從特定方向看過去，像似從前出產過的「March」汽車，所以也被稱為「March 洞」，更因大導演馬丁．史柯西斯拍攝電影《沉默》在此取景而聲名大噪。嗎？到靜浦，放手一搏。拿起傳統弓箭，從上弓弦開始學習，對準標靶，測試看看自己有沒有當獵人的潛力。</p>', 5, 0, '花蓮靜浦部落，一個洋溢熱血與熱情的太陽部', '靜浦部落', '中文', '<p>★ 含專業教練導覽解說、活動費用(划竹筏、追逐浪花蟹二選一，參加其他活動則需另行報價)。</p>\r\n\r\n<p>★ 請穿著排汗快乾衣褲和運動鞋，擔心曬傷則以長袖、長褲為佳，並勿穿著棉質或牛仔褲等易吸水質料服裝。</p>\r\n\r\n<p>★ 若活動當天風浪狀況不佳，或遇豪大雨、打雷、風勢過大、颱風來襲等不可抗力之因素，基於安全考量，將視情況決定活動是否取消。</p>', 8, '在秀姑巒溪上一面體驗划竹筏的樂趣，一面欣賞沿途景色：優雅的長虹橋，背後層山疊翠，旁有幽靜的奚卜蘭島，前方是寬闊的太平洋。', '靜浦部落2.jpg', '靜浦部落5.jpg', '靜浦部落6.jpg', '靜浦部落7.jpg', '靜浦部落1.jpg'),
(3, 0, 0, '噶瑪蘭族文化體驗｜野菜採集文化漫步，飲食饗宴，香蕉絲工藝\r\n', 8, 1200, 0, '香蕉絲體驗.jpg', ' 花蓮縣豐濱鄉花東海岸公路(葛瑪蘭文化展示中心)', '自行前往', '<p>部落導覽→野菜採集體驗→風味餐→香蕉絲工</p>', '<p>跟著噶瑪蘭族族人，漫走在部落傾聽族人遷徙</p>', 5, 1, '座落在花蓮縣豐濱鄉，以噶瑪蘭族為主要族群', '新社部落', '中文', '<p>當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。</p>', 1, '跟著噶瑪蘭族族人，漫走在部落傾聽族人遷徙的歷史淵源！沿途認識部落常吃的野菜，體驗噶瑪蘭族融於生活中的野菜採集文化！', '新社部落2.jpg', '小湖船澳文化體驗（季節限定）.jpg', '封面裡-新社部落.jpg', '海人家2.jpg', '海人家.jpg'),
(4, 0, 0, '走進大海的部落', 12, 1200, 0, '新社部落藝術品.jpg', ' 花蓮縣豐濱鄉花東海岸公路(葛瑪蘭文化展示中心) ', '專車接送', '<p>跟著部落達人的腳步，一起來場小旅行吧！一邊走訪部落、一邊從分享的故 事中，踏上噶瑪蘭族歷史文化之旅，走入部落的文化展示中心，認識岩棺出土地，遙想新石器時代的神祕生活；接著徜徉在半島梯田的絕美風景裡，再聽族人補充 過去跨越磯崎、新社兩地，親不知子斷崖的感傷故事。</p>', '\r\n<p>09:00-10:30 花蓮火車站—新社部落\r\n\r\n<p>10:30-12:00【導覽】部落及藝術季作品\r\n\r\n<p>12:00-13:00 傳統風味午餐\r\n\r\n<p>13:00-15:00【部落體驗】香蕉絲工坊</p>\r\n\r\n<p>15:00-17:00【火堆論壇】族群裡的原生植物</p>\r\n\r\n<p>17:00-18:00 傳統風味晚餐</p>\r\n\r\n<p>18:00-20:00 新社部落—花蓮火車站</p>', 5, 1, '', '新社部落', '中文，英文', '<p>當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。</p>', 33, '跟著部落達人的腳步，一起來場小旅行吧！一邊走訪部落、一邊從分享的故 事中，踏上噶瑪蘭族歷史文化之旅，走入部落的文化展示中心，認識岩棺出土地，遙想新石器時代的神祕生活!', '1511056_509912942464471_5152166478911128497_n.jpg', '海部落1.jpg', '海部落2.jpg', '海部落3.jpg', 'P3201106-1024x768.jpg'),
(5, 0, 0, '紅糯米田野餐桌一日遊', 7, 1750, 0, '紅糯米田野餐桌.jpg', '台灣花蓮縣花蓮太巴塱部落', '專車接駁', '<p>太巴塱部落的寶石—紅糯米，是田野餐桌最耀眼的主題，意想不到的多變美味，將要驚艷你的味覺。圍著三角爐灶，在稻田間望山而坐，如同部落家家戶戶相聚談笑的情景。品嘗著飄香的傳統糯米飯，酒糟香蘭燻雞，還有野菜烹製而成的特色料理，更將在部落傳統歌謠中，親手搗麻糬。腳踏著土地的樸實感受，隨著阿美族的傳統文化，吃進嘴裡，感動進心裡。</p>\r\n', '\r\n<p>野菜市集尋寶：\r\n<p>跟著內行人逛市場，探訪太巴塱部落族人熟門熟路的食材採購處，全花蓮野菜最豐富多樣的光復市場，帶著滿滿好奇心，一起採買當季食材、聽野菜介紹。\r\n<p>阿美廚藝教室：\r\n<p>阿美廚藝教室讓你認識太巴塱部落與紅糯米的傳說故事，用傳統的烹調方式製作紅糯米捏捏飯，帶你品米，再教你創新的吃法將酒糟加入辣椒，層層疊疊，製作香味十足的紅糯米酒釀辣椒、以及將最新鮮的野菜從市場帶走\r\n<p>部落文化導覽：</p>\r\n<p>文化悠遠的太巴塱部落，在百年歷史的太巴塱國小即可窺知一二。除此之外，走訪kakitaan祖屋，了解昔日的信仰中心，以及傳統祭儀、社會結構，對太巴塱部落深入認識。</p>\r\n<p>傳統歌謠搗麻糬：</p>\r\n<p>吟唱採收紅糯米時的歌曲，透過歌謠，感謝上天賜予部落族人能夠豐收，以及對祖靈的敬意。在餐桌上，品嚐紅糯米手握飯時刻，就會獻上這首歌謠，在歌曲和享食間，與太巴塱部落傳統文化深刻連結，感受部落祖先代代相傳的部落紅寶石—紅糯米的可貴。）</p>\r\n', 4, 0, '蘊含著深刻文化內容的太巴塱部落，悠久的歷史展現在部落隨處可見的阿美陶、木雕、竹編、織布、傳統手工藝等作品，以及一年一度的豐年祭，這一部落盛事，從祭典前兩周就開始籌備，動員年齡階級，傳承文化內涵。太巴塱部落現今不僅以豐厚文化聞名，復耕有成的紅糯米，更是耀眼紅寶石，期望這一營養或文化意義兼備的美味食物，可以走進更多人的廚房。', '太巴塱部落', '中文', '<p>部分活動將提供含酒精類飲品，如有不適飲酒者，請自行斟酌飲用。</p>\r\n<p>若遇天候不佳或不可抗拒之因素，本公司保有取消或變更行程的權利。並於前1天的20:00於粉絲專頁公佈活動是否取消及後續處理方法。</p>\r\n<p>行程所載明之時間僅供參考，因路況行程順序或時間將視實際情況調整。</p>\r\n<p>請於規定時間內準時集合，行程中如因個人因素私自脫隊或集合不到，本公司不予退費。</p>\r\n<p>車輛依當日人數分配，現場自由選位入座，無法事先指定座位，敬請見諒。</p>\r\n<p>遊客填寫報名表時，請務必填寫真實中文姓名及身分證，以便保險。</p>\r\n<p>參加者請攜帶個人身份證、健保卡等證件。</p>', 6, '太巴塱部落的寶石—紅糯米，是田野餐桌最耀眼的主題，意想不到的多變美味，將要驚艷你的味覺。圍著三角爐灶，在稻田間望山而坐，如同部落家家戶戶相聚談笑的情景。', '1909161444231259632768.jpg', '970c7824b9774e28abe0d5cc28fb2120.jpg', '2009040534151088303867.jpg', '2009040430191730145229.jpg', '2009040507345371714260.jpg'),
(6, 0, 0, '尋訪太陽的故鄉半日遊', 4, 850, 0, '尋訪太陽的故鄉半日遊.jpg', '花蓮縣太巴塱部落', '自行前往', '<p>在地原住民導覽，帶你認識太巴塱部落</p>\r\n<p>了解阿美族傳統的茅草屋、生活器具</p>\r\n<p>拜訪砂荖古井、Saksakay 部落遺址</p>\r\n<p>帶回一瓶自己釀的紅糯米釀酒和親友分享！</p>\r\n<p>享用道地豐富的原住民風味餐！</p>', '<p>部落文化導覽\r\n<p>於當地人興建的「太巴塱周廣輝生活文化館」，了解阿美族傳統的茅草屋、生活器具\r\n<p>參觀具有 300 年以上歷史的砂荖古井、Saksakay 部落遺址，了解千年古屋的搭建方式</p>\r\n\r\n<p>創意 DIY 體驗—紅糯米釀酒製作 DIY</p>\r\n<p>用最能代表太巴塱阿美族文化農作物—在地種植的 「紅糯米」，釀出獨特口感的酒，帶回家與親友分享！</p>\r\n\r\n<p>火的饗宴 - 風味體驗餐</p>\r\n<p>餐點以黑糯米雞油飯為主食，香草烤雞為主餐、配上鹹豬肉、野菜、時令青菜等，和部落人一起享用最道地的部落風味餐</p>', 3, 1, '太巴塱位於花蓮縣光復鄉，是一處古老的阿美族部落，這裡生活著一群太陽 “Ina” 的子民，是目前台灣最大、人口最密集的原住民部落。一趟 4 小時的半日遊，將帶你認識阿美族早期原始的文物，體驗部落人的原始情感，更棒的是，品嚐最道地豐盛的阿美族風味餐！', '太巴塱部落', '中文，英文', '<p>體驗時間：4 小時，依現場狀況為主 活動對象：皆可， 12 歲以下孩童不能自行參與活動，需家長一同參予。</p>', 34, '將帶你認識體驗部落人的原始情感，感受阿美族歌舞的熱情，更棒的是，品嚐最道地豐盛的阿美族風味餐！\r\n在這裡和部落裡的人互動，不僅可以享受島內的文化交流，更能感受到他們對於部落深厚的情感。', '43hAOlgk50VYKuJe9KVdrw_1920.jpg', '_CED4hVxWPEAWApAwoQMuw_1920.jpg', 'F5lTjy3v28CvgKIdHTut2Q_1920.jpg', 'tvobRQWzkNcZXYwiCnpbUw_1920.jpg', 'MdyAmERMpG9Q3HHuZrShMA_1920.jpg'),
(7, 0, 0, '吉籟獵人學校[半日遊]', 8, 1200, 0, '射箭.jpg', '花蓮縣壽豐鄉水璉路179號', '自行前往', '<p>半日遊行程：部落導覽→草編頭冠→射箭→原民舞蹈文化體驗→風味餐 </p>   ', '<p>來到吉賴獵人學校展現你的獵人魂，遵循祖先們入山前的祈福儀式，跟著獵人們認識常用植物，了解植物的特性及各種運用方式。並在獵人們的教導下利用植物學會阿美族的編繩技巧及野外求生的生火技巧，當一位真正的野外獵人！</p>', 3, 0, '淳樸、可愛，在美人山的懷抱之中，悠閒的放牧，與山海共生的耕耘漁獵，在水璉，安居耕獵，閑居遊藝，充沛的生活能量，無限大。', '水璉部落', '中文，英文', '<p>★含專業教練導覽解說 ★請穿著排汗快乾衣褲和運動鞋，擔心曬傷則以長袖、長褲為佳，並勿穿著棉質或牛仔褲</p>', 23, '學會如何用椰子葉製作代表吉籟獵人學校精神象徵及文化意涵的勇士頭編！拿出你的獵人魂，在專業教練正確射箭指導下，成為半日獵人，最後在歡樂的歌聲、輕快的腳步，跟著獵人們一起跳支阿美族的舞蹈吧！', '關於吉籟獵人學生.jpg', '獵人餐.jpg', '207E4EBF-F16D-4269-910B-83B6B6800E7D.jpg', 'unnamed.jpg', '26106.jpg'),
(8, 0, 0, '獵人體驗｜我和浪花蟹有約 （季節限定）', 12, 2400, 0, '浪花蟹.jpg', '花蓮縣壽豐鄉水璉路179號', '自行前往', '<p>一日遊行程：驛站導覽→獵人體驗→獵人餐→浪花蟹體驗→草編體驗→原民舞蹈文化體驗 </p>', '<p>來到吉賴獵人學校展現你的獵人魂，遵循祖先們入山前的祈福儀式，跟著獵人們認識常用植物，了解植物的特性及各種運用方式。並在獵人們的教導下利用植物學會阿美族的編繩技巧及野外求生的生火技巧，當一位真正的野外獵人！</p>', 4, 1, '淳樸、可愛，在美人山的懷抱之中，悠閒的放牧，與山海共生的耕耘漁獵，在水璉，安居耕獵，閑居遊藝，充沛的生活能量，無限大。', '水璉部落', '中文，英文', '<p>當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。</p>', 5, '一起在吉賴獵人學校展現你的獵人魂及海浪魂。', '浪花蟹.jpg', '獵人2.jpg', '獵人餐.jpg', '浪花蟹22.jpg', 'liyulake_edt.jpg'),
(9, 0, 0, '奇美部落深度旅遊{一}', 5, 1000, 0, '河邊撒網體驗01.jpg', '奇美部落', '自行前往', '<p>奇美文化導覽（祭典文化、生活文化導覽）→</p>\r\n<p>傳統家屋初體驗（內部解說）→</p>\r\n<p>享用部落風味餐→介紹秀姑巒溪→</p>\r\n<p>Misukap（摸蝦）收蝦籠→</p>\r\n<p>認識麥飯石、撿麥飯石→</p>\r\n<p>製作Cifar（傳統器皿）→</p>\r\n<p>體驗烹煮石頭火鍋→賦歸</p>', '<p>旅遊時間：若9:00抵達奇美部落～14:00賦歸</p>\r\n                    <p>若10:00抵達奇美部落～15:00賦歸\r\n                  （以此類推）</p>', 5, 1, '山谷裡隱蔽的現代桃花源 整個奇美部落 是一座活的博物館', '奇美部落', '中文，英文', '<p>- 此半日體驗因安排較多戶外活動體驗，較適合10歲以上孩童參加。 - 請提早10~20分鐘前往部落集</p>', 7, '奇美部落的風味餐飲，採預約制，新鮮在地食材經過巧手烹飪，在傳統阿美族飲食中加入現代創意，成為奇美部落的特色風味餐。', 'Filedata635981526343181263.jpg', 'Filedata635983842180724820.jpg', 'Filedata635981525569731904.jpg', 'Filedata635983820160038143.jpg', 'Filedata635981526400901364.jpg'),
(10, 0, 0, '奇美部落深度旅遊{二}', 8, 900, 0, '採箭筍06.jpg', '奇美部落', '自行前往', '<p>奇美文化導覽（祭典文化、生活文化導覽）</p>\r\n<p>→傳統家屋初體驗（內部解說）</p>\r\n<p>→享用部落風味餐→介紹秀姑巒溪→</p>\r\n<p>Misukap（摸蝦）收蝦籠→</p>\r\n<p>認識麥飯石、撿麥飯石→製作Cifar（傳統器皿）→體驗烹煮石頭火鍋→賦歸</p>', '<p>旅遊時間：若9:00抵達奇美部落～14:00賦歸</p>\r\n                    <p>若10:00抵達奇美部落～15:00賦歸\r\n                   （以此類推）</p>', 3, 1, '山谷裡隱蔽的現代桃花源 整個奇美部落 是一座活的博物館', '奇美部落', '中文', '當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。', 25, '沿途解說奇美故事、解說秀姑巒溪生態、撒網、抓蝦、野炊、石頭火鍋、奇美御飯團便當、奇美冰涼萬歲飲品，上岸後盥洗、品嚐部落風味餐、傳統屋體驗、部落文化導覽...等。\r\n詳細行程請見：奇美水上思路詳細行程', 'Filedata635981527821595860.jpg', 'Filedata635983842690221715.jpg', 'Filedata635981527244550846.jpg', 'Filedata635981526062380770.jpg', 'Filedata635983820160038143 (1).jpg'),
(11, 0, 0, '馬太鞍水漾濕地樂', 6, 888, 0, '馬太鞍濕地生態旅遊.jpg', '馬太鞍休閒農業區', '專車接駁', '09:00-09:30花蓮火車站→大農大富花海→原住民風味餐→馬太鞍濕地生態文化導覽→水漾農田體驗→種子DIY體驗→賦歸', '馬太鞍休閒農業區位於花蓮縣光復鄉馬錫山腳下，是一處湧泉不絕的天然沼澤濕地，面積廣達12公頃，並孕育出豐富的鳥類、蛙類、底棲性魚類等多樣化自然生態，來到這裡一定要好好了解這塊濕地的生態及文化，除了濕地導覽、水漾農田體驗，也安排了種子diy體驗及教遊客創造屬於自己獨有的工藝品。一二月期間更逢大農大富平地森林園區－花東最大花海花季期間，是絕對不可錯過的景點，適合親子旅遊、騎腳踏車踏青。', 2, 1, '馬太鞍部落（阿美語：Fata\'an，或作vata\'an），是台灣花蓮縣光復鄉馬錫山山腳下的一個阿美族原住民部落，亦是阿美族最大的部落之一，現今以大馬太鞍(大同、大馬、大平、大華村)為部落的中心。[1]。「馬太鞍」由來為馬太鞍族人的祖先輾轉遷來此地，發現長滿「樹豆」（阿美語：Fata\'an），當地的樹豆成為族人的主食。樹豆可以常保不壞，又容易生長，成為馬太鞍人的最愛，常常帶在身上，到處種植，使得附近', '馬太鞍部落', '中文，英文', '部分活動將提供含酒精類飲品，如有不適飲酒者，請自行斟酌飲用。 若遇天候不佳或不可抗拒之因素，本公司保', 33, '來到馬太鞍休閒農業區一定要好好了解這塊濕地的生態及文化，除了濕地導覽、水漾農田體驗，也安排了原住民頭飾diy與舞蹈體驗。', '馬太鞍圖片1.jpg', '流蘇前裙.jfif', '綁腿褲.jfif', '鈴鐺.jfif', '頭飾.jfif'),
(12, 0, 0, '秋遊壽豐馬太鞍', 24, 2988, 0, 'Palakaw」巴拉告生態捕魚法.jpg', '花蓮壽豐鄉', '專車接送', '第一天\r\n\r\n09:00-09:30花蓮火車站→立川漁場摸蜆兼洗褲→特色午餐→漫遊生態園區→雞母狗仔手作體驗→聽青蛙說故事→迎賓餐→壽豐住宿~晚安\r\n\r\n第二天\r\n\r\n健康早餐→瑪布隆農場導覽解說→黑金茶DIY→在地風味餐→馬太鞍溼地導覽解說→種子DIY體驗活動→賦歸', '結合壽豐休閒農業區與馬太鞍休閒農業區（光復）先帶您到立川漁場摸蜆兼洗褲，再一起漫遊壽豐落羽松秘境，紹介多種復育成功的多種蛙類，聆聽大自然的交響樂，並體驗融入「珍惜」的教育意義，結合在地食材製作的雞母狗仔手作DIY，造型口味多變化。\r\n\r\n第二天再到馬太鞍體驗黑金茶DIY，走訪濕地了解在地文化，「種子生態館」目前收藏了近百種種子，除了透過解說而認識食物保種概念外，也教您認識種子，利用各式各樣的種子創作屬於自己的可愛小擺飾～\r\n\r\n\r\n', 3, 1, '「馬太鞍」由來為馬太鞍族人的祖先輾轉遷來此地，發現長滿「樹豆」（阿美語：Fata\'an），當地的樹豆成為族人的主食。樹豆可以常保不壞，又容易生長，成為馬太鞍人的最愛，常常帶在身上，到處種植，使得附近遍布樹豆，因此就通稱此地為馬太鞍。', '', '中文', '當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。', 0, '來到馬太鞍休閒農業區一定要好好了解這塊濕地的生態及文化，除了濕地導覽、水漾農田體驗，也安排了原住民頭飾diy與舞蹈體驗。', '馬太鞍圖片.jpg', '1517993817-2628026431_n.jpg', 'IMG_9974-cut-Mataian-Wetland.jpg', '流蘇前裙.jfif', '1517994663-2563258574_n.jpg'),
(13, 0, 0, '走進撒固兒', 8, 1000, 0, '撒固兒1.jpg', '台灣 |  撒固兒部落 ', '自行前往', '10:00 花蓮火車站集合\r\n部落文化祭祀廣場→部落野菜市集→部落廚房→佐倉步道→撒固兒瀑布\r\n', '撒固兒部落周邊許多特色景點，如撒固兒野菜市集、國福養生休閒園區、佐倉步道、撒固兒瀑布等，將在地景點與文化特色相結合，以「健康與休閒」作為旅遊相關產業的發展主軸。積極推廣傳統文化、產業，傳承族群文化並且反應出原住民與自然共存，取材自然山林的文化。\r\n \r\n', 1, 1, '撒固兒部落，舊稱加路蘭，面對太平洋背靠加路蘭山，孕育了豐沛且多樣的人文景象與自然生態。擁有豐富的林相、肥沃的土地、海洋的豐沛資源，使得原住民能於山林、平原、海邊取得各式各類型的生態資源。', '撒固兒部落', '中文', '當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。', 5, '跟著部落長輩們學習如何在部落過生活，將其視為一個課題，如同修學分，讓日常知識、文化做中學的概念，感受它。', '013(7).jpg', '001(7).jpg', '006(5).jpg', '010(6).jpg', '011(7).jpg'),
(14, 0, 0, '聆聽文史典藏半日遊', 4, 800, 0, '撒固兒2.jpg', '台灣 |  撒固兒部落 ', '自行前往', '野菜市集→ 部落廚房→撒固兒故事銅牆→佐倉步道', '了解撒奇萊雅族在奇萊平原的歷史，從舊社分布、山海的子民、平原的火光(達固灣戰役)、隱姓埋名到重返光榮，一一呈現歷史上幾個重要的轉折點，還有各部落的發源地、顛沛流離到族群正名等，隨著耆老們的腳步，往前走、向前看，也不忘根，期待部落年輕人能返鄉，與耆老生活，慢慢找回最初的部落生活與文化。', 3, 1, '撒固兒部落周邊許多特色景點，如撒固兒野菜市集、國福養生休閒園區、佐倉步道、撒固兒瀑布等，將在地景點與文化特色相結合，以「健康與休閒」作為旅遊相關產業的發展主軸。積極推廣傳統文化、產業，傳承族群文化並且反應出原住民與自然共存，取材自然山林的文化。', '撒固兒部落', '中文', '當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。', 5, '讓人走進歷史軌跡裡，回溯舊時風華。這也是磯崎部落選擇按部就班，走出自己部落特色的原因，要讓東海岸不只有美景烙印在大家的腦海，當地原住民的生活、文化背後的議題，更是旅程中，最美麗的回憶。', '014(5).jpg', '021(6).jpg', '032(2).jpg', '027(6).jpg', '031(2).jpg');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(5) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL,
  `guild_id` int(5) UNSIGNED NOT NULL,
  `guide_review` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guide_review_star` int(5) UNSIGNED NOT NULL,
  `guide_review_number` int(5) UNSIGNED NOT NULL,
  `guide_review_image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_ avatar` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_name` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_evaluation` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `member_star` int(5) UNSIGNED NOT NULL,
  `member_collect` int(5) NOT NULL,
  `journey_review_content` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `journey_review_point` int(5) UNSIGNED NOT NULL,
  `sur_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(5) DEFAULT NULL,
  `nation` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` tinyint(5) NOT NULL,
  `order_time` date NOT NULL,
  `order_status` tinyint(2) UNSIGNED NOT NULL,
  `order_id` int(5) UNSIGNED NOT NULL,
  `pay_status` tinyint(2) UNSIGNED NOT NULL,
  `total_price` int(20) UNSIGNED NOT NULL,
  `journey_id` int(5) UNSIGNED NOT NULL,
  `total_people` int(5) UNSIGNED NOT NULL,
  `journey_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `journey_information` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `info` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_order_review` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_form`
--

CREATE TABLE `order_form` (
  `id` int(6) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED NOT NULL,
  `guide_id` int(5) UNSIGNED NOT NULL,
  `journey_id` int(5) UNSIGNED NOT NULL,
  `sur_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nation` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `go_time` date NOT NULL,
  `total_amount` int(10) UNSIGNED NOT NULL,
  `total_people` tinyint(5) UNSIGNED NOT NULL,
  `total_price` int(10) UNSIGNED NOT NULL,
  `pay_status` tinyint(1) UNSIGNED NOT NULL,
  `card_number` int(5) UNSIGNED NOT NULL,
  `pay_amount` int(5) UNSIGNED NOT NULL,
  `bill_status` tinyint(2) UNSIGNED NOT NULL,
  `order_status` tinyint(2) UNSIGNED NOT NULL,
  `order_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tribes`
--

CREATE TABLE `tribes` (
  `id` int(5) UNSIGNED NOT NULL,
  `tribe` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tribes`
--

INSERT INTO `tribes` (`id`, `tribe`) VALUES
(1, '靜浦部落'),
(2, '新社部落'),
(3, '太巴塱部落'),
(4, '水璉部落'),
(5, '奇美部落'),
(6, '馬太鞍部落'),
(7, '撒固兒部落');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guide`
--
ALTER TABLE `guide`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guild`
--
ALTER TABLE `guild`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `journey`
--
ALTER TABLE `journey`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_form`
--
ALTER TABLE `order_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tribes`
--
ALTER TABLE `tribes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guide`
--
ALTER TABLE `guide`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `guild`
--
ALTER TABLE `guild`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `journey`
--
ALTER TABLE `journey`
  MODIFY `_id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_form`
--
ALTER TABLE `order_form`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tribes`
--
ALTER TABLE `tribes`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
