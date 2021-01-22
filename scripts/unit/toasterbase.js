function add(name, unit, construct, controller) {
    const content = extend(UnitType, name, unit);
    content.constructor = () => extend(MechUnit, construct);
    content.defaultController = () => extend(AIController, controller);

    return content;
}

module.exports = {
    add: add,
}
