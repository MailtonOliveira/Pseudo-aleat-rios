import xlsx from "xlsx";
import excelRepository from "../repositories/excelRepository";

class randNumGenService {
//   private readonly excelRepository: ExcelRepository;

//   constructor(excelRepository: ExcelRepository) {
//     this.excelRepository = excelRepository;
//   }

  public static async generateRandomNumbers(
    maxNumber: number,
    count: number
  ): Promise<number[]> {
    const workbook = await excelRepository.readWorkbook();
    const sheet = workbook.Sheets["mega"];
    
    const randomNumbers = this.extractNumbersFromSheet(sheet).filter((cell) => typeof cell === "number")
      .filter((randomNumber, index, self) => {
        // Filtra os números que já foram sorteados
        return (
          randomNumber <= maxNumber && !self.slice(0, index).includes(randomNumber)
        );
      })
      .sort(() => Math.random() - 0.5) // Embaralha a ordem dos números
      .slice(0, count); // Seleciona os primeiros 'count' números

    return randomNumbers;
  }

  static extractNumbersFromSheet(sheet: xlsx.WorkSheet): any[] {
    const range = {
      s: { c: 2, r: 7 },
      e: { c: 7, r: (sheet["!ref"] ?? 'H7').split(":")[1] },
    };
    const header = ["A", "B", "C", "D", "E", "F", "G", "H"];
    return xlsx.utils.sheet_to_json(sheet, { range, header }).flat();
  }
}

export default randNumGenService;