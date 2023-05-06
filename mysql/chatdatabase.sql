/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : chatdatabase

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 06/05/2023 19:34:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for friendship
-- ----------------------------
DROP TABLE IF EXISTS `friendship`;
CREATE TABLE `friendship`  (
  `id1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `id2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of friendship
-- ----------------------------
INSERT INTO `friendship` VALUES ('1', '2', 'accepted');
INSERT INTO `friendship` VALUES ('1', '3', 'accepted');
INSERT INTO `friendship` VALUES ('1', '4', 'accepted');
INSERT INTO `friendship` VALUES ('accepted', 'accepted', 'accepted');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `message_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '消息ID',
  `sender_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '发送者ID',
  `receiver_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '接收者ID',
  `timestamp` datetime NOT NULL COMMENT '时间戳',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '内容',
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '类型',
  PRIMARY KEY (`message_id`) USING BTREE,
  INDEX `index_sender`(`sender_id`) USING BTREE,
  INDEX `index_receiver`(`receiver_id`) USING BTREE,
  INDEX `index_timestamp`(`timestamp`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '消息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('#1', '1', '2', '2023-05-01 14:30:00', '你好，明天见！🎵', '文本');
INSERT INTO `message` VALUES ('#10', '1', '5', '2023-05-06 18:13:31', 'coodin', '文本');
INSERT INTO `message` VALUES ('#11', '5', '1', '2023-05-06 18:33:25', '快写！', NULL);
INSERT INTO `message` VALUES ('#2', '2', '1', '2023-05-01 14:31:00', '好的，明天见！', '文本');
INSERT INTO `message` VALUES ('#3', '1', '3', '2023-05-01 14:32:00', '你们在哪？', '文本');
INSERT INTO `message` VALUES ('#4', '3', '1', '2023-05-01 14:33:00', '我在咖啡厅门口等你们', '文本');
INSERT INTO `message` VALUES ('#5', '4', '1', '2023-05-01 14:34:00', '有什么好玩的地方吗？', '文本');
INSERT INTO `message` VALUES ('#6', '1', '4', '2023-05-01 14:35:00', '可以去公园散步啊', '文本');
INSERT INTO `message` VALUES ('#7', '2', '3', '2023-05-01 14:36:00', '有人要来参加会议吗？', '文本');
INSERT INTO `message` VALUES ('#8', '3', '2', '2023-05-01 14:37:00', '我会去的！', '文本');
INSERT INTO `message` VALUES ('#9', '1', '2', '2023-05-03 15:37:48', 'hi', '文本');
INSERT INTO `message` VALUES ('JlI5Qg9W8tg5HE2mq_epw', '1', '2', '2023-05-03 17:00:32', 'nice bro\n', '图片');

-- ----------------------------
-- Table structure for recent_message
-- ----------------------------
DROP TABLE IF EXISTS `recent_message`;
CREATE TABLE `recent_message`  (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '双方ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  `date` datetime NULL DEFAULT NULL,
  `avatar_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '头像图片（假的）',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '在线状态',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of recent_message
-- ----------------------------
INSERT INTO `recent_message` VALUES ('2', '小飞侠', '你好，我很好超级好', '2023-05-04 10:30:00', 'jack', 'online');
INSERT INTO `recent_message` VALUES ('3', '小明', '你好，今天怎么样？', '2023-05-04 11:03:00', 'jai', 'online');
INSERT INTO `recent_message` VALUES ('4', '小华', '今天的天气真好！', '2023-05-04 11:10:00', 'jacques', 'offline');
INSERT INTO `recent_message` VALUES ('5', '小李', '我正在学习编程', '2023-05-04 11:20:00', 'jack', 'offline');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `avatar_img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `sex` enum('male','female') CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '怪黎', 'jabala', 'male', '四川', 'admin');
INSERT INTO `users` VALUES (2, '小飞侠', 'jack', 'male', '四川成都', '123456');
INSERT INTO `users` VALUES (3, '小明', 'jai', 'female', '四川乐山', '654321');
INSERT INTO `users` VALUES (4, '小华', 'jacques', 'male', '四川', '123455');

SET FOREIGN_KEY_CHECKS = 1;
