-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema programacionnegocios1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema programacionnegocios1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `programacionnegocios1` DEFAULT CHARACTER SET utf8 ;
USE `programacionnegocios1` ;

-- -----------------------------------------------------
-- Table `programacionnegocios1`.`clases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`clases` (
  `idClases` INT(11) NOT NULL AUTO_INCREMENT,
  `ClasesDescripcion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idClases`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios1`.`lenguajes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`lenguajes` (
  `idLenguaje` INT(11) NOT NULL AUTO_INCREMENT,
  `LenguajeDescripcion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idLenguaje`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios1`.`campus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`campus` (
  `idcampus` INT(11) NOT NULL AUTO_INCREMENT,
  `campusnombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcampus`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios1`.`tipoperfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`tipoperfil` (
  `perfiltipoid` INT(11) NOT NULL AUTO_INCREMENT,
  `tipoperfildescription` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`perfiltipoid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios1`.`perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`perfil` (
  `perfilid` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `fechanac` DATE NOT NULL,
  `tel` VARCHAR(45) NOT NULL,
  `cel` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `perfiltipoid` INT(11) NOT NULL,
  PRIMARY KEY (`perfilid`, `perfiltipoid`),
  INDEX `fk_Perfil_tipoperfil_idx` (`perfiltipoid` ASC),
  CONSTRAINT `fk_Perfil_tipoperfil`
    FOREIGN KEY (`perfiltipoid`)
    REFERENCES `programacionnegocios1`.`tipoperfil` (`perfiltipoid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios1`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`roles` (
  `idroles` INT(11) NOT NULL AUTO_INCREMENT,
  `rolnombre` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idroles`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios1`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`usuarios` (
  `usermail` VARCHAR(45) NULL DEFAULT NULL,
  `userid` VARCHAR(20) NOT NULL,
  `userpwd` VARCHAR(45) NOT NULL,
  `usersalt` VARCHAR(45) NULL DEFAULT NULL,
  `usernombre` VARCHAR(45) NULL DEFAULT NULL,
  `usercuenta` VARCHAR(45) NULL DEFAULT NULL,
  `usercerfch` VARCHAR(45) NULL DEFAULT NULL,
  `userultacc` VARCHAR(45) NULL DEFAULT NULL,
  `userestado` VARCHAR(45) NULL DEFAULT NULL,
  `Campus_idcampus` INT(11) NOT NULL,
  `Roles_idroles` INT(11) NOT NULL,
  `perfil_perfilid` INT(11) NOT NULL,
  PRIMARY KEY (`userid`, `Campus_idcampus`, `Roles_idroles`, `perfil_perfilid`),
  INDEX `fk_Usuarios_Campus1_idx` (`Campus_idcampus` ASC),
  INDEX `fk_Usuarios_Roles1_idx` (`Roles_idroles` ASC),
  INDEX `fk_usuarios_perfil1_idx` (`perfil_perfilid` ASC),
  CONSTRAINT `fk_Usuarios_Campus1`
    FOREIGN KEY (`Campus_idcampus`)
    REFERENCES `programacionnegocios1`.`campus` (`idcampus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_perfil1`
    FOREIGN KEY (`perfil_perfilid`)
    REFERENCES `programacionnegocios1`.`perfil` (`perfilid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_Roles1`
    FOREIGN KEY (`Roles_idroles`)
    REFERENCES `programacionnegocios1`.`roles` (`idroles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios1`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`proyecto` (
  `idproyecto` INT(11) NOT NULL AUTO_INCREMENT,
  `proyectonombre` VARCHAR(45) NOT NULL COMMENT 'nombre del proyecto',
  `proyectodescripcion` VARCHAR(500) NOT NULL COMMENT 'descripcion del proyecto',
  `proyectoImagen` VARCHAR(45) NOT NULL COMMENT 'Imagen Relativa al proyecto',
  `proyectoDocumentacion` VARCHAR(45) NOT NULL COMMENT 'Documentacion que contiene Intrucciones y guia de uso del proyecto',
  `proyectoversion` VARCHAR(45) NOT NULL,
  `proyectoGitURL` VARCHAR(200) NOT NULL COMMENT 'URL de Proyecto si esta en una pagina WEB',
  `clases_idClases` INT(11) NOT NULL,
  `lenguajes_idLenguaje` INT(11) NOT NULL,
  `usuarios_userid` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idproyecto`),
  INDEX `fk_proyecto_clases1_idx` (`clases_idClases` ASC),
  INDEX `fk_proyecto_lenguajes1_idx` (`lenguajes_idLenguaje` ASC),
  INDEX `fk_proyecto_usuarios1_idx` (`usuarios_userid` ASC),
  CONSTRAINT `fk_proyecto_clases1`
    FOREIGN KEY (`clases_idClases`)
    REFERENCES `programacionnegocios1`.`clases` (`idClases`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_proyecto_lenguajes1`
    FOREIGN KEY (`lenguajes_idLenguaje`)
    REFERENCES `programacionnegocios1`.`lenguajes` (`idLenguaje`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_proyecto_usuarios1`
    FOREIGN KEY (`usuarios_userid`)
    REFERENCES `programacionnegocios1`.`usuarios` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `programacionnegocios1`.`archivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `programacionnegocios1`.`archivo` (
  `idarchivo` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'Id del Archivo que se sube del proyecto',
  `archivonombre` VARCHAR(100) NULL DEFAULT NULL COMMENT 'Nombre del Archivo',
  `archivoURL` VARCHAR(200) NULL DEFAULT NULL COMMENT 'Url del Archivo',
  `archivoTamaño` VARCHAR(100) NULL DEFAULT NULL COMMENT 'Tamaño del archivo',
  `archivoTipo` VARCHAR(100) NULL DEFAULT NULL COMMENT 'Tipo de Archivo que se subio',
  `proyecto_idproyecto` INT(11) NOT NULL,
  PRIMARY KEY (`idarchivo`),
  INDEX `fk_archivo_proyecto1_idx` (`proyecto_idproyecto` ASC),
  CONSTRAINT `fk_archivo_proyecto1`
    FOREIGN KEY (`proyecto_idproyecto`)
    REFERENCES `programacionnegocios1`.`proyecto` (`idproyecto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;







© 2015 Microsoft Términos Privacidad y cookies Desarrolladores Español
