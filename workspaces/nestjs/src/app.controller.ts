import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Contacto, Secondinterface, User} from "@monorepo/common";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser2():User {

    const user: User = {
      campo: "",
      email: "asd", firstName: "asd", lastName: "asd", profilePic: "asdasd"

    }

    return user;
  }

  @Get('dos')
  getUser4():Secondinterface {

    const prueba: Secondinterface = {
      otraCosa: false, unapropiedad: ""

    }

    return prueba;
  }

  @Get('contacto')
  getContacto():Contacto {

    const c:Contacto = {
      subject: "asdas"

    }

    return c;
  }
}
