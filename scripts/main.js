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
  "minecraft:chiseled_sandstone": 4,
  "minecraft:chiseled_red_sandstone": 4,
  "minecraft:smooth_sandstone": 5,
  "minecraft:smooth_red_sandstone": 5,
  "minecraft:cut_sandstone": 5,
  "minecraft:cut_red_sandstone": 5,
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
  "minecraft:white_concrete_powder": 3,
  "minecraft:orange_concrete_powder": 3,
  "minecraft:magenta_concrete_powder": 3,
  "minecraft:light_blue_concrete_powder": 3,
  "minecraft:yellow_concrete_powder": 3,
  "minecraft:lime_concrete_powder": 3,
  "minecraft:pink_concrete_powder": 3,
  "minecraft:gray_concrete_powder": 3,
  "minecraft:light_gray_concrete_powder": 3,
  "minecraft:cyan_concrete_powder": 3,
  "minecraft:purple_concrete_powder": 3,
  "minecraft:blue_concrete_powder": 3,
  "minecraft:brown_concrete_powder": 3,
  "minecraft:green_concrete_powder": 3,
  "minecraft:red_concrete_powder": 3,
  "minecraft:black_concrete_powder": 3,
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
  "minecraft:terracotta": 4,
  "minecraft:white_terracotta": 3,
  "minecraft:orange_terracotta": 3,
  "minecraft:magenta_terracotta": 3,
  "minecraft:light_blue_terracotta": 3,
  "minecraft:yellow_terracotta": 3,
  "minecraft:lime_terracotta": 3,
  "minecraft:pink_terracotta": 3,
  "minecraft:gray_terracotta": 3,
  "minecraft:light_gray_terracotta": 3,
  "minecraft:cyan_terracotta": 3,
  "minecraft:purple_terracotta": 3,
  "minecraft:blue_terracotta": 3,
  "minecraft:brown_terracotta": 3,
  "minecraft:green_terracotta": 3,
  "minecraft:red_terracotta": 3,
  "minecraft:black_terracotta": 3,
  "minecraft:glass": 5,
  "minecraft:white_stained_glass": 3,
  "minecraft:orange_stained_glass": 3,
  "minecraft:magenta_stained_glass": 3,
  "minecraft:light_blue_stained_glass": 3,
  "minecraft:yellow_stained_glass": 3,
  "minecraft:lime_stained_glass": 3,
  "minecraft:pink_stained_glass": 3,
  "minecraft:gray_stained_glass": 3,
  "minecraft:light_gray_stained_glass": 3,
  "minecraft:cyan_stained_glass": 3,
  "minecraft:purple_stained_glass": 3,
  "minecraft:blue_stained_glass": 3,
  "minecraft:brown_stained_glass": 3,
  "minecraft:green_stained_glass": 3,
  "minecraft:red_stained_glass": 3,
  "minecraft:black_stained_glass": 3,
  "minecraft:obsidian": 2,
  "minecraft:crying_obsidian": 2,
  "minecraft:netherite_block": 1,
  "minecraft:ancient_debris": 0.5,
  "minecraft:bedrock": 0.5,
  "minecraft:end_stone": 3,
  "minecraft:end_stone_bricks": 3,
  "minecraft:purpur_block": 3,
  "minecraft:purpur_pillar": 3,
  "minecraft:netherrack": 5,
  "minecraft:warped_nether_wart_block": 3,
  "minecraft:crimson_nether_wart_block": 3,
  "minecraft:soul_sand": 3,
  "minecraft:soul_soil": 3,
  "minecraft:nether_bricks": 4,
  "minecraft:red_nether_bricks": 4,
  "minecraft:cracked_nether_bricks": 3,
  "minecraft:warped_planks": 5,
  "minecraft:crimson_planks": 5,
  "minecraft:mycelium": 4,
  "minecraft:podzol": 4,
  "minecraft:rooted_dirt": 4,
  "minecraft:moss_block": 4,
  "minecraft:moss_carpet": 2,
  "minecraft:ice": 2,
  "minecraft:packed_ice": 2,
  "minecraft:blue_ice": 2,
  "minecraft:snow_block": 2,
  "minecraft:powder_snow": 2,
  "minecraft:magma_block": 2,
  "minecraft:basalt": 2,
  "minecraft:polished_basalt": 2,
  "minecraft:blackstone": 3,
  "minecraft:polished_blackstone": 3,
  "minecraft:gilded_blackstone": 2,
  "minecraft:amethyst_block": 2,
  "minecraft:honey_block": 2,
  "minecraft:honeycomb_block": 2,
  "minecraft:prismarine": 3,
  "minecraft:prismarine_bricks": 3,
  "minecraft:dark_prismarine": 3,
  "minecraft:sculk": 2,
  "minecraft:sculk_vein": 1,
  "minecraft:tuff": 3,
  "minecraft:tuff_bricks": 3,
  "minecraft:bookshelf": 3,
  "minecraft:chiseled_bookshelf": 3,
  "minecraft:crafting_table": 2,
  "minecraft:furnace": 2,
  "minecraft:barrel": 2,
  "minecraft:chest": 2,
  "minecraft:bell": 1,
  "minecraft:lantern": 2,
  "minecraft:soul_lantern": 2,
  "minecraft:glowstone": 3,
  "minecraft:beacon": 1,
};

function log(message) {
  if (STATE.config.enableLogging) {
    console.log(`[RandomBlocks] ${message}`);
  }
}

function getRandomBlock() {
  const totalWeight = Object.values(ALL_BLOCKS).reduce((a, b) => a + b, 0);
  let random = Math.random() * totalWeight;
  for (const [block, weight] of Object.entries(ALL_BLOCKS)) {
    random -= weight;
    if (random <= 0) return block;
  }
  return Object.keys(ALL_BLOCKS)[0];
}

function getRandomNearbyBlock(player) {
  const playerPos = player.location;
  const centerX = Math.floor(playerPos.x);
  const centerY = Math.floor(playerPos.y);
  const centerZ = Math.floor(playerPos.z);
  const radius = STATE.config.checkRadius || 3;
  const candidates = [];
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dz = -radius; dz <= radius; dz++) {
        const checkPos = {
          x: centerX + dx,
          y: centerY + dy,
          z: centerZ + dz,
        };
        try {
          const block = player.dimension.getBlock(checkPos);
          if (block && !block.isAir) {
            candidates.push({ block, position: checkPos });
          }
        } catch (error) {
          continue;
        }
      }
    }
  }
  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function changeBlock(dimension, position, blockType) {
  try {
    const block = dimension.getBlock(position);
    if (block && !block.isAir) {
      dimension.setBlockType(position, blockType);
      if (STATE.config.enableParticles) {
        try {
          dimension.spawnParticle("minecraft:end_rod", position);
        } catch (error) {
        }
      }
      STATE.stats.totalChanges++;
      return true;
    }
  } catch (error) {
    log(`ブロック変更エラー: ${error.message}`);
  }
  return false;
}

function formatTime(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);
  return parts.join(" ");
}

let tickCounter = 0;

system.runInterval(() => {
  if (!STATE.enabled) return;
  tickCounter++;
  if (tickCounter % STATE.config.checkInterval !== 0) return;
  try {
    const players = world.getPlayers();
    for (const player of players) {
      if (!player.isValid()) continue;
      const blockInfo = getRandomNearbyBlock(player);
      if (!blockInfo) continue;
      if (Math.random() * 100 > STATE.config.changePercentage) continue;
      const newBlockType = getRandomBlock();
      changeBlock(player.dimension, blockInfo.position, newBlockType);
    }
  } catch (error) {
    log(`メイン処理エラー: ${error.message}`);
  }
}, 1);

world.beforeEvents.chatSend.subscribe((event) => {
  const msg = event.message.trim();
  const player = event.sender;
  if (!msg.startsWith("/rg ")) return;
  event.cancel = true;
  const args = msg.slice(4).split(" ");
  const command = args[0];
  try {
    handleCommand(player, command, args);
  } catch (error) {
    player.sendMessage(`§c[エラー] ${error.message}`);
  }
});

function handleCommand(player, command, args) {
  switch (command) {
    case "toggle":
      STATE.enabled = !STATE.enabled;
      player.sendMessage(
        `§a[ランダムブロック] ${STATE.enabled ? "有効" : "無効"}に設定されました`
      );
      break;
    case "info":
      const uptime = formatTime(Date.now() - STATE.stats.sessionStart);
      const blockCount = Object.keys(ALL_BLOCKS).length;
      player.sendMessage(
        `§6[ランダムブロック] 情報§r
§7- ステータス: ${STATE.enabled ? "§a有効" : "§c無効"}§r
§7- 変更数: §f${STATE.stats.totalChanges}§r
§7- 確率: §f${STATE.config.changePercentage}%§r
§7- チェック間隔: §f${STATE.config.checkInterval}ティック§r
§7- チェック範囲: §f${STATE.config.checkRadius}ブロック§r
§7- 搭載ブロック: §f${blockCount}種類§r
§7- 実行時間: §f${uptime}§r`
      );
      break;
    case "probability":
      const prob = parseInt(args[1]);
      if (isNaN(prob) || prob < 0 || prob > 100) {
        throw new Error("確率は0-100の数字を指定してください");
      }
      STATE.config.changePercentage = prob;
      player.sendMessage(
        `§a[ランダムブロック] 変更確率を ${prob}% に設定しました`
      );
      break;
    case "interval":
      const interval = parseInt(args[1]);
      if (isNaN(interval) || interval < 1) {
        throw new Error("チェック間隔は1以上の数字を指定してください");
      }
      STATE.config.checkInterval = interval;
      player.sendMessage(
        `§a[ランダムブロック] チェック間隔を ${interval}ティック に設定しました`
      );
      break;
    case "radius":
      const radius = parseInt(args[1]);
      if (isNaN(radius) || radius < 1 || radius > 10) {
        throw new Error("チェック範囲は1-10の数字を指定してください");
      }
      STATE.config.checkRadius = radius;
      player.sendMessage(
        `§a[ランダムブロック] チェック範囲を ${radius}ブロック に設定しました`
      );
      break;
    case "particles":
      STATE.config.enableParticles = !STATE.config.enableParticles;
      player.sendMessage(
        `§a[ランダムブロック] パーティクル: ${STATE.config.enableParticles ? "有効" : "無効"}`
      );
      break;
    case "logging":
      STATE.config.enableLogging = !STATE.config.enableLogging;
      player.sendMessage(
        `§a[ランダムブロック] ログ出力: ${STATE.config.enableLogging ? "有効" : "無効"}`
      );
      break;
    case "reset":
      STATE.stats.totalChanges = 0;
      STATE.stats.sessionStart = Date.now();
      player.sendMessage("§a[ランダムブロック] 統計情報をリセットしました");
      break;
    case "help":
      player.sendMessage(
        `§6[ランダムブロック] コマンド一覧§r
§7/rg toggle§r - 機能ON/OFF
§7/rg info§r - 情報表示
§7/rg probability <0-100>§r - 確率変更
§7/rg interval <ティック>§r - チェック間隔変更
§7/rg radius <1-10>§r - チェック範囲変更
§7/rg particles§r - パーティクルON/OFF
§7/rg logging§r - ログON/OFF
§7/rg reset§r - 統計リセット
§7/rg help§r - ヘルプ表示`
      );
      break;
    default:
      player.sendMessage(
        `§c未知のコマンド: ${command} (§f/rg help§cで確認)`
      );
  }
}

const blockCount = Object.keys(ALL_BLOCKS).length;
console.log(`✓ [ランダムブロック] ${blockCount}種類のブロックを読み込みました`);
console.log(`✓ コマンド: /rg help`);
