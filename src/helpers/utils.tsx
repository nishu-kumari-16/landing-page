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
    });

    /* DO SOMETHING WITH workbook HERE */
    const firstSheetName = workbook.SheetNames[sheetNumber];
    /* Get worksheet */
    const worksheet = workbook.Sheets[firstSheetName];
    const sheetData = XLSX.utils.sheet_to_json(worksheet, {
      raw: true,
    });
    console.log(sheetData, worksheet);
    const filledRows = sheetData.filter(
      (row: any) => row.A !== null && row.A !== undefined
    );

    console.log(filledRows);
    return filledRows;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const EXCEL_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxX0KX5GkKrkFLe9MgoLRrUuBBveAxZwNus-RSyjEwxfj3Dx-SpcCm7ooNIKaCtNpfuYQ/exec";
