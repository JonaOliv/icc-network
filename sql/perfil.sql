-- Table `ProgramacionNegocios`.`Perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProgramacionNegocios`.`Perfil` (
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `fechanac` DATE NOT NULL,
  `tel` VARCHAR(45) NOT NULL,
  `cel` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `perfiltipoid` INT NOT NULL,
  `Usuarios_userid` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`perfiltipoid`, `Usuarios_userid`),
  INDEX `fk_Perfil_tipoperfil_idx` (`perfiltipoid` ASC),
  INDEX `fk_Perfil_Usuarios1_idx` (`Usuarios_userid` ASC),
  CONSTRAINT `fk_Perfil_tipoperfil`
    FOREIGN KEY (`perfiltipoid`)
    REFERENCES `ProgramacionNegocios`.`tipoperfil` (`perfiltipoid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Perfil_Usuarios1`
    FOREIGN KEY (`Usuarios_userid`)
    REFERENCES `ProgramacionNegocios`.`Usuarios` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
