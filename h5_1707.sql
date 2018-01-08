/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1707

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 20:05:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods1
-- ----------------------------
DROP TABLE IF EXISTS `goods1`;
CREATE TABLE `goods1` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods1
-- ----------------------------
INSERT INTO `goods1` VALUES ('1', '立丰 白金大礼盒922g 上海风味', '168.00', 'img/details_goods1.jpg');
INSERT INTO `goods1` VALUES ('2', '旺仔 小馒头 原味 210g 休闲膨化 办公室零食', '8.60', 'img/details_goods2.jpg');
INSERT INTO `goods1` VALUES ('3', '立丰 鸭肫肝 148g/袋 上海风味', '23.80', 'img/details_goods3.jpg');
INSERT INTO `goods1` VALUES ('4', '黄飞红 麻辣花生 210g 坚果炒货', '11.80', 'img/details_goods4.jpg');
INSERT INTO `goods1` VALUES ('5', '张君雅小妹妹 巧克力甜甜圈 45g 中国台湾地区进口', '11.80', 'img/details_goods5.jpg');
INSERT INTO `goods1` VALUES ('6', 'Calbee 卡乐比北海道产三兄弟系列咸味', '100.00', 'img/details_goods6.jpg');
INSERT INTO `goods1` VALUES ('7', '都市余味 小核桃仁 168g*3 易拉罐装', '157.50', 'img/details_goods7.jpg');
INSERT INTO `goods1` VALUES ('8', '阿明 芝麻桃仁 138g*2', '53.00', 'img/details_goods8.jpg');
INSERT INTO `goods1` VALUES ('9', '口水娃 锅巴香辣味 30g 休闲零食', '1.80', 'img/details_goods9.jpg');
INSERT INTO `goods1` VALUES ('10', '万多福（Wonderful）美国加州进口开', '91.10', 'img/details_goods10.jpg');
INSERT INTO `goods1` VALUES ('11', '上好佳 田园泡 玉米味 80g/小包 休闲', '5.30', 'img/details_goods11.jpg');
INSERT INTO `goods1` VALUES ('12', '良品铺子 南瓜脆片50g袋装', '19.90', 'img/details_goods12.jpg');
INSERT INTO `goods1` VALUES ('13', '天喔 盐津橄榄 230g 蜜饯零食', '13.90', 'img/details_goods13.jpg');
INSERT INTO `goods1` VALUES ('14', '海牌 小力士鱼肠 80g 韩国进口', '11.60', 'img/details_goods14.jpg');
INSERT INTO `goods1` VALUES ('15', '佳惠 奶油味爆米花 150g 休闲膨化 办公室零食', '13.80', 'img/details_goods15.jpg');
INSERT INTO `goods1` VALUES ('16', '四洲 甘栗 50g 坚果炒货 办公室零食', '5.90', 'img/details_goods16.jpg');
INSERT INTO `goods1` VALUES ('17', '良品铺子 牛筋(卤香味)88g/袋', '27.90', 'img/details_goods17.jpg');
INSERT INTO `goods1` VALUES ('18', '立丰 精品牛肉干 162g 上海风味', '43.00', 'img/details_goods18.jpg');
INSERT INTO `goods1` VALUES ('19', '良品铺子 糯米锅巴（原味）110g/袋', '13.90', 'img/details_goods19.jpg');
INSERT INTO `goods1` VALUES ('20', '天喔 瓶装盐津半话李 190g*2', '34.00', 'img/details_goods20.jpg');

-- ----------------------------
-- Table structure for goods2
-- ----------------------------
DROP TABLE IF EXISTS `goods2`;
CREATE TABLE `goods2` (
  `id` int(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods2
-- ----------------------------
INSERT INTO `goods2` VALUES ('1', '立丰 白金大礼盒922g 上海风味', '168.00', '../img/details_goods1.jpg');
INSERT INTO `goods2` VALUES ('2', '旺仔 小馒头 原味 210g 休闲膨化 办公室零食', '8.60', '../img/details_goods2.jpg');
INSERT INTO `goods2` VALUES ('3', '立丰 鸭肫肝 148g/袋 上海风味', '23.80', '../img/details_goods3.jpg');
INSERT INTO `goods2` VALUES ('4', '黄飞红 麻辣花生 210g 坚果炒货', '11.80', '../img/details_goods4.jpg');
INSERT INTO `goods2` VALUES ('5', '张君雅小妹妹 巧克力甜甜圈 45g 中国台湾地区进口', '11.80', '../img/details_goods5.jpg');
INSERT INTO `goods2` VALUES ('6', 'Calbee 卡乐比北海道产三兄弟系列咸味', '100.00', '../img/details_goods6.jpg');
INSERT INTO `goods2` VALUES ('7', '都市余味 小核桃仁 168g*3 易拉罐装', '157.50', '../img/details_goods7.jpg');
INSERT INTO `goods2` VALUES ('8', '阿明 芝麻桃仁 138g*2', '53.00', '../img/details_goods8.jpg');
INSERT INTO `goods2` VALUES ('9', '口水娃 锅巴香辣味 30g 休闲零食', '1.80', '../img/details_goods9.jpg');
INSERT INTO `goods2` VALUES ('10', '万多福（Wonderful）美国加州进口开', '91.10', '../img/details_goods10.jpg');
INSERT INTO `goods2` VALUES ('11', '上好佳 田园泡 玉米味 80g/小包 休闲', '5.30', '../img/details_goods11.jpg');
INSERT INTO `goods2` VALUES ('12', '良品铺子 南瓜脆片50g袋装', '19.90', '../img/details_goods12.jpg');
INSERT INTO `goods2` VALUES ('13', '天喔 盐津橄榄 230g 蜜饯零食', '13.90', '../img/details_goods13.jpg');
INSERT INTO `goods2` VALUES ('14', '海牌 小力士鱼肠 80g 韩国进口', '11.60', '../img/details_goods14.jpg');
INSERT INTO `goods2` VALUES ('15', '佳惠 奶油味爆米花 150g 休闲膨化 办公室零食', '13.80', '../img/details_goods15.jpg');
INSERT INTO `goods2` VALUES ('16', '四洲 甘栗 50g 坚果炒货 办公室零食', '5.90', '../img/details_goods16.jpg');
INSERT INTO `goods2` VALUES ('17', '良品铺子 牛筋(卤香味)88g/袋', '27.90', '../img/details_goods17.jpg');
INSERT INTO `goods2` VALUES ('18', '立丰 精品牛肉干 162g 上海风味', '43.00', '../img/details_goods18.jpg');
INSERT INTO `goods2` VALUES ('19', '良品铺子 糯米锅巴（原味）110g/袋', '13.90', '../img/details_goods19.jpg');
INSERT INTO `goods2` VALUES ('20', '天喔 瓶装盐津半话李 190g*2', '34.00', '../img/details_goods20.jpg');
INSERT INTO `goods2` VALUES ('21', '良品铺子 西瓜子 话梅味 218g袋装', '17.90', '../img/details_goods21.jpg');
INSERT INTO `goods2` VALUES ('22', '张君雅小妹妹 墨西哥辣鸡点心面 78g 中国台湾地区进口', '9.20', '../img/details_goods22.jpg');
INSERT INTO `goods2` VALUES ('23', '良品铺子 卤藕香辣味168g x1袋装', '14.90', '../img/details_goods23.jpg');
INSERT INTO `goods2` VALUES ('24', '张志明 无花果干 无花果丝 休闲零食 2', '8.60', '../img/details_goods24.jpg');
INSERT INTO `goods2` VALUES ('25', '良品铺子 裙带菜(香辣味)160g/袋', '14.90', '../img/details_goods25.jpg');
INSERT INTO `goods2` VALUES ('26', '阿明 小核桃仁 65g*3', '104.90', '../img/details_goods26.jpg');
INSERT INTO `goods2` VALUES ('27', '良品铺子 牛肚(卤香味)92g/袋', '27.90', '../img/details_goods27.jpg');
INSERT INTO `goods2` VALUES ('28', '良品铺子 多味花生 148克x3袋装', '19.90', '../img/details_goods28.jpg');
INSERT INTO `goods2` VALUES ('29', '浪味仙优惠装 210g 休闲零食 办公室零食', '11.10', '../img/details_goods29.jpg');
INSERT INTO `goods2` VALUES ('30', '张君雅小妹妹 日式休闲丸子 80g 中国台湾地区进口', '11.80', '../img/details_goods30.jpg');
INSERT INTO `goods2` VALUES ('31', '良品铺子 美式西梅108g袋装', '12.90', '../img/details_goods31.jpg');
INSERT INTO `goods2` VALUES ('32', '阳光少女 葡萄干 283.5g 美国进口', '26.50', '../img/details_goods32.jpg');
INSERT INTO `goods2` VALUES ('33', '良品铺子 老婆梅140gx2袋装', '26.90', '../img/details_goods33.jpg');
INSERT INTO `goods2` VALUES ('34', '良品铺子 葵花籽山核桃味190g*1袋装', '16.90', '../img/details_goods34.jpg');
INSERT INTO `goods2` VALUES ('35', '口水娃 兰花豆 原味 108g/袋 坚果炒', '3.90', '../img/details_goods35.jpg');
INSERT INTO `goods2` VALUES ('36', '乐事 无限 薯片 组合包 104g*3 休闲膨化 办公室零食', '24.90', '../img/details_goods36.jpg');
INSERT INTO `goods2` VALUES ('37', '张君雅 五香海苔休闲丸子 80g 中国台湾地区进口 休闲膨化 办公室零食', '11.80', '../img/details_goods37.jpg');
INSERT INTO `goods2` VALUES ('38', '西贡小姐 综合蔬果干 100g', '13.90', '../img/details_goods38.jpg');
INSERT INTO `goods2` VALUES ('39', '天喔 很牛沙嗲味牛肉粒 150g 休闲食品 办公室零食', '24.80', '../img/details_goods39.jpg');
INSERT INTO `goods2` VALUES ('40', '好味佳 精选加应子 306g 休闲蜜饯', '22.80', '../img/details_goods40.jpg');
INSERT INTO `goods2` VALUES ('41', '良品铺子 西瓜子 话梅味 218g袋装', '17.90', '../img/details_goods1.jpg');
INSERT INTO `goods2` VALUES ('42', '张君雅小妹妹 墨西哥辣鸡点心面 78g 中国台湾地区进口', '9.20', '../img/details_goods2.jpg');
INSERT INTO `goods2` VALUES ('43', '良品铺子 卤藕香辣味168g x1袋装', '14.90', '../img/details_goods3.jpg');
INSERT INTO `goods2` VALUES ('44', '张志明 无花果干 无花果丝 休闲零食 2', '8.60', '../img/details_goods4.jpg');
INSERT INTO `goods2` VALUES ('45', '良品铺子 裙带菜(香辣味)160g/袋', '14.90', '../img/details_goods5.jpg');
INSERT INTO `goods2` VALUES ('46', '阿明 小核桃仁 65g*3', '104.90', '../img/details_goods6.jpg');
INSERT INTO `goods2` VALUES ('47', '良品铺子 牛肚(卤香味)92g/袋', '27.90', '../img/details_goods7.jpg');
INSERT INTO `goods2` VALUES ('48', '良品铺子 多味花生 148克x3袋装', '19.90', '../img/details_goods8.jpg');
INSERT INTO `goods2` VALUES ('49', '旺旺 浪味仙优惠装 210g 休闲零食 办公室零食', '11.10', '../img/details_goods9.jpg');
INSERT INTO `goods2` VALUES ('50', '张君雅小妹妹 日式休闲丸子 80g 中国台湾地区进口', '11.80', '../img/details_goods10.jpg');
INSERT INTO `goods2` VALUES ('51', '良品铺子 美式西梅108g袋装', '12.90', '../img/details_goods11.jpg');
INSERT INTO `goods2` VALUES ('52', '阳光少女 葡萄干 283.5g 美国进口', '26.50', '../img/details_goods12.jpg');
INSERT INTO `goods2` VALUES ('53', '良品铺子 葵花籽山核桃味190g*1袋装', '16.90', '../img/details_goods13.jpg');
INSERT INTO `goods2` VALUES ('54', '口水娃 兰花豆 原味 108g/袋 坚果炒', '3.90', '../img/details_goods14.jpg');
INSERT INTO `goods2` VALUES ('55', '乐事 无限 薯片 组合包 104g*3 休闲膨化 办公室零食', '24.90', '../img/details_goods15.jpg');
INSERT INTO `goods2` VALUES ('56', '张君雅 五香海苔休闲丸子 80g 中国台湾地区进口 休闲膨化 办公室零食', '11.80', '../img/details_goods16.jpg');
INSERT INTO `goods2` VALUES ('57', '中国台湾地区进口 休闲膨化 办公室零食', '12.80', '../img/details_goods17.jpg');
INSERT INTO `goods2` VALUES ('58', '西贡小姐 综合蔬果干 100g', '13.90', '../img/details_goods18.jpg');
INSERT INTO `goods2` VALUES ('59', '天喔 很牛沙嗲味牛肉粒 150g 休闲食品 办公室零食', '24.80', '../img/details_goods19.jpg');
INSERT INTO `goods2` VALUES ('60', '好味佳 精选加应子 306g 休闲蜜饯', '22.80', '../img/details_goods20.jpg');
INSERT INTO `goods2` VALUES ('61', '立丰 白金大礼盒922g 上海风味', '168.00', '../img/details_goods21.jpg');
INSERT INTO `goods2` VALUES ('62', '旺仔 小馒头 原味 210g 休闲膨化 办公室零食', '8.60', '../img/details_goods22.jpg');
INSERT INTO `goods2` VALUES ('63', '立丰 鸭肫肝 148g/袋 上海风味', '23.80', '../img/details_goods23.jpg');
INSERT INTO `goods2` VALUES ('64', '黄飞红 麻辣花生 210g 坚果炒货', '11.80', '../img/details_goods24.jpg');
INSERT INTO `goods2` VALUES ('65', '张君雅小妹妹 巧克力甜甜圈 45g 中国台湾地区进口', '11.80', '../img/details_goods25.jpg');
INSERT INTO `goods2` VALUES ('66', 'Calbee 卡乐比北海道产三兄弟系列咸味', '100.00', '../img/details_goods26.jpg');
INSERT INTO `goods2` VALUES ('67', '都市余味 小核桃仁 168g*3 易拉罐装', '157.50', '../img/details_goods27.jpg');
INSERT INTO `goods2` VALUES ('68', '阿明 芝麻桃仁 138g*2', '53.00', '../img/details_goods28.jpg');
INSERT INTO `goods2` VALUES ('69', '口水娃 锅巴香辣味 30g 休闲零食', '1.80', '../img/details_goods29.jpg');
INSERT INTO `goods2` VALUES ('70', '万多福（Wonderful）美国加州进口开', '91.10', '../img/details_goods30.jpg');
INSERT INTO `goods2` VALUES ('71', '上好佳 田园泡 玉米味 80g/小包 休闲', '5.30', '../img/details_goods31.jpg');
INSERT INTO `goods2` VALUES ('72', '良品铺子 南瓜脆片50g袋装', '19.90', '../img/details_goods32.jpg');
INSERT INTO `goods2` VALUES ('73', '天喔 盐津橄榄 230g 蜜饯零食', '13.90', '../img/details_goods33.jpg');
INSERT INTO `goods2` VALUES ('74', '海牌 小力士鱼肠 80g 韩国进口', '11.60', '../img/details_goods34.jpg');
INSERT INTO `goods2` VALUES ('75', '佳惠 奶油味爆米花 150g 休闲膨化 办公室零食', '13.80', '../img/details_goods35.jpg');
INSERT INTO `goods2` VALUES ('76', '四洲 甘栗 50g 坚果炒货 办公室零食', '5.90', '../img/details_goods36.jpg');
INSERT INTO `goods2` VALUES ('77', '良品铺子 牛筋(卤香味)88g/袋', '27.90', '../img/details_goods37.jpg');
INSERT INTO `goods2` VALUES ('78', '立丰 精品牛肉干 162g 上海风味', '43.00', '../img/details_goods38.jpg');
INSERT INTO `goods2` VALUES ('79', '良品铺子 糯米锅巴（原味）110g/袋', '13.90', '../img/details_goods39.jpg');
INSERT INTO `goods2` VALUES ('80', '天喔 瓶装盐津半话李 190g*2', '34.00', '../img/details_goods40.jpg');
INSERT INTO `goods2` VALUES ('81', '乐事 无限 薯片 组合包 104g*3 休闲膨化 办公室零食', '24.90', '../img/details_goods1.jpg');
INSERT INTO `goods2` VALUES ('82', '张君雅 五香海苔休闲丸子 80g 中国台湾地区进口 休闲膨化 办公室零食', '82.00', '../img/details_goods2.jpg');
INSERT INTO `goods2` VALUES ('83', '西贡小姐 综合蔬果干 100g', '13.90', '../img/details_goods3.jpg');
INSERT INTO `goods2` VALUES ('84', '天喔 很牛沙嗲味牛肉粒 150g 休闲食品 办公室零食', '24.80', '../img/details_goods4.jpg');
INSERT INTO `goods2` VALUES ('85', '好味佳 精选加应子 306g 休闲蜜饯', '22.80', '../img/details_goods5.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'test1', '123321', null, null, '2018-01-08 09:08:43');
INSERT INTO `user` VALUES ('2', 'test2', '222333', null, null, '2018-01-08 09:09:21');
INSERT INTO `user` VALUES ('3', 'test3', '234321', null, null, '2018-01-08 09:09:50');
INSERT INTO `user` VALUES ('4', 'zt5210', '82949903119cb612319432a1f71d7007', '13244534323', 'reewtrew@qq.com', '2018-01-08 09:14:11');
INSERT INTO `user` VALUES ('5', 'zztt123', 'd016f2ff21a5610f12238cdf9d230ecd', '13232223322', 'dasddsaf@qq.com', '2018-01-08 17:20:58');
INSERT INTO `user` VALUES ('6', 'qwe1234', 'bd4f881f9422e07ed3ee9da1284e4ef3', '13423332233', 'eqwfrewaf@qq.com', '2018-01-08 17:23:40');
