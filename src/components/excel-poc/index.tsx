// src/components/ExcelData.tsx

import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

interface ExcelRow {
  [key: string]: string | number | boolean | null;
}

const ExcelData: React.FC = () => {
  const [jsonData, setJsonData] = useState<ExcelRow[]>([]);

  const fetchData = async () => {
    try {
      const url =
        "https://docs.google.com/spreadsheets/d/19iSN5IH_bClpC3MAk6bR1kt1x5kpwV3k75yYzmmfd4c/edit?usp=sharing";
      const response = await axios.get(url, {
        responseType: "arraybuffer",
      });
      const arrayBuffer = response.data;

      const array = new Uint8Array(arrayBuffer);
      const binaryString = String.fromCharCode.apply(null, array as any);

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
      console.log(sheetData);
      setJsonData(sheetData as any);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const convertToDesiredFormat = (inputArray: any[]) => {
    return inputArray.slice(1).map((item: any) => ({
      type: item.B || "",
      date:
        typeof item.C === "number"
          ? new Date(item.C).toDateString()
          : item.C || "",
      author: item.D || "",
      title: item.E || "",
      description: item.F || "",
      completeDescription: item.F ? item.F.slice(0, 100) : "", // Adjust the number to your desired length
      image: item.G || "",
    }));
  };
  return (
    <div>
      <button onClick={() => convertToDesiredFormat(jsonData)}>
        Fetch Excel Data
      </button>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default ExcelData;
