ServerEvents.recipes(event => {
    event.shaped('gtceu:large_inscriber', 
        ['ACA',
        'CDC',
        'AEA'], 
        { A: 'gtceu:mv_electric_piston',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        E: 'gtceu:mv_robot_arm',})

    function inscriberrecipe (prefix, type, item, fluid) {
        event.recipes.gtceu.inscriber('kubejs:inscriber/'+type+'_processor_fn')
            .notConsumable('ae2:silicon_press')
            .notConsumable(prefix+':'+type+'_processor_press')
            .itemInputs('#forge:silicon')
            .itemInputs(item)
            .inputFluids(Fluid.of(fluid, 144))
            .itemOutputs(prefix+':'+type+'_processor')
            .duration(8)
            .EUt(60)
        event.recipes.gtceu.inscriber('kubejs:inscriber/'+type+'_processor_universal_fn')
            .notConsumable('kubejs:universal_press')
            .itemInputs('#forge:silicon')
            .itemInputs(item)
            .inputFluids(Fluid.of(fluid, 144))
            .itemOutputs(prefix+':'+type+'_processor')
            .duration(8)
            .EUt(60)
    }

    inscriberrecipe('ae2','logic','minecraft:gold_ingot','gtceu:redstone')
    inscriberrecipe('ae2','engineering','#forge:ingots/gold','gtceu:redstone')
    inscriberrecipe('ae2','calculation','#forge:gems/certus_quartz','gtceu:redstone')
    inscriberrecipe('megacells','accumulation','#forge:ingots/sky_steel','gtceu:fluix_extract')
    inscriberrecipe('appflux','energy','appflux:charged_redstone','gtceu:redstone')

    /**
    event.recipes.gtceu.inscriber('kubejs:large_inscriber/logic_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:logic_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:ingots/gold')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:logic_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.inscriber('kubejs:large_inscriber/engineering_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:engineering_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:gems/diamond')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:engineering_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.inscriber('kubejs:large_inscriber/calculation_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:calculation_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:gems/certus_quartz')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:calculation_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.inscriber('kubejs:large_inscriber/accumulation_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('megacells:accumulation_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:ingots/sky_steel')
        .inputFluids(Fluid.of('gtceu:fluix_extract', 144))
        .itemOutputs('megacells:accumulation_processor')
        .duration(8)
        .EUt(60)

    let universal_press = 'kubejs:universal_press'

    event.recipes.gtceu.inscriber('kubejs:large_inscriber/logic_processor_universal')
        .notConsumable(universal_press)
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:ingots/gold')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:logic_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.inscriber('kubejs:large_inscriber/engineering_processor_universal')
        .notConsumable(universal_press)
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:gems/diamond')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:engineering_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.inscriber('kubejs:large_inscriber/calculation_processor_universal')   
        .notConsumable(universal_press)
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:gems/certus_quartz')
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('ae2:calculation_processor')
        .duration(8)
        .EUt(60)
      
    event.recipes.gtceu.inscriber('kubejs:large_inscriber/accumulation_processor_universal')
        .notConsumable(universal_press)
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:ingots/sky_steel')
        .inputFluids(Fluid.of('gtceu:fluix_extract', 144))
        .itemOutputs('megacells:accumulation_processor')
        .duration(8)
        .EUt(60)
    /** */
    //
})