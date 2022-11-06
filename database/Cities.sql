DROP DATABASE IF EXISTS `Cities`;
CREATE DATABASE IF NOT EXISTS `Cities` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Cities`;

DROP TABLE IF EXISTS `City`;
CREATE TABLE IF NOT EXISTS `City` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(35) NOT NULL,
  `Province` char(3) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=4080 ;

INSERT INTO `City` ('ID', `Name`, `Province`) VALUES
    (1, 'Ottawa', 'ON'),
    (2, 'Toronto', 'ON'),
    (3, 'Hamilton', 'ON'),
    (4, 'Kitchener', 'ON'),
    (5, 'Windsor', 'ON'),
    (6, 'London', 'ON'),
    (7, 'Vaughn', 'ON'),
    (8, 'Oshawa', 'ON'),
    (9, 'Brantford', 'ON'),
    (10, 'Niagara', 'ON'),
    (11, 'Barrie', 'ON'),
    (12, 'Brampton', 'ON'),
    (13, 'Burlington', 'ON'),
    (14, 'Cambridge', 'ON'),
    (15, 'Clarence', 'ON'),
    (16, 'Cornwall', 'ON'),
    (17, 'Guelph', 'ON'),
    (18, 'Kingston', 'ON'),
    (19, 'Markham', 'ON'),
    (20, 'Mississauga', 'ON'),
    (21, 'Newmarket', 'ON'),
    (22, 'North Bay', 'ON'),
    (23, 'Oakville', 'ON'),
    (24, 'Peterborough', 'ON'),
    (25, 'Pickering', 'ON'),
    (26, 'Richmond Hill', 'ON'),
    (27, 'Sarnia', 'ON'),
    (28, 'Sault Ste. Marie', 'ON'),
    (29, 'St. Catharines', 'ON'),
    (30, 'St. Thomas', 'ON'),
    (31, 'Stratford', 'ON'),
    (32, 'Sudbury', 'ON'),
    (33, 'Thunder Bay', 'ON'),
    (34, 'Timmins', 'ON'),
    (35, 'Waterloo', 'ON'),
    (36, 'Welland', 'ON'),
    (37, 'Woodstock', 'ON'),
   