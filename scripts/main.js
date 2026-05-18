import { world, system } from "@minecraft/server";

const ALL_BLOCKS = {
  "minecraft:stone": 5,
  "minecraft:granite": 5,
  "minecraft:diorite": 5,
  "minecraft:andesite": 5,
  "minecraft:dirt": 8,
  "minecraft:coarse_dirt": 5,
  "minecraft:grass_block": 8,
  "minecraft:grass": 2,
  "minecraft:seagrass": 2,
  "minecraft:tall_seagrass": 2,
  "minecraft:sand": 8,
  "minecraft:red_sand": 8,
  "minecraft:gravel": 6,
  "minecraft:clay": 4,
  "minecraft:mud": 5,
  "minecraft:oak_log": 6,
  "minecraft:spruce_log": 6,
  "minecraft:birch_log": 6,
  "minecraft:jungle_log": 6,
  "minecraft:acacia_log": 6,
  "minecraft:dark_oak_log": 6,
  "minecraft:mangrove_log": 6,
  "minecraft:cherry_log": 6,
  "minecraft:oak_wood": 6,
  "minecraft:spruce_wood": 6,
  "minecraft:birch_wood": 6,
  "minecraft:jungle_wood": 6,
  "minecraft:acacia_wood": 6,
  "minecraft:dark_oak_wood": 6,
  "minecraft:mangrove_wood": 6,
  "minecraft:cherry_wood": 6,
  "minecraft:oak_planks": 10,
  "minecraft:spruce_planks": 10,
  "minecraft:birch_planks": 10,
  "minecraft:jungle_planks": 10,
  "minecraft:acacia_planks": 10,
  "minecraft:dark_oak_planks": 10,
  "minecraft:mangrove_planks": 10,
  "minecraft:cherry_planks": 10,
  "minecraft:oak_stairs": 4,
  "minecraft:spruce_stairs": 4,
  "minecraft:birch_stairs": 4,
  "minecraft:jungle_stairs": 4,
  "minecraft:acacia_stairs": 4,
  "minecraft:dark_oak_stairs": 4,
  "minecraft:mangrove_stairs": 4,
  "minecraft:cherry_stairs": 4,
  "minecraft:stone_stairs": 4,
  "minecraft:cobblestone_stairs": 4,
  "minecraft:brick_stairs": 4,
  "minecraft:sandstone_stairs": 4,
  "minecraft:oak_slab": 3,
  "minecraft:spruce_slab": 3,
  "minecraft:birch_slab": 3,
  "minecraft:jungle_slab": 3,
  "minecraft:acacia_slab": 3,
  "minecraft:dark_oak_slab": 3,
  "minecraft:mangrove_slab": 3,
  "minecraft:cherry_slab": 3,
  "minecraft:stone_slab": 3,
  "minecraft:cobblestone_slab": 3,
  "minecraft:brick_slab": 3,
  "minecraft:sandstone_slab": 3,
  "minecraft:iron_ore": 4,
  "minecraft:deepslate_iron_ore": 4,
  "minecraft:gold_ore": 3,
  "minecraft:deepslate_gold_ore": 3,
  "minecraft:diamond_ore": 2,
  "minecraft:deepslate_diamond_ore": 2,
  "minecraft:emerald_ore": 2,
  "minecraft:deepslate_emerald_ore": 2,
  "minecraft:lapis_ore": 3,
  "minecraft:deepslate_lapis_ore": 3,
  "minecraft:redstone_ore": 3,
  "minecraft:deepslate_redstone_ore": 3,
  "minecraft:copper_ore": 4,
  "minecraft:deepslate_copper_ore": 4,
  "minecraft:coal_ore": 4,
  "minecraft:deepslate_coal_ore": 4,
  "minecraft:iron_block": 3,
  "minecraft:gold_block": 2,
  "minecraft:diamond_block": 1,
  "minecraft:emerald_block": 1,
  "minecraft:lapis_block": 2,
  "minecraft:redstone_block": 2,
  "minecraft:copper_block": 3,
  "minecraft:coal_block": 2,
  "minecraft:quartz_block": 3,
  "minecraft:raw_iron_block": 2,
  "minecraft:raw_gold_block": 2,
  "minecraft:raw_copper_block": 2,
  "minecraft:cobblestone": 8,
  "minecraft:mossy_cobblestone": 5,
  "minecraft:stone_bricks": 6,
  "minecraft:mossy_stone_bricks": 4,
  "minecraft:cracked_stone_bricks": 4,
  "minecraft:chiseled_stone_bricks": 4,
  "minecraft:deepslate": 5,
  "minecraft:deepslate_bricks": 5,
  "minecraft:deepslate_tiles": 5,
  "minecraft:cracked_deepslate_bricks": 4,
  "minecraft:cracked_deepslate_tiles": 4,
  "minecraft:polished_deepslate": 5,
  "minecraft:sandstone": 6,
  "minecraft:red_sandstone": 6,
  "minecraft:bricks": 5,
  "minecraft:mud_bricks": 5,
  "minecraft:white_concrete": 4,
  "minecraft:orange_concrete": 4,
  "minecraft:magenta_concrete": 4,
  "minecraft:light_blue_concrete": 4,
  "minecraft:yellow_concrete": 4,
  "minecraft:lime_concrete": 4,
  "minecraft:pink_concrete": 4,
  "minecraft:gray_concrete": 4,
  "minecraft:light_gray_concrete": 4,
  "minecraft:cyan_concrete": 4,
  "minecraft:purple_concrete": 4,
  "minecraft:blue_concrete": 4,
  "minecraft:brown_concrete": 4,
  "minecraft:green_concrete": 4,
  "minecraft:red_concrete": 4,
  "minecraft:black_concrete": 4,
  "minecraft:white_wool": 4,
  "minecraft:orange_wool": 4,
  "minecraft:magenta_wool": 4,
  "minecraft:light_blue_wool": 4,
  "minecraft:yellow_wool": 4,
  "minecraft:lime_wool": 4,
  "minecraft:pink_wool": 4,
  "minecraft:gray_wool": 4,
  "minecraft:light_gray_wool": 4,
  "minecraft:cyan_wool": 4,
  "minecraft:purple_wool": 4,
  "minecraft:blue_wool": 4,
  "minecraft:brown_wool": 4,
  "minecraft:green_wool": 4,
  "minecraft:red_wool": 4,
  "minecraft:black_wool": 4,
  "minecraft:glass": 5,
  "minecraft:obsidian": 2,
  "minecraft:crying_obsidian": 2,
  "minecraft:netherite_block": 1,
  "minecraft:ancient_debris": 0.5,
  "minecraft:bedrock": 0.5,
  "minecraft:end_stone": 3,
  "minecraft:purpur_block": 3,
  "minecraft:netherrack": 5,
  "minecraft:nether_bricks": 4,
  "minecraft:crimson_planks": 5,
  "minecraft:warped_planks": 5,
  "minecraft:basalt": 2,
  "minecraft:blackstone": 3,
  "minecraft:amethyst_block": 2,
  "minecraft:sculk": 2,
  "minecraft:sculk_vein": 1,
  "minecraft:glowstone": 3
};

function getRandomBlock() {
  const e = Object.entries(ALL_BLOCKS);
  let t = 0;
  for (const [, w] of e) t += w;
  let r = Math.random() * t;
  for (const [b, w] of e) {
    r -= w;
    if (r <= 0) return b;
  }
  return "minecraft:stone";
}

system.runInterval(() => {
  for (const dimensionId of ["minecraft:overworld", "minecraft:the_nether", "minecraft:the_end"]) {
    try {
      const dimension = world.getDimension(dimensionId);
      const entities = dimension.getEntities();

      for (const entity of entities) {
        const p = entity.location;
        const pos = {
          x: Math.floor(p.x),
          y: Math.floor(p.y) - 1,
          z: Math.floor(p.z)
        };

        try {
          const b = dimension.getBlock(pos);
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
}, 1);
