import { ERRORS } from "../constants/errors";
import { Request, Response, NextFunction } from "express";
import { Sequence } from "@prisma/client";
import SequenceService from '../services/SequenceService'

class SequenceController {

  async listSequences(req: Request, res: Response, next: NextFunction) {
    try {
      const listSequences: Array<Sequence> = await SequenceService.getUsers();
      res.json({ listSequences });
    } catch (error) {
      return next(error);
    }
  }
}


export default SequenceController;