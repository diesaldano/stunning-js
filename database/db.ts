import allData from './data'

class Database {
    constructor(){}

    async getAllData(){
        const asArray = Object.values(allData)
        return asArray
    }

    async getDataById(id: string){
        const entry = allData[id]
        return entry
    }
}

export default Database;