function add(name) {
    const content = extendContent(AttributeSmelter, name, {
        
    });
    content.buildType = () => extendContent(AttributeSmelter.AttributeSmelterBuild, content, {
        draw() {
            Draw.rect(content.region, this.tile.drawx(), this.tile.drawy());
        }
    });
    return content;
}

module.exports = {
    add: add,
}
