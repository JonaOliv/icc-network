-- Table `ProgramacionNegocios`.`Campus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProgramacionNegocios`.`Campus` (
  `idcampus` INT NOT NULL AUTO_INCREMENT,
  `campusnombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcampus`))
ENGINE = InnoDB;
