DROP DATABASE IF EXISTS `antoinemazelaygue_3wa_Anime_Ink`;

CREATE DATABASE `antoinemazelaygue_3wa_Anime_Ink`;

USE `antoinemazelaygue_3wa_Anime_Ink`;


DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `role_id` INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `role_name` VARCHAR(250) NOT NULL,
  `value` BOOLEAN NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `roles` (`role_id`, `role_name`, `value`) VALUES
(1, 'admin', 1),(2, 'visitor', 0);



DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) NOT NULL,
  `password` VARCHAR(250) NOT NULL,
  `avatar` VARCHAR(250) NULL,
  `role_id` INT(11) DEFAULT NULL,
  FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `avatar`, `role_id`) VALUES
(1, 'Kira', 'kira@exemple.com', 'Simple33200', 'https://img.freepik.com/photos-gratuite/illustration-3d-adolescent-visage-drole-lunettes_1142-50955.jpg?w=1380&t=st=1706976198~exp=1706976798~hmac=079d7c92230593a5d358cf5a13965108a41e4b8754febe010b62b7e0677641ca', 2),
(2, 'Lisow', 'lisow@exemple.com', 'Simple33200','https://img.freepik.com/photos-gratuite/personnage-dessin-anime-3d_23-2151034097.jpg?w=1380&t=st=1706976079~exp=1706976679~hmac=12b781600372dbae6b48c00957f8b6d8b8c50b5d231dde045087d8625dbac8de', 1);



DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `comment_id` INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `user_id` INT(11) NOT NULL,
  `content` VARCHAR(250) NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `comments` (`user_id`, `content`, `date`) VALUES
(2, 'Is Insane !', NOW()),(1, 'Je kiff de fouuuu 🚀', NOW());



DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `article_id` INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `api_url` VARCHAR(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `articles` (`article_id`, `api_url`) VALUES
(1,"https://api.jikan.moe/v4/anime/%7Bid%7D/full");



DROP TABLE IF EXISTS `articles_users`;

CREATE TABLE `articles_users` (
  `article_id` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
FOREIGN KEY (`article_id`) REFERENCES `articles` (`article_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `articles_users` (`article_id`, `user_id`) VALUES
(1, 1), (1, 2);

DROP TABLE IF EXISTS `articles_comments`;

CREATE TABLE `articles_comments` (
  `article_id` INT(11) NOT NULL,
  `comment_id` INT(11) NOT NULL,
FOREIGN KEY (`article_id`) REFERENCES `articles` (`article_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
FOREIGN KEY (`comment_id`) REFERENCES `comments` (`comment_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `articles_comments` (`article_id`, `comment_id`) VALUES
(1, 1), (1, 2);



