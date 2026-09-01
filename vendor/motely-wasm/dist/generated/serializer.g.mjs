import $i from "./instances.g.mjs";
import $s from "../serialization/index.mjs";

export const { serialize, deserialize } = $s;

$s.Motely_Enums_MotelyBoosterPack = $s.std.Int32;
$s.Motely_Enums_MotelyBossBlind = $s.std.Int32;
$s.Motely_Enums_MotelyDeck = $s.std.Int32;
$s.Motely_Enums_MotelyItemEdition = $s.std.Int32;
$s.Motely_Enums_MotelyItemEnhancement = $s.std.Int32;
$s.Motely_Enums_MotelyItemSeal = $s.std.Int32;
$s.Motely_Enums_MotelyItemType = $s.std.Int32;
$s.Motely_Enums_MotelyItemTypeCategory = $s.std.Int32;
$s.Motely_Enums_MotelyStake = $s.std.Int32;
$s.Motely_Enums_MotelyStandardcardRank = $s.std.Int32;
$s.Motely_Enums_MotelyStandardcardSuit = $s.std.Int32;
$s.Motely_Enums_MotelyTag = $s.std.Int32;
$s.Motely_Enums_MotelyVoucher = $s.std.Int32;
$s.Motely_Lsp_Core_JamlDiagnosticSeverity = $s.std.Int32;
$s.Motely_SeedProviders_JamlAesthetic = $s.std.Int32;
$s.System_Boolean = $s.std.Boolean;
$s.System_Double = $s.std.Double;
$s.System_Int32 = $s.std.Int32;
$s.System_Int64 = $s.std.Int64;
$s.System_String = $s.std.String;
$s.Motely_Analysis_MotelyJamlyzerAnteResult = $s.binary(write_Motely_Analysis_MotelyJamlyzerAnteResult, read_Motely_Analysis_MotelyJamlyzerAnteResult);
$s.Motely_Analysis_MotelyJamlyzerEvents = $s.binary(write_Motely_Analysis_MotelyJamlyzerEvents, read_Motely_Analysis_MotelyJamlyzerEvents);
$s.Motely_Analysis_MotelyJamlyzerPack = $s.binary(write_Motely_Analysis_MotelyJamlyzerPack, read_Motely_Analysis_MotelyJamlyzerPack);
$s.Motely_Analysis_MotelyJamlyzerPulls = $s.binary(write_Motely_Analysis_MotelyJamlyzerPulls, read_Motely_Analysis_MotelyJamlyzerPulls);
$s.Motely_Analysis_MotelyJamlyzerSeedResult = $s.binary(write_Motely_Analysis_MotelyJamlyzerSeedResult, read_Motely_Analysis_MotelyJamlyzerSeedResult);
$s.Motely_Analysis_MotelyJamlyzerShopStreams = $s.binary(write_Motely_Analysis_MotelyJamlyzerShopStreams, read_Motely_Analysis_MotelyJamlyzerShopStreams);
$s.Motely_Analysis_MotelyJamlyzerStreamStates = $s.binary(write_Motely_Analysis_MotelyJamlyzerStreamStates, read_Motely_Analysis_MotelyJamlyzerStreamStates);
$s.Motely_Filters_Jaml_IJamlClause = $s.binary(write_Motely_Filters_Jaml_IJamlClause, read_Motely_Filters_Jaml_IJamlClause);
$s.Motely_Filters_Jaml_JamlConfig = $s.binary(write_Motely_Filters_Jaml_JamlConfig, read_Motely_Filters_Jaml_JamlConfig);
$s.Motely_Filters_Jaml_JamlSpan = $s.binary(write_Motely_Filters_Jaml_JamlSpan, read_Motely_Filters_Jaml_JamlSpan);
$s.Motely_Filters_MotelyScoredSeedResult = $s.binary(write_Motely_Filters_MotelyScoredSeedResult, read_Motely_Filters_MotelyScoredSeedResult);
$s.Motely_Lsp_Core_JamlCompletionItem = $s.binary(write_Motely_Lsp_Core_JamlCompletionItem, read_Motely_Lsp_Core_JamlCompletionItem);
$s.Motely_Lsp_Core_JamlDiagnostic = $s.binary(write_Motely_Lsp_Core_JamlDiagnostic, read_Motely_Lsp_Core_JamlDiagnostic);
$s.Motely_Lsp_Core_JamlHoverInfo = $s.binary(write_Motely_Lsp_Core_JamlHoverInfo, read_Motely_Lsp_Core_JamlHoverInfo);
$s.Motely_MotelyItem = $s.binary(write_Motely_MotelyItem, read_Motely_MotelyItem);
$s.Motely_MotelyProgress = $s.binary(write_Motely_MotelyProgress, read_Motely_MotelyProgress);
$s.Motely_Enums_MotelyItemEditionArray = $s.std.Array($s.Motely_Enums_MotelyItemEdition);
$s.Motely_Filters_MotelyScoredSeedResultArray = $s.std.Array($s.Motely_Filters_MotelyScoredSeedResult);
$s.Motely_MotelyItemArray = $s.std.Array($s.Motely_MotelyItem);
$s.System_BooleanArray = $s.std.Array($s.System_Boolean);
$s.System_Collections_Generic_IReadOnlyList_Of_Motely_Analysis_MotelyJamlyzerAnteResult = $s.std.List($s.Motely_Analysis_MotelyJamlyzerAnteResult);
$s.System_Collections_Generic_IReadOnlyList_Of_Motely_Analysis_MotelyJamlyzerPack = $s.std.List($s.Motely_Analysis_MotelyJamlyzerPack);
$s.System_Collections_Generic_IReadOnlyList_Of_Motely_Analysis_MotelyJamlyzerSeedResult = $s.std.List($s.Motely_Analysis_MotelyJamlyzerSeedResult);
$s.System_Collections_Generic_IReadOnlyList_Of_Motely_Enums_MotelyVoucher = $s.std.List($s.Motely_Enums_MotelyVoucher);
$s.System_Collections_Generic_IReadOnlyList_Of_Motely_Lsp_Core_JamlCompletionItem = $s.std.List($s.Motely_Lsp_Core_JamlCompletionItem);
$s.System_Collections_Generic_IReadOnlyList_Of_Motely_Lsp_Core_JamlDiagnostic = $s.std.List($s.Motely_Lsp_Core_JamlDiagnostic);
$s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem = $s.std.List($s.Motely_MotelyItem);
$s.System_Collections_Generic_List_Of_Motely_Filters_Jaml_IJamlClause = $s.std.List($s.Motely_Filters_Jaml_IJamlClause);
$s.System_Collections_Generic_List_Of_System_String = $s.std.List($s.System_String);
$s.System_Int32Array = $s.std.Array($s.System_Int32);
$s.System_Int64Array = $s.std.Array($s.System_Int64);
$s.System_Int64OrNull = $s.std.Nullable($s.System_Int64);
$s.System_StringArray = $s.std.Array($s.System_String);
function write_Motely_Filters_Jaml_IJamlClause(writer, value) {
    writer.writeInt32($i.import(value));
}
function read_Motely_Filters_Jaml_IJamlClause(reader) {
    return $i.resolve(reader.readInt32(), $i.Motely_Filters_Jaml_IJamlClause);
}
function write_Motely_Analysis_MotelyJamlyzerAnteResult(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_Int32.write(writer, value.ante);
    $s.Motely_Enums_MotelyBossBlind.write(writer, value.boss);
    $s.Motely_Enums_MotelyVoucher.write(writer, value.voucher);
    $s.Motely_Enums_MotelyTag.write(writer, value.smallBlindTag);
    $s.Motely_Enums_MotelyTag.write(writer, value.bigBlindTag);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.shopItems);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_Analysis_MotelyJamlyzerPack.write(writer, value.packs);
    $s.Motely_Analysis_MotelyJamlyzerPulls.write(writer, value.pulls);
    $s.Motely_Analysis_MotelyJamlyzerShopStreams.write(writer, value.shopStreams);
}
function read_Motely_Analysis_MotelyJamlyzerAnteResult(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.ante = $s.System_Int32.read(reader);
    value.boss = $s.Motely_Enums_MotelyBossBlind.read(reader);
    value.voucher = $s.Motely_Enums_MotelyVoucher.read(reader);
    value.smallBlindTag = $s.Motely_Enums_MotelyTag.read(reader);
    value.bigBlindTag = $s.Motely_Enums_MotelyTag.read(reader);
    value.shopItems = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.packs = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_Analysis_MotelyJamlyzerPack.read(reader);
    value.pulls = $s.Motely_Analysis_MotelyJamlyzerPulls.read(reader);
    value.shopStreams = $s.Motely_Analysis_MotelyJamlyzerShopStreams.read(reader);
    return value;
}
function write_Motely_Analysis_MotelyJamlyzerEvents(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_BooleanArray.write(writer, value.luckyMoney);
    $s.System_BooleanArray.write(writer, value.luckyMult);
    $s.Motely_Enums_MotelyItemEditionArray.write(writer, value.wheelOfFortune);
    $s.System_BooleanArray.write(writer, value.cavendish);
    $s.System_BooleanArray.write(writer, value.grosMichel);
    $s.System_BooleanArray.write(writer, value.space);
    $s.System_BooleanArray.write(writer, value.business);
    $s.System_BooleanArray.write(writer, value.bloodstone);
    $s.System_BooleanArray.write(writer, value.parking);
    $s.System_BooleanArray.write(writer, value.eightBall);
    $s.System_BooleanArray.write(writer, value.glass);
    $s.System_BooleanArray.write(writer, value.omenGlobe);
    $s.System_BooleanArray.write(writer, value.theWheel);
    $s.System_Int32Array.write(writer, value.misprint);
}
function read_Motely_Analysis_MotelyJamlyzerEvents(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.luckyMoney = $s.System_BooleanArray.read(reader);
    value.luckyMult = $s.System_BooleanArray.read(reader);
    value.wheelOfFortune = $s.Motely_Enums_MotelyItemEditionArray.read(reader);
    value.cavendish = $s.System_BooleanArray.read(reader);
    value.grosMichel = $s.System_BooleanArray.read(reader);
    value.space = $s.System_BooleanArray.read(reader);
    value.business = $s.System_BooleanArray.read(reader);
    value.bloodstone = $s.System_BooleanArray.read(reader);
    value.parking = $s.System_BooleanArray.read(reader);
    value.eightBall = $s.System_BooleanArray.read(reader);
    value.glass = $s.System_BooleanArray.read(reader);
    value.omenGlobe = $s.System_BooleanArray.read(reader);
    value.theWheel = $s.System_BooleanArray.read(reader);
    value.misprint = $s.System_Int32Array.read(reader);
    return value;
}
function write_Motely_Analysis_MotelyJamlyzerPack(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.Motely_Enums_MotelyBoosterPack.write(writer, value.pack);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.items);
}
function read_Motely_Analysis_MotelyJamlyzerPack(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.pack = $s.Motely_Enums_MotelyBoosterPack.read(reader);
    value.items = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    return value;
}
function write_Motely_Analysis_MotelyJamlyzerPulls(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.judgementJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.wraithJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.emperorTarots);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.purpleSealTarots);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.sixthSenseSpectrals);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.seanceSpectrals);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.riffRaffJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.rareTagJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.uncommonTagJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.legendaryJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_Enums_MotelyVoucher.write(writer, value.voucherSequence);
}
function read_Motely_Analysis_MotelyJamlyzerPulls(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.judgementJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.wraithJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.emperorTarots = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.purpleSealTarots = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.sixthSenseSpectrals = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.seanceSpectrals = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.riffRaffJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.rareTagJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.uncommonTagJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.legendaryJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.voucherSequence = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_Enums_MotelyVoucher.read(reader);
    return value;
}
function write_Motely_Analysis_MotelyJamlyzerSeedResult(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_String.write(writer, value.seed);
    $s.System_Int32.write(writer, value.score);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_Analysis_MotelyJamlyzerAnteResult.write(writer, value.antes);
    $s.Motely_Analysis_MotelyJamlyzerEvents.write(writer, value.events);
    $s.Motely_Analysis_MotelyJamlyzerStreamStates.write(writer, value.streamStates);
    writer.writeBool(value.erraticDeck != null);
    if (value.erraticDeck != null) $s.Motely_MotelyItemArray.write(writer, value.erraticDeck);
}
function read_Motely_Analysis_MotelyJamlyzerSeedResult(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.seed = $s.System_String.read(reader);
    value.score = $s.System_Int32.read(reader);
    value.antes = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_Analysis_MotelyJamlyzerAnteResult.read(reader);
    value.events = $s.Motely_Analysis_MotelyJamlyzerEvents.read(reader);
    value.streamStates = $s.Motely_Analysis_MotelyJamlyzerStreamStates.read(reader);
    if (reader.readBool()) value.erraticDeck = $s.Motely_MotelyItemArray.read(reader);
    return value;
}
function write_Motely_Analysis_MotelyJamlyzerShopStreams(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.shopJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.commonShopJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.uncommonShopJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.rareShopJokers);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.shopTarots);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.shopPlanets);
    $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.write(writer, value.shopSpectrals);
}
function read_Motely_Analysis_MotelyJamlyzerShopStreams(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.shopJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.commonShopJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.uncommonShopJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.rareShopJokers = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.shopTarots = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.shopPlanets = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    value.shopSpectrals = $s.System_Collections_Generic_IReadOnlyList_Of_Motely_MotelyItem.read(reader);
    return value;
}
function write_Motely_Analysis_MotelyJamlyzerStreamStates(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_Int32.write(writer, value.rollOffset);
    $s.System_Double.write(writer, value.luckyMoney);
    $s.System_Double.write(writer, value.luckyMult);
    $s.System_Double.write(writer, value.wheelOfFortune);
    $s.System_Double.write(writer, value.cavendish);
    $s.System_Double.write(writer, value.grosMichel);
    $s.System_Double.write(writer, value.space);
    $s.System_Double.write(writer, value.business);
    $s.System_Double.write(writer, value.bloodstone);
    $s.System_Double.write(writer, value.parking);
    $s.System_Double.write(writer, value.eightBall);
    $s.System_Double.write(writer, value.glass);
    $s.System_Double.write(writer, value.omenGlobe);
    $s.System_Double.write(writer, value.theWheel);
    $s.System_Double.write(writer, value.misprint);
}
function read_Motely_Analysis_MotelyJamlyzerStreamStates(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.rollOffset = $s.System_Int32.read(reader);
    value.luckyMoney = $s.System_Double.read(reader);
    value.luckyMult = $s.System_Double.read(reader);
    value.wheelOfFortune = $s.System_Double.read(reader);
    value.cavendish = $s.System_Double.read(reader);
    value.grosMichel = $s.System_Double.read(reader);
    value.space = $s.System_Double.read(reader);
    value.business = $s.System_Double.read(reader);
    value.bloodstone = $s.System_Double.read(reader);
    value.parking = $s.System_Double.read(reader);
    value.eightBall = $s.System_Double.read(reader);
    value.glass = $s.System_Double.read(reader);
    value.omenGlobe = $s.System_Double.read(reader);
    value.theWheel = $s.System_Double.read(reader);
    value.misprint = $s.System_Double.read(reader);
    return value;
}
function write_Motely_Filters_Jaml_JamlConfig(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_String.write(writer, value.id);
    writer.writeBool(value.name != null);
    if (value.name != null) $s.System_String.write(writer, value.name);
    writer.writeBool(value.description != null);
    if (value.description != null) $s.System_String.write(writer, value.description);
    writer.writeBool(value.author != null);
    if (value.author != null) $s.System_String.write(writer, value.author);
    $s.Motely_Enums_MotelyDeck.write(writer, value.deck);
    $s.Motely_Enums_MotelyStake.write(writer, value.stake);
    $s.System_Collections_Generic_List_Of_System_String.write(writer, value.seeds);
    writer.writeBool(value.filter != null);
    if (value.filter != null) $s.System_String.write(writer, value.filter);
    $s.System_Collections_Generic_List_Of_Motely_Filters_Jaml_IJamlClause.write(writer, value.must);
    $s.System_Collections_Generic_List_Of_Motely_Filters_Jaml_IJamlClause.write(writer, value.should);
    $s.System_Collections_Generic_List_Of_Motely_Filters_Jaml_IJamlClause.write(writer, value.mustNot);
}
function read_Motely_Filters_Jaml_JamlConfig(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.id = $s.System_String.read(reader);
    if (reader.readBool()) value.name = $s.System_String.read(reader);
    if (reader.readBool()) value.description = $s.System_String.read(reader);
    if (reader.readBool()) value.author = $s.System_String.read(reader);
    value.deck = $s.Motely_Enums_MotelyDeck.read(reader);
    value.stake = $s.Motely_Enums_MotelyStake.read(reader);
    value.seeds = $s.System_Collections_Generic_List_Of_System_String.read(reader);
    if (reader.readBool()) value.filter = $s.System_String.read(reader);
    value.must = $s.System_Collections_Generic_List_Of_Motely_Filters_Jaml_IJamlClause.read(reader);
    value.should = $s.System_Collections_Generic_List_Of_Motely_Filters_Jaml_IJamlClause.read(reader);
    value.mustNot = $s.System_Collections_Generic_List_Of_Motely_Filters_Jaml_IJamlClause.read(reader);
    return value;
}
function write_Motely_Filters_Jaml_JamlSpan(writer, value) {
    $s.System_Int32.write(writer, value.startLine);
    $s.System_Int32.write(writer, value.startColumn);
    $s.System_Int32.write(writer, value.endLine);
    $s.System_Int32.write(writer, value.endColumn);
}
function read_Motely_Filters_Jaml_JamlSpan(reader) {
    const value = {};
    value.startLine = $s.System_Int32.read(reader);
    value.startColumn = $s.System_Int32.read(reader);
    value.endLine = $s.System_Int32.read(reader);
    value.endColumn = $s.System_Int32.read(reader);
    return value;
}
function write_Motely_Filters_MotelyScoredSeedResult(writer, value) {
    $s.System_Int32.write(writer, value.score);
    $s.System_String.write(writer, value.seed);
    $s.System_Int32Array.write(writer, value.tallies);
}
function read_Motely_Filters_MotelyScoredSeedResult(reader) {
    const value = {};
    value.score = $s.System_Int32.read(reader);
    value.seed = $s.System_String.read(reader);
    value.tallies = $s.System_Int32Array.read(reader);
    return value;
}
function write_Motely_Lsp_Core_JamlCompletionItem(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_String.write(writer, value.label);
    $s.System_String.write(writer, value.kind);
    writer.writeBool(value.detail != null);
    if (value.detail != null) $s.System_String.write(writer, value.detail);
}
function read_Motely_Lsp_Core_JamlCompletionItem(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.label = $s.System_String.read(reader);
    value.kind = $s.System_String.read(reader);
    if (reader.readBool()) value.detail = $s.System_String.read(reader);
    return value;
}
function write_Motely_Lsp_Core_JamlDiagnostic(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.Motely_Filters_Jaml_JamlSpan.write(writer, value.span);
    $s.System_String.write(writer, value.message);
    $s.Motely_Lsp_Core_JamlDiagnosticSeverity.write(writer, value.severity);
    $s.System_String.write(writer, value.code);
}
function read_Motely_Lsp_Core_JamlDiagnostic(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.span = $s.Motely_Filters_Jaml_JamlSpan.read(reader);
    value.message = $s.System_String.read(reader);
    value.severity = $s.Motely_Lsp_Core_JamlDiagnosticSeverity.read(reader);
    value.code = $s.System_String.read(reader);
    return value;
}
function write_Motely_Lsp_Core_JamlHoverInfo(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.Motely_Filters_Jaml_JamlSpan.write(writer, value.span);
    $s.System_String.write(writer, value.markdown);
}
function read_Motely_Lsp_Core_JamlHoverInfo(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.span = $s.Motely_Filters_Jaml_JamlSpan.read(reader);
    value.markdown = $s.System_String.read(reader);
    return value;
}
function write_Motely_MotelyItem(writer, value) {
    $s.System_Int32.write(writer, value.value);
    $s.Motely_Enums_MotelyItemType.write(writer, value.type);
    $s.Motely_Enums_MotelyItemTypeCategory.write(writer, value.typeCategory);
    $s.Motely_Enums_MotelyItemSeal.write(writer, value.seal);
    $s.Motely_Enums_MotelyItemEnhancement.write(writer, value.enhancement);
    $s.Motely_Enums_MotelyItemEdition.write(writer, value.edition);
    $s.Motely_Enums_MotelyStandardcardSuit.write(writer, value.standardcardSuit);
    $s.Motely_Enums_MotelyStandardcardRank.write(writer, value.standardcardRank);
    $s.System_Boolean.write(writer, value.isPerishable);
    $s.System_Boolean.write(writer, value.isEternal);
    $s.System_Boolean.write(writer, value.isRental);
}
function read_Motely_MotelyItem(reader) {
    const value = {};
    value.value = $s.System_Int32.read(reader);
    value.type = $s.Motely_Enums_MotelyItemType.read(reader);
    value.typeCategory = $s.Motely_Enums_MotelyItemTypeCategory.read(reader);
    value.seal = $s.Motely_Enums_MotelyItemSeal.read(reader);
    value.enhancement = $s.Motely_Enums_MotelyItemEnhancement.read(reader);
    value.edition = $s.Motely_Enums_MotelyItemEdition.read(reader);
    value.standardcardSuit = $s.Motely_Enums_MotelyStandardcardSuit.read(reader);
    value.standardcardRank = $s.Motely_Enums_MotelyStandardcardRank.read(reader);
    value.isPerishable = $s.System_Boolean.read(reader);
    value.isEternal = $s.System_Boolean.read(reader);
    value.isRental = $s.System_Boolean.read(reader);
    return value;
}
function write_Motely_MotelyProgress(writer, value) {
    writer.writeBool(value != null);
    if (value == null) return;
    $s.System_Int64.write(writer, value.completedBatchCount);
    $s.System_Int64.write(writer, value.totalBatchCount);
    $s.System_Int64.write(writer, value.seedsSearched);
    $s.System_Int64.write(writer, value.matchingSeeds);
    $s.System_Double.write(writer, value.seedsPerMillisecond);
    $s.System_Double.write(writer, value.percentComplete);
    $s.System_Int64.write(writer, value.elapsedMilliseconds);
    writer.writeBool(value.estimatedTimeRemainingMilliseconds != null);
    if (value.estimatedTimeRemainingMilliseconds != null) $s.System_Int64OrNull.write(writer, value.estimatedTimeRemainingMilliseconds);
}
function read_Motely_MotelyProgress(reader) {
    if (!reader.readBool()) return null;
    const value = {};
    value.completedBatchCount = $s.System_Int64.read(reader);
    value.totalBatchCount = $s.System_Int64.read(reader);
    value.seedsSearched = $s.System_Int64.read(reader);
    value.matchingSeeds = $s.System_Int64.read(reader);
    value.seedsPerMillisecond = $s.System_Double.read(reader);
    value.percentComplete = $s.System_Double.read(reader);
    value.elapsedMilliseconds = $s.System_Int64.read(reader);
    if (reader.readBool()) value.estimatedTimeRemainingMilliseconds = $s.System_Int64OrNull.read(reader);
    return value;
}

export default $s;