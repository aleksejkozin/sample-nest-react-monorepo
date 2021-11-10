import {Length} from "class-validator";

export class Phone {

    @Length(3)
    asd: string = '';

    @Length(9, 11)
    number: string = "";
}
