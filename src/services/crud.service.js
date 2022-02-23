import http from '../http'

export default class Crud {
    constructor(models) {
        this.models = models
        this.getAll = this.getAll.bind(this);
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    getOneBy(field, value){
        return http.get(`/${this.models}?${field}=${value}`)
    }
    getAll(){
        return http.get(`/${this.models}`)
    }
    get(any){
        return http.get(`/${this.models}/${any}`)
    }
    create(data){
        return http.post(`/${this.models}`, data)
    }
    update(id, data){
        return http.put(`/${this.models}/${id}`, data)
    }
    delete(id){
        return http.delete(`/${this.models}/${id}`)
    }
}