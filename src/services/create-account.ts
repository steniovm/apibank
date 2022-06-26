import {
  Account, Customer, NewAccount, ApiResponse,
} from '../models';
import { CustomerDataValidation } from '../modules/customer-data-validator';

class CreateAccount {
  public async routine(data: NewAccount): Promise<CustomerDataValidation> {
    const newCustomer: Customer = data.newcustomer;
    const newAccount: Account = data.newaccount;

    const validatedCustomer = new CustomerDataValidation(newCustomer);

    return validatedCustomer;
  }
}

export { CreateAccount };