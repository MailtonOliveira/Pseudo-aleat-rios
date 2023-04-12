import { ERRORS } from "../constants/errors";
import { Request, Response, NextFunction } from "express";
import randNumGenService from "../services/RandNumService";

class RandNumGenController {

  public async generateRandomNumbers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const maxNumber = 60;
      const count = 6;
      const randomNumbers = await randNumGenService.generateRandomNumbers(
        maxNumber,
        count
      );
      res.status(200).json({ randomNumbers });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export  default RandNumGenController;
