import BaseService from './base-service'

export default class UserService extends BaseService {
    static get resource(): string {
        return '/users'
    }

    static async getUser(id: string) {
        return await this.get(id)
    }

    static async getUserAccountList(id: string) {
        try {
            const response = await this.$axios.get(`${this.resource}/${id}/accounts`)
            return this.responseWrapper(response)
        } catch (err) {
            this.errorHandler(err)
        }
    }
}