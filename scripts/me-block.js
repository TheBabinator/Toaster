function extend(name) {
    const content = extendContent(Block, name, {
        
    });

    content.solid = true
    content.destructible = true

    content.buildType = () => extend(Building, {
        placed() {
            this.super$placed()
            log("hello")
        },
        updateTile() {
            this.super$updateTile()
            log("updat")
        },
    })

    return content
}

module.exports = {
    extend: extend,
}
