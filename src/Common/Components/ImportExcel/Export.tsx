// import * as ExcelJS from 'exceljs';

// export const excelDownload = async (module: any, excelData: any, headers: any, sheetName: any, lockedColumns: any, dataset: any) => {
//     let headerRowNumber = 1;
//     const boldBlueFont: any = {
//         font: { bold: true, color: { argb: 'FFFFFF' } },
//         fill: {
//             type: 'pattern',
//             pattern: 'solid',
//             fgColor: { argb: '006120' },
//         },
//     };
//     const timestamp: any = new Date()
//         .toISOString()
//         .replace(/[-:.]/g, '')
//         .replace('T', '_')
//         .replace('z', '');

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet(sheetName);

//     worksheet.columns = headers;
//     if (module === 'datasetFieldsInfo') {
//         worksheet.addRow({
//             columnOne: 'DatasetType',
//             columnTwo: dataset,
//         });

//         worksheet.getCell('A1').font = { bold: true };
//         worksheet.getCell('A2').font = { bold: true };

//         worksheet.addRow({});
//         worksheet.addRow({
//             columnOne: 'Name',
//             columnTwo: 'IsAdjustable',
//             columnThree: 'Definition',
//         });

//         headerRowNumber = 4;
//     }

//     excelData.forEach((field: any) => {
//         worksheet.addRow(field);
//     });

//     for (let i = 0; i < headers.length; i++) {
//         let columnLetter: any = String.fromCharCode(65 + i);
//         const cellAddress: any = `${columnLetter}${headerRowNumber}`;

//         worksheet.getCell(cellAddress).font = boldBlueFont.font;
//         worksheet.getCell(cellAddress).fill = boldBlueFont.fill;
//     }

//     lockedColumns.forEach((column: any) => {
//         worksheet.getColumn(column).eachCell((cell, rowNumber) => {
//             if (rowNumber > headerRowNumber) {
//                 cell.protection = { locked: false };
//             }
//         });
//     });

//     worksheet.protect(${ Math.random() }, {
//         selectLockedCells: true,
//         selectUnlockedCells: true,
//         formatCells: true,
//         formatColumns: true,
//         formatRows: true,
//         insertRows: false,
//         insertColumns: false,
//         insertHyperlinks: true,
//         deleteColumns: false,
//         deleteRows: false,
//         sort: true,
//         autoFilter: true,
//         pivotTables: true,
//     });

//     const buffer: any = await workbook.xlsx.writeBuffer();
//     const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

//     let link: any = document.createElement('a');
//     link.href = window.URL.createObjectURL(blob);

//     link.download = `${sheetName}_${timestamp}.xlsx`;

//     link.click();
// };