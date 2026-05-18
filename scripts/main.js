import { world, system } from "@minecraft/server";

const ALL_BLOCKS = [
  "minecraft:stone",
  "minecraft:granite",
  "minecraft:diorite",
  "minecraft:andesite",
  "minecraft:dirt",
  "minecraft:coarse_dirt",
  "minecraft:grass_block",
  "minecraft:grass",
  "minecraft:seagrass",
  "minecraft:tall_seagrass",
  "minecraft:sand",
  "minecraft:red_sand",
  "minecraft:gravel",
  "minecraft:clay",
  "minecraft:mud",
  "minecraft:oak_log",
  "minecraft:spruce_log",
  "minecraft:birch_log",
  "minecraft:jungle_log",
  "minecraft:acacia_log",
  "minecraft:dark_oak_log",
  "minecraft:mangrove_log",
  "minecraft:cherry_log",
  "minecraft:oak_wood",
  "minecraft:spruce_wood",
  "minecraft:birch_wood",
  "minecraft:jungle_wood",
  "minecraft:acacia_wood",
  "minecraft:dark_oak_wood",
  "minecraft:mangrove_wood",
  "minecraft:cherry_wood",
  "minecraft:oak_planks",
  "minecraft:spruce_planks",
  "minecraft:birch_planks",
  "minecraft:jungle_planks",
  "minecraft:acacia_planks",
  "minecraft:dark_oak_planks",
  "minecraft:mangrove_planks",
  "minecraft:cherry_planks",
  "minecraft:oak_stairs",
  "minecraft:spruce_stairs",
  "minecraft:birch_stairs",
  "minecraft:jungle_stairs",
  "minecraft:acacia_stairs",
  "minecraft:dark_oak_stairs",
  "minecraft:mangrove_stairs",
  "minecraft:cherry_stairs",
  "minecraft:stone_stairs",
  "minecraft:cobblestone_stairs",
  "minecraft:brick_stairs",
  "minecraft:sandstone_stairs",
  "minecraft:oak_slab",
  "minecraft:spruce_slab",
  "minecraft:birch_slab",
  "minecraft:jungle_slab",
  "minecraft:acacia_slab",
  "minecraft:dark_oak_slab",
  "minecraft:mangrove_slab",
  "minecraft:cherry_slab",
  "minecraft:stone_slab",
  "minecraft:cobblestone_slab",
  "minecraft:brick_slab",
  "minecraft:sandstone_slab",
  "minecraft:iron_ore",
  "minecraft:deepslate_iron_ore",
  "minecraft:gold_ore",
  "minecraft:deepslate_gold_ore",
  "minecraft:diamond_ore",
  "minecraft:deepslate_diamond_ore",
  "minecraft:emerald_ore",
  "minecraft:deepslate_emerald_ore",
  "minecraft:lapis_ore",
  "minecraft:deepslate_lapis_ore",
  "minecraft:redstone_ore",
  "minecraft:deepslate_redstone_ore",
  "minecraft:copper_ore",
  "minecraft:deepslate_copper_ore",
  "minecraft:coal_ore",
  "minecraft:deepslate_coal_ore",
  "minecraft:nether_gold_ore",
  "minecraft:gilded_blackstone",
  "minecraft:iron_block",
  "minecraft:gold_block",
  "minecraft:diamond_block",
  "minecraft:emerald_block",
  "minecraft:lapis_block",
  "minecraft:redstone_block",
  "minecraft:copper_block",
  "minecraft:coal_block",
  "minecraft:quartz_block",
  "minecraft:raw_iron_block",
  "minecraft:raw_gold_block",
  "minecraft:raw_copper_block",
  "minecraft:cobblestone",
  "minecraft:mossy_cobblestone",
  "minecraft:stone_bricks",
  "minecraft:mossy_stone_bricks",
  "minecraft:cracked_stone_bricks",
  "minecraft:chiseled_stone_bricks",
  "minecraft:deepslate",
  "minecraft:deepslate_bricks",
  "minecraft:deepslate_tiles",
  "minecraft:cracked_deepslate_bricks",
  "minecraft:cracked_deepslate_tiles",
  "minecraft:polished_deepslate",
  "minecraft:sandstone",
  "minecraft:red_sandstone",
  "minecraft:bricks",
  "minecraft:mud_bricks",
  "minecraft:white_concrete",
  "minecraft:orange_concrete",
  "minecraft:magenta_concrete",
  "minecraft:light_blue_concrete",
  "minecraft:yellow_concrete",
  "minecraft:lime_concrete",
  "minecraft:pink_concrete",
  "minecraft:gray_concrete",
  "minecraft:light_gray_concrete",
  "minecraft:cyan_concrete",
  "minecraft:purple_concrete",
  "minecraft:blue_concrete",
  "minecraft:brown_concrete",
  "minecraft:green_concrete",
  "minecraft:red_concrete",
  "minecraft:black_concrete",
  "minecraft:white_wool",
  "minecraft:orange_wool",
  "minecraft:magenta_wool",
  "minecraft:light_blue_wool",
  "minecraft:yellow_wool",
  "minecraft:lime_wool",
  "minecraft:pink_wool",
  "minecraft:gray_wool",
  "minecraft:light_gray_wool",
  "minecraft:cyan_wool",
  "minecraft:purple_wool",
  "minecraft:blue_wool",
  "minecraft:brown_wool",
  "minecraft:green_wool",
  "minecraft:red_wool",
  "minecraft:black_wool",
  "minecraft:glass",
  "minecraft:obsidian",
  "minecraft:crying_obsidian",
  "minecraft:netherite_block",
  "minecraft:ancient_debris",
  "minecraft:bedrock",
  "minecraft:end_stone",
  "minecraft:purpur_block",
  "minecraft:netherrack",
  "minecraft:nether_bricks",
  "minecraft:crimson_planks",
  "minecraft:warped_planks",
  "minecraft:basalt",
  "minecraft:blackstone",
  "minecraft:amethyst_block",
  "minecraft:sculk",
  "minecraft:sculk_vein",
  "minecraft:glowstone",
  "minecraft:prismarine",
  "minecraft:sea_lantern",
  "minecraft:sponge",
  "minecraft:tnt"
];

function getRandomBlock() {
  const randomIndex = Math.floor(Math.random() * ALL_BLOCKS.length);
  return ALL_BLOCKS[randomIndex];
}

const lastPositions = new Map();

system.runInterval(() => {
  const currentEntityIds = new Set();

  for (const dimensionId of ["minecraft:overworld", "minecraft:the_nether", "minecraft:the_end"]) {
    try {
      const dimension = world.getDimension(dimensionId);
      const entities = dimension.getEntities();

      for (const entity of entities) {
        if (!entity.isValid()) continue;
        
        currentEntityIds.add(entity.id);

        const p = entity.location;
        const currentBlockPos = {
          x: Math.floor(p.x),
          y: Math.floor(p.y) - 1,
          z: Math.floor(p.z)
        };

        const posKey = `${currentBlockPos.x},${currentBlockPos.y},${currentBlockPos.z}`;
        const lastPosKey = lastPositions.get(entity.id);

        if (lastPosKey === posKey) {
          continue;
        }

        lastPositions.set(entity.id, posKey);

        try {
          const b = dimension.getBlock(currentBlockPos);
          if (b) {
            const newBlockType = getRandomBlock();
            if (b.typeId !== newBlockType) {
              b.setType(newBlockType);
            }
          }
        } catch {}
      }
    } catch {}
  }

  for (const savedId of lastPositions.keys()) {
    if (!currentEntityIds.has(savedId)) {
      lastPositions.delete(savedId);
    }
  }
}, 1);
