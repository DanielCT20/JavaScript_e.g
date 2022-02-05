const rows = [
    ["name1", "new york", "abc"],
    ["name2", "san francisco", "def"]
];

const csvContent = `data:text/csv;charset=utf-8,${rows
    .map((e) => e.join(","))
    .join("\n")}`;

const encodedUri = encodeURI(csvContent);
const link = document.createElement("a");

link.setAttribute("href", encodedUri);
link.setAttribute("download", "data.csv");
document.body.appendChild(link);
link.click()