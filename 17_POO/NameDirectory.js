class DirNames {

    constructor() {
        this.values_ = []
    }

    set pushing(value) {
        this.values_.push(value)
    }
}

const directoryName = new DirNames();
directoryName.pushing = "jose";

console.log(directoryName.values_)

function input(number) {
    return directoryName.pushing = number;
}

input(number = "miguel")
input("fernando")
console.log(directoryName.values_)