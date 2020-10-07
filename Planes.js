class Plane{
    constructor(plane){
        this.name = plane
        this.boarded = []
    }
    boardPlane(...person){
        this.boarded.push(...person)
    }
}

module.exports = Plane