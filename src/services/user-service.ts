import BaseService, { baseAxios } from "./base-service";
export default class UserService extends BaseService {
  static get resource(): string {
    return "/users";
  }
  static async getUser(id: string): Promise<unknown> {
    return await this.get(id);
  }
  static async getUserAccountList(id: string): Promise<unknown> {
    try {
      const response = await baseAxios.get(`${this.resource}/${id}/accounts`);
      return this.responseWrapper(response);
    } catch (err) {
      this.errorHandler();
    }
  }
}
