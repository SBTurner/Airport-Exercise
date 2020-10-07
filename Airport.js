class Airport{
    //keeps a log
    static airstatus = []

    constructor(name){
        this.name = name
        this.planes = []
        //used to push the whole of the constructor (including name and planes to the airstatus variable. This can be accessed by Aiport.airstatus)
        this.constructor.airstatus.push(this)
    }
    landPlane(...plane){
        this.planes.push(...plane)
    }
    takeOffPlane(plane){
        //find the plane in the airport, use splice to remove the plane from the this.planes
        var ind = this.planes.findIndex(p => p = plane.name)
        this.planes.splice(ind,1)
    }
}

module.exports = Airport