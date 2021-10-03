onEvent('recipes', e => {
    // Creative fluid tank
    e.shapeless('1x mekanism:creative_fluid_tank', ['1x mekanism:creative_fluid_tank']);
    e.shaped('1x mekanism:creative_fluid_tank',
        [
            'DAD',
            'ATA',
            'DAD'
        ],
        {
            A: 'mekanism:pellet_antimatter',
            D: 'mekanism:qio_drive_supermassive',
            T: 'mekanism:ultimate_fluid_tank'
        }
    );

    // Creative chemical tank
    e.shapeless('1x mekanism:creative_chemical_tank', ['1x mekanism:creative_chemical_tank']);
    e.shaped('1x mekanism:creative_chemical_tank',
        [
            'DAD',
            'ATA',
            'DAD'
        ],
        {
            A: 'mekanism:pellet_antimatter',
            D: 'mekanism:qio_drive_supermassive',
            T: 'mekanism:ultimate_chemical_tank'
        }
    );

    // Creative vending upgrade
    e.shapeless('2x storagedrawers:creative_vending_upgrade', ['1x storagedrawers:creative_vending_upgrade']);
    e.shaped('1x storagedrawers:creative_vending_upgrade',
        [
            'DAD',
            'ATA',
            'DAD'
        ],
        {
            A: 'mekanism:pellet_antimatter',
            D: 'mekanism:qio_drive_supermassive',
            T: 'mekanism:qio_drive_array'
        }
    );

    // Creative storage disk
    e.shaped('1x refinedstorage:creative_storage_disk',
        [
            'DAD',
            'ATA',
            'DAD'
        ],
        {
            A: 'mekanism:pellet_antimatter',
            D: 'extrastorage:disk_16384k',
            T: 'refinedstorage:disk_drive'
        }
    );

    // Creative storage fluid disk
    e.shaped('1x refinedstorage:creative_fluid_storage_disk',
        [
            'DAD',
            'ATA',
            'DAD'
        ],
        {
            A: 'mekanism:pellet_antimatter',
            D: 'extrastorage:disk_1048576k_fluid',
            T: 'refinedstorage:disk_drive'
        }
    );
});