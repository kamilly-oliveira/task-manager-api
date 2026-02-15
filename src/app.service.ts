import { Injectable } from "@nestjs/common";
import { UserRepository } from "./infra/db/repositories/user.repository";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }
}
