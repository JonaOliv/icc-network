-- Table `ProgramacionNegocios`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ProgramacionNegocios`.`Usuarios` (
  `usermail` VARCHAR(45) NULL,
  `userid` VARCHAR(20) NOT NULL,
  `userpwd` VARCHAR(45) NOT NULL,
  `usersalt` VARCHAR(45) NULL,
  `usernombre` VARCHAR(45) NULL,
  `usercuenta` VARCHAR(45) NULL,
  `usercerfch` VARCHAR(45) NULL,
  `userultacc` VARCHAR(45) NULL,
  `userestado` VARCHAR(45) NULL,
  `Campus_idcampus` INT NOT NULL,
  `Roles_idroles` INT NOT NULL,
  PRIMARY KEY (`userid`, `Campus_idcampus`, `Roles_idroles`),
  INDEX `fk_Usuarios_Campus1_idx` (`Campus_idcampus` ASC),
  INDEX `fk_Usuarios_Roles1_idx` (`Roles_idroles` ASC),
  CONSTRAINT `fk_Usuarios_Campus1`
    FOREIGN KEY (`Campus_idcampus`)
    REFERENCES `ProgramacionNegocios`.`Campus` (`idcampus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_Roles1`
    FOREIGN KEY (`Roles_idroles`)
    REFERENCES `ProgramacionNegocios`.`Roles` (`idroles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
