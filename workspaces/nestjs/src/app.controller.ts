import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Contact, User} from "@monorepo/common";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser2():User {

    const user: User = {
      email: "asd", firstName: "asd", lastName: "asd", profilePic: "asdasd"

    }

    return user;
  }


  @Get('contact')
  getContacto():Contact {

    const c:Contact = {
      subject: "asdas",
      phones: []
    }

    return c;
  }
}
