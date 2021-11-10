import {IsEmail, Length, ValidateNested} from "class-validator";
// import {Phone} from "./phone";

export class Contacto {
    @Length(10, 20)
    subject: string;

    @IsEmail({}, {
        message: 'El valor $value no parece un email válido'
    })
    email?: string;

    // @ValidateNested()
    // phones: Phone[]

}
