import {mongoCollection} from "../db/mongoDB";

class AuthRepository {
    async findUser(email: string) {
      return  await mongoCollection.findOne( {email})
    }

    async createUser(email: string, hashPassword: string) {
        const createStatus = await mongoCollection.insertOne({email, hashPassword})
        if (createStatus) {
            return true
        }
        return false
    }

}

export default new AuthRepository()