-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema programacionnegocios
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema programacionnegocios
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `programacionnegocios` DEFAULT CHARACTER SET utf8 ;
USE `programacionnegocios` ;

-- -----------------------------------------------------
-- Table `programacionnegocios`.`campus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios`.`campus` (
  `idcampus` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `campusnombre` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`idcampus`)  COMMENT '')
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios`.`tipoperfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios`.`tipoperfil` (
  `perfiltipoid` INT(11) NOT NULL COMMENT '',
  `tipoperfildescription` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`perfiltipoid`)  COMMENT '')
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios`.`roles` (
  `idroles` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `rolnombre` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  PRIMARY KEY (`idroles`)  COMMENT '')
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios`.`usuarios` (
  `usermail` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  `userid` VARCHAR(20) NOT NULL COMMENT '',
  `userpwd` VARCHAR(45) NOT NULL COMMENT '',
  `usersalt` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  `usernombre` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  `usercuenta` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  `usercerfch` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  `userultacc` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  `userestado` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  `Campus_idcampus` INT(11) NOT NULL COMMENT '',
  `Roles_idroles` INT(11) NOT NULL COMMENT '',
  PRIMARY KEY (`userid`, `Campus_idcampus`, `Roles_idroles`)  COMMENT '',
  INDEX `fk_Usuarios_Campus1_idx` (`Campus_idcampus` ASC)  COMMENT '',
  INDEX `fk_Usuarios_Roles1_idx` (`Roles_idroles` ASC)  COMMENT '',
  CONSTRAINT `fk_Usuarios_Campus1`
    FOREIGN KEY (`Campus_idcampus`)
    REFERENCES `programacionnegocios`.`campus` (`idcampus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_Roles1`
    FOREIGN KEY (`Roles_idroles`)
    REFERENCES `programacionnegocios`.`roles` (`idroles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios`.`perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios`.`perfil` (
  `nombre` VARCHAR(45) NOT NULL COMMENT '',
  `apellido` VARCHAR(45) NOT NULL COMMENT '',
  `fechanac` DATE NOT NULL COMMENT '',
  `tel` VARCHAR(45) NOT NULL COMMENT '',
  `cel` VARCHAR(45) NOT NULL COMMENT '',
  `direccion` VARCHAR(45) NOT NULL COMMENT '',
  `perfiltipoid` INT(11) NOT NULL COMMENT '',
  `Usuarios_userid` VARCHAR(20) NOT NULL COMMENT '',
  PRIMARY KEY (`perfiltipoid`, `Usuarios_userid`)  COMMENT '',
  INDEX `fk_Perfil_tipoperfil_idx` (`perfiltipoid` ASC)  COMMENT '',
  INDEX `fk_Perfil_Usuarios1_idx` (`Usuarios_userid` ASC)  COMMENT '',
  CONSTRAINT `fk_Perfil_tipoperfil`
    FOREIGN KEY (`perfiltipoid`)
    REFERENCES `programacionnegocios`.`tipoperfil` (`perfiltipoid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Perfil_Usuarios1`
    FOREIGN KEY (`Usuarios_userid`)
    REFERENCES `programacionnegocios`.`usuarios` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios`.`proyecto` (
  `idproyecto` INT(11) NOT NULL COMMENT '',
  `proyectonombre` VARCHAR(45) NOT NULL COMMENT '',
  `proyectodescripcion` VARCHAR(45) NOT NULL COMMENT '',
  `proyectolenguaje` VARCHAR(45) NOT NULL COMMENT '',
  `proyectotamaño` INT(11) NOT NULL COMMENT '',
  `proyectofotografia` VARCHAR(45) NOT NULL COMMENT '',
  `proyectoinstrucc` VARCHAR(45) NOT NULL COMMENT '',
  `proyectoguia` VARCHAR(45) NOT NULL COMMENT '',
  `proyectoversion` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  `proyectonomclase` VARCHAR(45) NULL DEFAULT NULL COMMENT '',
  PRIMARY KEY (`idproyecto`)  COMMENT '')
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
