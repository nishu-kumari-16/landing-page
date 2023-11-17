import axios from "axios";
import * as XLSX from "xlsx";

export const fetchData = async (url: string) => {
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
    const firstSheetName = workbook.SheetNames[0];
    /* Get worksheet */
    const worksheet = workbook.Sheets[firstSheetName];
    const sheetData = XLSX.utils.sheet_to_json(worksheet, {
      raw: true,
    });
    const filledRows = sheetData.filter(
      (row: any) => row.A !== null && row.A !== undefined
    );

    return filledRows;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
