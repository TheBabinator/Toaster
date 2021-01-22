const toasterAssembler = extendContent(UnitFactory, "toaster-assembler", {
    init() {
        this.plans = Seq.with(
            new UnitFactory.UnitPlan(
                global.toaster.units.miningToaster,
                900,
                ItemStack.with(Items.silicon, 10, Items.titanium, 4),
            ),
        );
        this.super$init();
    },
});

module.exports = {
    toasterAssembler: toasterAssembler,
}
