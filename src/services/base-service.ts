import axios from 'axios'
import Vue from 'vue'

export const baseAxios = axios.create({
    baseURL: 'https://sample-accounts-api.herokuapp.com'
})

export default class BaseService {
    static get resource(): string {
        throw new Error('Resource getter is not defined!')
    }

    static get $axios() {
        return baseAxios
    }

    static errorHandler(err: any) {
        const vm: { $loading: any } = new Vue()
        vm.$loading?.progressOff()
        console.log(err)
    }

    static responseWrapper(res: { data: object }) {
        return res.data
    }

    static async get(id: string|number) {
        try {
            const response = await this.$axios.get(`${this.resource}/${id}`)
            return this.responseWrapper(response)
        } catch (err) {
            this.errorHandler(err)
        }
    }
}
