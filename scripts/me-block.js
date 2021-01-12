function extend(name) {
    const content = extendContent(PowerBlock, name, {
        
    });

    content.buildType = prov((x) => extend(Building, {
        update(build) {
            print(build)
        },
    }))

    return content;
}

module.exports = {
    extend: extend,
}
