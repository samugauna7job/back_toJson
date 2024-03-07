import { Router } from "express";
export const router = Router()
import multer from "multer";
import XLSX from "xlsx"

let workbook = XLSX.readFile(ruta)
    const workSheet = workbook.Sheets[workbook.SheetNames[0]];
    const dataExcel = XLSX.utils.sheet_to_json(workSheet);
//  data excel es el array

// Multer middleware for handling multipart/form-data
const upload = multer();

// POST endpoint for uploading Excel file
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        // Process jsonData and save to database
        // Example: saveDataToDatabase(jsonData);
        res.status(200).send('File uploaded and processed successfully.');
    } catch (error) {
        console.error('Error processing uploaded file:', error);
        res.status(500).send('Error processing uploaded file.');
    }
});

