import { Sequence } from '@prisma/client';
import sequenceRepository from '../repositories/sequenceRepository'


class sequenceService {

    getUsers(): Promise<Array<Sequence>>{

        return  sequenceRepository.getUsers()
    }
}

export default new sequenceService();