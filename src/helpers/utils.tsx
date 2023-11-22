import axios from "axios";
import * as XLSX from "xlsx";

export const fetchData = async (url: string, sheetNumber: number = 0) => {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });
    const arrayBuffer = response.data;

    const array = new Uint8Array(arrayBuffer);
    const decoder = new TextDecoder("utf-8");
    const binaryString = decoder.decode(array);
    /* Call XLSX */
    const workbook = XLSX.read(binaryString, {
      type: "binary",
      WTF: true,
    });

    /* DO SOMETHING WITH workbook HERE */
    const firstSheetName = `Sheet${sheetNumber + 1}`;

    /* Get worksheet */
    const worksheet = workbook.Sheets[firstSheetName];
    // Extract headers from the first row
    const headers = XLSX.utils.sheet_to_json(worksheet, { header: 1 })[0];
    const sheetData = XLSX.utils.sheet_to_json(worksheet, {
      header: headers as any,
    });
    const filledRows = sheetData.filter(
      (row: any) => row.A !== null && row.A !== undefined
    );
    filledRows.shift();
    return filledRows;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const EXCEL_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxX0KX5GkKrkFLe9MgoLRrUuBBveAxZwNus-RSyjEwxfj3Dx-SpcCm7ooNIKaCtNpfuYQ/exec";
