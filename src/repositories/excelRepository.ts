import * as xlsx from "xlsx";
import path from "path";

 class excelRepository {
  public async readWorkbook(): Promise<xlsx.WorkBook> {
    const workbook = xlsx.readFile(path.resolve("./mega.xlsx"));
    return workbook;
  }
}

export default new excelRepository;