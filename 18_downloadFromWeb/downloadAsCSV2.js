const rows = [
    ["name1", "new york", "abc"],
    ["name2", "san francisco", "def"]
];
const csvContent = `data:text/csv;charset=utf-8,${rows
    .map((e) => e.join(","))
    .join("\n")}`;
const encodedUri = encodeURI(csvContent);
window.open(encodedUri);