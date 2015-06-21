-- Table `ProgramacionNegocios`.`tipoperfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProgramacionNegocios`.`tipoperfil` (
  `perfiltipoid` INT NOT NULL,
  `tipoperfildescription` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`perfiltipoid`))
ENGINE = InnoDB;
