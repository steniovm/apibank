import { Account } from "./account";
import { Transition } from "./transition";
import { User } from "./user";

interface Extract {
    accont: Account
    user: User
    id: string
    init_date: string
    finish_date: string
    transition: Transition[]
}

export { Extract };
