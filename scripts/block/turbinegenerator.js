function extend(name) {
    const content = extendContent(PowerGenerator, name, {
        load() {
            this.super$load();
            this.baseRegion = Core.atlas.find(this.name);
            this.turbineRegion = Core.atlas.find(this.name + "-turbine");
            this.topRegion = Core.atlas.find(this.name + "-top");
        },
        icons() {
            return [
                Core.atlas.find(this.name),
                Core.atlas.find(this.name + "-turbine"),
                Core.atlas.find(this.name + "-top"),
            ];
        },
    });
    content.buildType = () => extendContent(PowerGenerator.GeneratorBuild, content, {
        init(tile, team, shouldAdd, rotation) {
            this.turbineRotation = 0;
            this.turbineSpeed = 0;
            this.turbineEfficiency = 0;
            return this.super$init(tile, team, shouldAdd, rotation);
        },
        updateTile() {
            this.super$updateTile();
            const pressure = this.liquids.total() / content.liquidCapacity;
            this.turbineSpeed += pressure * 0.015;
            this.turbineSpeed -= 0.005;
            this.turbineSpeed = Mathf.clamp(this.turbineSpeed, 0, 1);
            this.turbineEfficiency += this.turbineSpeed * 0.0002;
            this.turbineEfficiency -= 0.0001;
            this.turbineEfficiency = Mathf.clamp(this.turbineEfficiency, 1, 1.5);
            this.turbineRotation += this.turbineSpeed * 6;
            this.turbineRotation = this.turbineRotation % 360;
            this.productionEfficiency = this.turbineSpeed * this.turbineEfficiency;
            if (Mathf.chance(pressure * 0.2)) {
                Fx.steam.at(this.tile.drawx(), this.tile.drawy(), 2);
            }
        },
        draw() {
            Draw.rect(content.baseRegion, this.tile.drawx(), this.tile.drawy());
            Draw.rect(content.turbineRegion, this.tile.drawx(), this.tile.drawy(), this.turbineRotation);
            Draw.rect(content.topRegion, this.tile.drawx(), this.tile.drawy());
        },
    });
    return content;
}

module.exports = {
    extend: extend,
}
