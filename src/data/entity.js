import {emailRegex, phoneNumberRegex} from "@/lib/regex";

export default class Entity{
    constructor({name,surname,phone,email}) {
        if(!email.match(emailRegex))
        {
            throw new InvalidEmailError();
        }
        if(!phone.match(phoneNumberRegex)){
            throw new InvalidPhoneError();
        }

        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = email;
    }

    static getFields(){
        return [new Field("name","name"), new Field("surname","surname"),new Field("phone","phone"),new Field("email","email")]
    }
}

export class Field{
    constructor(key,en) {
        this.key = key;
        this.en = en;
    }
}

export class InvalidPhoneError extends SyntaxError {
    name = "InvalidPhoneError"
}

export class InvalidEmailError extends SyntaxError{
    name = "InvalidEmailError"
}
