// Your code here
class Polygon {
    constructor(arrOfSides) {
        this.arrOfSides = arrOfSides
    }
    get countSides() {
        return this.arrOfSides.length
    }
    get perimeter() {
        return this.arrOfSides.reduce(((previous, current) => previous + current), 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const x = this.arrOfSides
        //debugger
        
        if ((x[0] + x[1]) >= x[2] && (x[1] + x[2]) >= x[0] && (x[0] + x[2]) >= x[1]) {
            return true
        }
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.arrOfSides[0] === this.arrOfSides[1]) {
            if (this.arrOfSides[1] === this.arrOfSides[2]) {
                if (this.arrOfSides[2] === this.arrOfSides[3]) {
                    return true
                }
            }
        }
        return false
    }
    get area() {
        return Math.pow(this.arrOfSides[0],2)
    }
}