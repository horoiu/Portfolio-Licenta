-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id_admin` int NOT NULL AUTO_INCREMENT,
  `user` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id_admin`),
  KEY `nume` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'portfolio','Portfolio1!'),(2,'mario','mario');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `id_categ` int NOT NULL AUTO_INCREMENT,
  `nume_categorie` varchar(40) NOT NULL,
  PRIMARY KEY (`id_categ`),
  KEY `nume_categorie` (`nume_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (4,'Bootstrap'),(7,'C++'),(1,'CSS'),(2,'JavaScript'),(6,'OracleDB & APEX'),(8,'PHP'),(5,'React'),(3,'WordPress');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proiect`
--

DROP TABLE IF EXISTS `proiect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proiect` (
  `id_proiect` int NOT NULL AUTO_INCREMENT,
  `fisier_imagine` varchar(50) DEFAULT NULL,
  `imagine_mare` varchar(50) DEFAULT NULL,
  `id_categ` int NOT NULL,
  `nume_proiect` varchar(80) NOT NULL,
  `prezentare` varchar(1500) NOT NULL,
  `data_proiect` date DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_proiect`),
  KEY `fisier_imagine` (`fisier_imagine`,`nume_proiect`),
  KEY `id_categ` (`id_categ`),
  CONSTRAINT `proiect_ibfk_1` FOREIGN KEY (`id_categ`) REFERENCES `categorie` (`id_categ`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proiect`
--

LOCK TABLES `proiect` WRITE;
/*!40000 ALTER TABLE `proiect` DISABLE KEYS */;
INSERT INTO `proiect` VALUES (23,'imagine-S23.png','imagine-B23.png',2,'Verify CNP','One of my first projects using JavaScript. \r\nAll you have to do is to enter a number and see if it\'s a valid Romanian CNP (Personal Identification Number).','2017-04-01','https://devspace.ro/Portfolio/JS/CNP/CNP.html'),(24,'imagine-S24.png','imagine-B24.png',2,'PIG-Game','While learning the JavaScript magic,  I have found some great online tutorials. One of those tutorials, helped me create this small app, combining blocks in Controllers and using Prototypal Inheritance.','2018-03-15','https://devspace.ro/Portfolio/JS/Pig-Game/Pig-Game.html'),(25,'imagine-S25.png','imagine-B25.png',2,'MindTools','&quot;Challange Accepted - Hackaton&quot;, ed. 4, organized by &quot;The Informal School of IT&quot; - Cluj-Napoca in 2018, was a extraordinary experience. I was a volunteer and, along with other 7 persons, we had 36 hrs to build the basic website for an non-guvermental organization. We started from a ready-made template.\r\nMy part on this project was to build the sections beyond &quot;Opportunities&quot;, using JavaScript, HTML5 &amp; CSS3.','2018-04-22','https://devspace.ro/Portfolio/Sites/MindTools/index.html'),(26,'imagine-S26.png','imagine-B26.png',1,'Trillo','While learning to master the CSS3 magic, I\'ve created this project during an online tutorial, using CSS\'s Flex-Box and Variables.','2018-03-17','https://devspace.ro/Portfolio/CSS/Trillo/index.html'),(27,'imagine-S27.png','imagine-B27.png',2,'Monthly Budget','While learning the JavaScript magic, I have found some great online tutorials. One of those tutorials, helped me create this small app, combining code blocks in Controllers and using Prototypal Inheritance. Also learning to use the BEM methodology for naming CCS classes.','2018-03-31','https://devspace.ro/Portfolio/JS/Budget/budget.html'),(28,'imagine-S28.png','imagine-B28.png',1,'Nexter','Learning from online tutorials got me to the point of learning to write CSS code using SASS and BEM methodology. This is the first responsive project using Grid layout.','2018-03-02','https://devspace.ro/Portfolio/CSS/Nexter/index.html'),(29,'imagine-S29.png','imagine-B29.png',7,'EAN13 Barcode generator','Being a student at &quot;Technical University of Cluj-Napoca&quot; @ &quot;Applied Informatics and Programming&quot; got me  in the world of programming language of C++. The &quot;EAN13 Codebar generator&quot; was my  1st semestral project, which got me an A+.  ;-)','2019-02-14',''),(30,'imagine-S30.png','imagine-B30.png',1,'Natours','This is the 1st complex project where is used CSS\'s animations to make this outstanding effects on card\'s. Coded using SASS and BEM methodology. Thanks to Jonas Schmedtmann for his amazing tutorials.','2018-03-31','https://devspace.ro/Portfolio/CSS/Natours/index.html'),(31,'imagine-S31.png','imagine-B31.png',2,'IMDB - Team Project','This is the 1st project in collaboration with some of my colleagues from &quot;The Informal School of IT&quot; @ &quot;Front-End Web Development&quot; module. We build our project thru Git &amp; GitHub. My participation was mainly to implement the Register / LogIn / LogOut functionalities, DeleteMovie, but also helped for Add/Edit movie and some other stuff.','2017-10-17','https://devspace.ro/Portfolio/JS/IMDB-team/Pages/index.html'),(32,'imagine-S32.png','imagine-B32.png',2,'IMDB - Personal Project','My personal project, coded by my own from scratch, based on the IMDB - Team Project  developed at &quot;The Informal School of IT&quot; during the &quot;Front-End Web Development&quot; module. I used AJAX to access the DB and JavaScripts Modules &amp; Controllers to get the data structured in separate files. \r\nThis is 1st project in which I implemented pagination for the results received from server.','2018-02-15','https://devspace.ro/Portfolio/JS/IMDB-personal/index.html'),(33,'imagine-S33.png','imagine-B33.png',8,'Floraria Splendid','Being a student at &quot;Technical University of Cluj-Napoca&quot; @ &quot;Applied Informatics and Programming&quot; introduced me to the backend world thru the PHP programming language. \r\nThis is the 1st project in which I learned to create my own DB and manipulate it thru the HTML interface.','2019-04-18','https://devspace.ro/Portfolio/Sites/Splendid/index.html'),(34,'imagine-S34.png','imagine-B34.jpg',6,'OracleDB &amp; APEX','This is my semestral project at &quot;Technical University of Cluj-Napoca&quot; - &quot;Applied Informatics and Programming&quot; while studying &quot;Relational DataBases&quot;. I\'ve created the DB using SQL-Developer, and build the interface using ORACLE Application Express (APEX). The DB have &quot;only&quot; 8 tables... all linked thru primary/secondary keys ...','2019-09-14',''),(64,'C:fakepathBackground-1.jpg','C:fakepathBackground-2.jpg',6,'Test Safari','Test Safari','2020-07-01','Test Safari'),(65,'C:fakepathFig-3.3.png','C:fakepathFig-3.4.png',7,'Test Mobile','Test Mobile','2020-07-01','asv');
/*!40000 ALTER TABLE `proiect` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-01 15:36:15
