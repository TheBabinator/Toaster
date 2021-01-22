const attributeCrafter = require("block/attributecrafter")
const turbineGenerator = require("block/turbinegenerator")

const geothermalBoiler = attributeCrafter.add("geothermal-boiler");
const advancedTurbine = turbineGenerator.add("advanced-turbine");
const toasterAssembler = require("unit/toasterassembler")

module.exports = {
    geothermalBoiler: geothermalBoiler,
    advancedTurbine: advancedTurbine,
    toasterAssembler: toasterAssembler,
};
