exports.csvFileGenerator = (userinput,filePath) =>{
    const fastcsv = require('fast-csv');
    const fs = require('fs');
    const ws = fs.createWriteStream(filePath);
    return new Promise((resolve, reject) => {
        fastcsv.write(userinput,{ rowDelimiter: ',' })
        .pipe(ws)
        .on('finish', resolve)
        .on('error', reject)
        process.stdout.write('CSV created');
    });
}