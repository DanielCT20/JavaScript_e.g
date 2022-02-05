const rows = [
    ["name1", "new york", "abc"],
    ["name2", "san francisco", "def"]
];

const csvContent = rows
    .map((e) => e.join(","))
    .join("\n");

const blob = new Blob([csvContent], {
    type: 'text/csv;charset=utf-8;'
});

const url = URL.createObjectURL(blob);

const link = document.createElement("a");
link.setAttribute("href", url);
link.setAttribute("download", "data.csv");
document.body.appendChild(link);
link.click()
URL.revokeObjectURL(link.href)