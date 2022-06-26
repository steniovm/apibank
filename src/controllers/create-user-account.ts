import { Request, Response } from 'express';
import { CreateAccount } from '../services';

class CustomerAccount {
  private service = CreateAccount;

  public async create(req: Request, res: Response) {
    try {
      const response = await new this.service().routine(req.body);

      if (!response.errors) {
        res.status(201);
        res.type('application/json');
        res.send(response.user);
      } else {
        throw new Error(`${response.errors}`);
      }
    } catch (err) {
      const errorLog = String(err).trim().split('|');
      const error = { error: err };
      res.status(400);
      res.type('application/json');
      res.send({ Errors: errorLog });
    }
  }
}

export { CustomerAccount };