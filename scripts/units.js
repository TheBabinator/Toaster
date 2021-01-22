const toasterBase = require("unit/toasterbase")

const miningToaster = toasterBase.add("mining-toaster", 
{}, 
{}, 
{
    updateUnit() {
        if(this.random.chance(1)){
            let x = this.random.range(1);
            let y = this.random.range(1);
            this.vec.set(x, y);
            this.vec.setLength(this.unit.realSpeed());
            this.vec.set(this.unit.x + this.vec.x, this.unit.y + this.vec.y);
            this.unit.lookAt(this.vec);
        }
        if(this.random.chance(0.2)){
            this.vec.set(Mathf.cosDeg(this.unit.rotation), Mathf.sinDeg(this.unit.rotation));
            this.vec.setLength(this.unit.realSpeed());
            this.unit.moveAt(this.vec);
        }
    },
    random: new Rand(0),
}
);

module.exports = {
    miningToaster: miningToaster,
};
