import axios from "axios";
import Vue from "vue";
export const baseAxios = axios.create({
  baseURL: "https://sample-accounts-api.herokuapp.com",
});
export default class BaseService {
  static get resource(): string {
    throw new Error("Resource getter is not defined!");
  }
  static errorHandler(): void {
    const vm: { $loading: HTMLFormElement } = new Vue();
    vm.$loading?.progressOff();
  }
  static responseWrapper(res: { data: unknown }): unknown {
    return res.data;
  }
  static async get(id: string | number): Promise<unknown> {
    try {
      const response = await baseAxios.get(`${this.resource}/${id}`);
      return this.responseWrapper(response);
    } catch (err) {
      this.errorHandler();
    }
  }
}
