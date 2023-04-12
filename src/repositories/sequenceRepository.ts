
import { Sequence } from "@prisma/client";
import prisma from "../dataBase/prismaClient";


const selectwithoutpassword = {
  id: true,
  email: true,
  name: true,
  phone: true,
  birth: true,
  typeUserId: true,
};

class SequenceRepository {
    async getUsers(): Promise<Array<any>> {
      return await prisma.sequence.findMany({
      
      });
    }
    
  }


  export default new SequenceRepository();