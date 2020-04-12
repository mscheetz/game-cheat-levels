class Level {
    constructor(id, world, virusCount, attributes) {
        this.id = id;
        this.world = world;
        this.virusCount = virusCount;
        this.attributes = attributes;
    }
    
    id = 0;
    world = 0;
    virusCount = 0;
    attributes = 0;
}

module.exports = Level;