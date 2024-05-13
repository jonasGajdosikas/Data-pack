ServerEvents.recipes(event => {
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "output": Item.of("arseng:creative_source_cell").toJson(),
        "pedestalItems": [
            {"item": Ingredient.of('ars_nouveau:manipulation_essence').toJson()},
            {"item": Ingredient.of('ars_nouveau:manipulation_essence').toJson()},
            {"item": Ingredient.of('ars_nouveau:manipulation_essence').toJson()},
            {"item": Ingredient.of('ars_nouveau:creative_source_jar').toJson()},
            {"item": Ingredient.of('ars_nouveau:creative_source_jar').toJson()},
            {"item": Ingredient.of('megacells:bulk_cell_component').toJson()},
            {"item": Ingredient.of('ae2:singularity').toJson()},
            {"item": Ingredient.of('ae2:singularity').toJson()}
        ],
        "reagent": [Item.of("megacells:mega_source_cell_housing").toJson()],
        "sourceCost": 10000
    }).id('kubejs:ae2/creative_source_cell')

    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
        {
            "item": "megacells:mega_mana_cell_housing"
        },
        {
            "item": "botania:creative_pool"
        },
        {
            "item": "megacells:bulk_cell_component"
        }
        ],
        "mana": 100000,
        "result": {
            "item": "appbot:creative_mana_cell"
        }
    }).id(`kubejs:terra/allthemodium_vibranium_allthemodium_alloy_ingot`)

    event.shaped('thermal:machine_efficiency_creative_augment', ['ESE', 'SAS', 'ESE'], {
        E: 'thermal_extra:machine_efficiency_augment_4',
        S: 'thermal_extra:machine_speed_augment_4',
        A: 'allthetweaks:atm_star',
    }).id('kubejs:thermal/augments/creative_efficiency')

    event.shaped('thermal:machine_catalyst_creative_augment', ['ESE', 'SAS', 'ESE'], {
        A: 'thermal_extra:machine_catalyst_augment_3',
        S: 'thermal_extra:dragonsteel_gear',
        E: 'allthetweaks:atm_star',
    }).id('kubejs:thermal/augments/creative_catalyst')
})