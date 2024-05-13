GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_inscriber')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_inscriber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_inscriber')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'COC')
            .aisle('CKC', 'CXC', 'CXC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('ae2:inscriber'))
            .where('Z', Predicates.blocks('gtceu:mv_forming_press'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/large_chemical_reactor', false)
    
    /**event.create('advanced_large_inscriber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_inscriber')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'COC')
            .aisle('CKC', 'CXC', 'CXC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('ae2:inscriber'))
            .where('Z', Predicates.blocks('gtceu:mv_forming_press'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/large_chemical_reactor', false) /** */
})

const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fluix_extract')['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().state(GTFluidState.LIQUID))
    .color(0x614EAA)

})

ServerEvents.recipes(event => {
    event.shaped('gtceu:large_inscriber', 
        ['ACA',
        'CDC',
        'AEA'], 
        { A: 'gtceu:mv_electric_piston',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        E: 'gtceu:mv_robot_arm',})

    event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/logic_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:logic_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:ingots/gold')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:logic_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/engineering_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:engineering_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:gems/diamond')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:engineering_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/calculation_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:calculation_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:gems/certus_quartz')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:calculation_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.large_inscriber('kubejs:large_inscriber/accumulation_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('megacells:accumulation_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:ingots/sky_steel')
        .inputFluids(Fluid.of('gtceu:fluix_extract', 144))
        .itemOutputs('megacells:accumulation_processor')
        .duration(8)
        .EUt(60)

    //
})