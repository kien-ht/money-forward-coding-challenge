import BaseService from "./base-service";

export default class AccountService extends BaseService {
  static get resource(): string {
    return "/accounts";
  }

  static async getAccountDetail(id: string): Promise<unknown> {
    return await this.get(id);
  }
}
