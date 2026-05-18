import { world, system } from "@minecraft/server";

const STATE = {
  enabled: true,
  config: {
    checkInterval: 20,
    changePercentage: 30,
    checkRadius: 3,
    enableParticles: true,
    enableLogging: false,
  },
  stats: {
    totalChanges: 0,
    sessionStart: Date.now(),
  },
};

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

function log(m) {
  if (STATE.config.enableLogging) console.log(`[Random] ${m}`);
}

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

function getNearby(player) {
  const p = player.location;
  const x = Math.floor(p.x);
  const y = Math.floor(p.y);
  const z = Math.floor(p.z);
  const r = STATE.config.checkRadius;
  const list = [];
  for (let dx = -r; dx <= r; dx++)
    for (let dy = -r; dy <= r; dy++)
      for (let dz = -r; dz <= r; dz++) {
        try {
          const pos = { x: x + dx, y: y + dy, z: z + dz };
          const b = player.dimension.getBlock(pos);
          if (b && !b.isAir) list.push(pos);
        } catch {}
      }
  return list.length ? list[Math.floor(Math.random() * list.length)] : null;
}

function setBlock(dim, pos, type) {
  try {
    const b = dim.getBlock(pos);
    if (!b || b.isAir) return;
    b.setType(type);
    if (STATE.config.enableParticles) {
      try {
        dim.spawnParticle("minecraft:end_rod", pos);
      } catch {}
    }
    STATE.stats.totalChanges++;
  } catch (e) {
    log(e.message);
  }
}

let tick = 0;

system.runInterval(() => {
  if (!STATE.enabled) return;
  tick++;
  if (tick % STATE.config.checkInterval) return;
  const ps = world.getPlayers();
  for (const p of ps) {
    const pos = getNearby(p);
    if (!pos) continue;
    if (Math.random() * 100 > STATE.config.changePercentage) continue;
    setBlock(p.dimension, pos, getRandomBlock());
  }
}, 1);

world.beforeEvents.chatSend.subscribe(ev => {
  const m = ev.message.trim();
  const p = ev.sender;
  if (!m.startsWith("/Random:")) return;
  ev.cancel = true;
  const a = m.slice(9).split(" ");
  const c = a[0];

  if (c === "help") p.sendMessage("§6/Random:toggle /info /probability /interval /radius /particles /logging /reset");
  else if (c === "toggle") STATE.enabled = !STATE.enabled, p.sendMessage("§a" + STATE.enabled);
  else if (c === "info") p.sendMessage(`§aChanges:${STATE.stats.totalChanges}`);
  else if (c === "probability") STATE.config.changePercentage = +a[1] || 0;
  else if (c === "interval") STATE.config.checkInterval = +a[1] || 1;
  else if (c === "radius") STATE.config.checkRadius = +a[1] || 1;
  else if (c === "particles") STATE.config.enableParticles = !STATE.config.enableParticles;
  else if (c === "logging") STATE.config.enableLogging = !STATE.config.enableLogging;
  else if (c === "reset") STATE.stats.totalChanges = 0, STATE.stats.sessionStart = Date.now();
});

console.log(`Loaded | Blocks:${Object.keys(ALL_BLOCKS).length}`);