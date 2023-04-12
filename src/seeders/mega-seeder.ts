import * as xlsx from "xlsx";
import path from "path";

function generateRandomNumbers(
  sheet: xlsx.WorkSheet,
  maxNumber: number,
  count: number
): number[] {
  // Extrai os números da tabela em um array
  const range = {
    s: { c: 2, r: 7 },
    e: { c: 7, r: (sheet["!ref"] ?? 'H7').split(":")[1] },
  }; // Define a range para ler as colunas C até H a partir da linha 8
  const header = ["A", "B", "C", "D", "E", "F", "G", "H"]; // Define o cabeçalho das colunas
  const numbers = xlsx.utils
    .sheet_to_json(sheet, { range, header })
    .flat()
    .filter((cell) => typeof cell === "number");

  let randomNumbers: number[] = [];

  while (randomNumbers.length < count && numbers.length > 0) {
    const index = Math.floor(Math.random() * numbers.length);
    const randomNumber: any = numbers.splice(index, 1)[0];
    if (randomNumber <= maxNumber && !randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}

// Lê o arquivo Excel
const workbook = xlsx.readFile(path.resolve("mega.xlsx"));
console.log(workbook);

// Seleciona a planilha
const sheet = workbook.Sheets["mega"];

// Gera 6 números pseudoaleatórios de 01 a 60 sem repetição
const randomNumbers = generateRandomNumbers(sheet, 60, 6);

console.log(randomNumbers);
