const rows = [
    ["name1", "new york", "abc"],
    ["name2", "san francisco", "def"]
];

let csvContent = "data:text/csv;charset=utf-8,";

for (const rowArray of rows) {
    const row = rowArray.join(",");
    csvContent += `${row}\r\n`;
}

const encodedUri = encodeURI(csvContent);
window.open(encodedUri);