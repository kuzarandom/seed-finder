import type * as $bcl from "../../bcl/index.mjs";

export namespace MotelyWasm {
    export function getVersion(): string;
}
export namespace MotelyLsp {
    export function diagnose(text: string): Array<JamlDiagnostic>;
    export function hover(text: string, line: number, character: number): JamlHoverInfo | null;
    export function complete(text: string, line: number, character: number): Array<JamlCompletionItem>;
    export function explain(topic: string): string | null;
}
export namespace MotelyJaml {
    export function fromJaml(content: string): JamlConfig;
    export function validate(content: string): string | null;
    export function nativeFilterNames(): Array<string>;
    export function listItems(kind: string, query?: string): Array<string>;
    export function validateLine(line: string): string | null;
    export function canonicalizeLine(line: string): string;
}
export namespace MotelyJamlyzer {
    export function analyzeSeeds(config: JamlConfig): Array<MotelyJamlyzerSeedResult>;
    export function analyzeSeedsPaged(config: JamlConfig, eventRolls: number): Array<MotelyJamlyzerSeedResult>;
    export function resumeSeeds(config: JamlConfig, resumeFrom: MotelyJamlyzerStreamStates, eventRolls: number): Array<MotelyJamlyzerSeedResult>;
}
export namespace MotelySearch {
    export const onProgress: $bcl.Event<[obj: MotelyProgress]>;
    export const onSeedMatch: $bcl.Event<[obj: string]>;
    export const onScoredResult: $bcl.Event<[obj: MotelyScoredSeedResult]>;
    export function searchList(config: JamlConfig): Promise<Array<MotelyScoredSeedResult>>;
    export function searchRandom(config: JamlConfig, count: number): Promise<Array<MotelyScoredSeedResult>>;
    export function searchSequential(config: JamlConfig, startBatchIndex: bigint, endBatchIndex: bigint, batchCharacterCount: number): Promise<Array<MotelyScoredSeedResult>>;
    export function collect(config: JamlConfig, stopAfter: bigint): Promise<Array<MotelyScoredSeedResult>>;
    export function collectSequential(config: JamlConfig, stopAfter: bigint, startBatchIndex: bigint, endBatchIndex: bigint, batchCharacterCount: number): Promise<Array<MotelyScoredSeedResult>>;
    export function findOne(config: JamlConfig): Promise<Array<MotelyScoredSeedResult>>;
}
export namespace MotelyUtilities {
    export function seedToTotalIndex(seed: string): bigint;
    export function totalIndexToSeed(index: bigint): string;
    export function seedToSearchIndex(seed: string): bigint;
    export function searchIndexToSeed(index: bigint, length: number): string;
    export function getFirstSeedOfLength(length: number): bigint;
    export function maxSearchIndexInclusive(length: number): bigint;
    export function seedToBatchIndex(seed: string, batchSize: number): bigint;
    export function batchIndexToSeedPrefix(batchIndex: bigint, batchSize: number): string;
    export function searchIndexRangeToBatchRange(startSearchIndex: bigint, endSearchIndexInclusive: bigint, batchCharacterCount: number): BigInt64Array;
    export function repeatCharKeywords(repeatCount: number): Array<string>;
    export function ascendingDigitLetterKeywords(length: number): Array<string>;
    export function descendingDigitLetterKeywords(length: number): Array<string>;
    export function mirrorPatternKeywords(length: number): Array<string>;
    export function getAestheticSeedCount(aesthetic: JamlAesthetic): bigint;
    export function grossKeywords(): Array<string>;
    export function funnyKeywords(): Array<string>;
    export function balatroKeywords(): Array<string>;
}
export interface IJamlClause {
    label?: string;
    min: number;
    max?: number;
    score: number;
}
export enum MotelyBoosterPack {
    Arcana,
    JumboArcana,
    MegaArcana,
    Celestial,
    JumboCelestial,
    MegaCelestial,
    Standard,
    JumboStandard,
    MegaStandard,
    Buffoon,
    JumboBuffoon,
    MegaBuffoon,
    Spectral,
    JumboSpectral,
    MegaSpectral
}
export enum MotelyBossBlind {
    TheClub,
    TheGoad,
    TheHead,
    TheHook,
    TheManacle,
    ThePillar,
    ThePsychic,
    TheWindow,
    TheArm,
    TheFish,
    TheFlint,
    TheHouse,
    TheMark,
    TheMouth,
    TheNeedle,
    TheWall,
    TheWater,
    TheWheel,
    TheEye,
    TheTooth,
    ThePlant,
    TheSerpent,
    TheOx,
    AmberAcorn,
    CeruleanBell,
    CrimsonHeart,
    VerdantLeaf,
    VioletVessel
}
export enum MotelyDeck {
    Red,
    Blue,
    Yellow,
    Green,
    Black,
    Magic,
    Nebula,
    Ghost,
    Abandoned,
    Checkered,
    Zodiac,
    Painted,
    Anaglyph,
    Plasma,
    Erratic
}
export enum MotelyItemEdition {
    None,
    Foil,
    Holographic,
    Polychrome,
    Negative
}
export enum MotelyItemEnhancement {
    None,
    Bonus,
    Mult,
    Wild,
    Glass,
    Steel,
    Stone,
    Gold,
    Lucky
}
export enum MotelyItemSeal {
    None,
    Gold,
    Red,
    Blue,
    Purple
}
export enum MotelyItemType {
    TwoOfClubs,
    ThreeOfClubs,
    FourOfClubs,
    FiveOfClubs,
    SixOfClubs,
    SevenOfClubs,
    EightOfClubs,
    NineOfClubs,
    TenOfClubs,
    JackOfClubs,
    QueenOfClubs,
    KingOfClubs,
    AceOfClubs,
    TwoOfDiamonds,
    ThreeOfDiamonds,
    FourOfDiamonds,
    FiveOfDiamonds,
    SixOfDiamonds,
    SevenOfDiamonds,
    EightOfDiamonds,
    NineOfDiamonds,
    TenOfDiamonds,
    JackOfDiamonds,
    QueenOfDiamonds,
    KingOfDiamonds,
    AceOfDiamonds,
    TwoOfHearts,
    ThreeOfHearts,
    FourOfHearts,
    FiveOfHearts,
    SixOfHearts,
    SevenOfHearts,
    EightOfHearts,
    NineOfHearts,
    TenOfHearts,
    JackOfHearts,
    QueenOfHearts,
    KingOfHearts,
    AceOfHearts,
    TwoOfSpades,
    ThreeOfSpades,
    FourOfSpades,
    FiveOfSpades,
    SixOfSpades,
    SevenOfSpades,
    EightOfSpades,
    NineOfSpades,
    TenOfSpades,
    JackOfSpades,
    QueenOfSpades,
    KingOfSpades,
    AceOfSpades,
    Familiar,
    Grim,
    Incantation,
    Talisman,
    Aura,
    Wraith,
    Sigil,
    Ouija,
    Ectoplasm,
    Immolate,
    Ankh,
    DejaVu,
    Hex,
    Trance,
    Medium,
    Cryptid,
    TheSoul,
    BlackHole,
    TheFool,
    TheMagician,
    TheHighPriestess,
    TheEmpress,
    TheEmperor,
    TheHierophant,
    TheLovers,
    TheChariot,
    Justice,
    TheHermit,
    TheWheelOfFortune,
    Strength,
    TheHangedMan,
    Death,
    Temperance,
    TheDevil,
    TheTower,
    TheStar,
    TheMoon,
    TheSun,
    Judgement,
    TheWorld,
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
    Pluto,
    PlanetX,
    Ceres,
    Eris,
    Joker,
    GreedyJoker,
    LustyJoker,
    WrathfulJoker,
    GluttonousJoker,
    JollyJoker,
    ZanyJoker,
    MadJoker,
    CrazyJoker,
    DrollJoker,
    SlyJoker,
    WilyJoker,
    CleverJoker,
    DeviousJoker,
    CraftyJoker,
    HalfJoker,
    CreditCard,
    Banner,
    MysticSummit,
    EightBall,
    Misprint,
    RaisedFist,
    ChaostheClown,
    ScaryFace,
    AbstractJoker,
    DelayedGratification,
    GrosMichel,
    EvenSteven,
    OddTodd,
    Scholar,
    BusinessCard,
    Supernova,
    RideTheBus,
    Egg,
    Runner,
    IceCream,
    Splash,
    BlueJoker,
    FacelessJoker,
    GreenJoker,
    Superposition,
    ToDoList,
    Cavendish,
    RedCard,
    SquareJoker,
    RiffRaff,
    Photograph,
    ReservedParking,
    MailInRebate,
    Hallucination,
    FortuneTeller,
    Juggler,
    Drunkard,
    GoldenJoker,
    Popcorn,
    WalkieTalkie,
    SmileyFace,
    GoldenTicket,
    Swashbuckler,
    HangingChad,
    ShootTheMoon,
    JokerStencil,
    FourFingers,
    Mime,
    CeremonialDagger,
    MarbleJoker,
    LoyaltyCard,
    Dusk,
    Fibonacci,
    SteelJoker,
    Hack,
    Pareidolia,
    SpaceJoker,
    Burglar,
    Blackboard,
    SixthSense,
    Constellation,
    Hiker,
    CardSharp,
    Madness,
    Seance,
    Vampire,
    Shortcut,
    Hologram,
    Cloud9,
    Rocket,
    MidasMask,
    Luchador,
    GiftCard,
    TurtleBean,
    Erosion,
    ToTheMoon,
    StoneJoker,
    LuckyCat,
    Bull,
    DietCola,
    TradingCard,
    FlashCard,
    SpareTrousers,
    Ramen,
    Seltzer,
    Castle,
    MrBones,
    Acrobat,
    SockAndBuskin,
    Troubadour,
    Certificate,
    SmearedJoker,
    Throwback,
    RoughGem,
    Bloodstone,
    Arrowhead,
    OnyxAgate,
    GlassJoker,
    Showman,
    FlowerPot,
    MerryAndy,
    OopsAll6s,
    TheIdol,
    SeeingDouble,
    Matador,
    Satellite,
    Cartomancer,
    Astronomer,
    Bootstraps,
    DNA,
    Vagabond,
    Baron,
    Obelisk,
    BaseballCard,
    AncientJoker,
    Campfire,
    Blueprint,
    WeeJoker,
    HitTheRoad,
    TheDuo,
    TheTrio,
    TheFamily,
    TheOrder,
    TheTribe,
    Stuntman,
    InvisibleJoker,
    Brainstorm,
    DriversLicense,
    BurntJoker,
    Canio,
    Triboulet,
    Yorick,
    Chicot,
    Perkeo,
    Invalid,
    NotImplemented,
    JokerExcludedByStream,
    PlanetExcludedByStream,
    TarotExcludedByStream,
    SpectralExcludedByStream,
    StandardCardExcludedByStream
}
export enum MotelyItemTypeCategory {
    Standardcard,
    SpectralCard,
    TarotCard,
    PlanetCard,
    Joker,
    Invalid
}
export enum MotelyStake {
    White,
    Red,
    Green,
    Black,
    Blue,
    Purple,
    Orange,
    Gold
}
export enum MotelyStandardcardRank {
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace
}
export enum MotelyStandardcardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}
export enum MotelyTag {
    UncommonTag,
    RareTag,
    NegativeTag,
    FoilTag,
    HolographicTag,
    PolychromeTag,
    InvestmentTag,
    VoucherTag,
    BossTag,
    StandardTag,
    CharmTag,
    MeteorTag,
    BuffoonTag,
    HandyTag,
    GarbageTag,
    EtherealTag,
    CouponTag,
    DoubleTag,
    JuggleTag,
    D6Tag,
    TopupTag,
    SpeedTag,
    OrbitalTag,
    EconomyTag
}
export enum MotelyVoucher {
    Overstock,
    OverstockPlus,
    ClearanceSale,
    Liquidation,
    Hone,
    GlowUp,
    RerollSurplus,
    RerollGlut,
    CrystalBall,
    OmenGlobe,
    Telescope,
    Observatory,
    Grabber,
    NachoTong,
    Wasteful,
    Recyclomancy,
    TarotMerchant,
    TarotTycoon,
    PlanetMerchant,
    PlanetTycoon,
    SeedMoney,
    MoneyTree,
    Blank,
    Antimatter,
    MagicTrick,
    Illusion,
    Hieroglyph,
    Petroglyph,
    DirectorsCut,
    Retcon,
    PaintBrush,
    Palette
}
export enum JamlDiagnosticSeverity {
    Error,
    Warning,
    Information,
    Hint
}
export enum JamlAesthetic {
    Palindrome,
    Echo,
    Mirror,
    Repeater,
    Step,
    Leet,
    Gross,
    Funny,
    Balatro,
    Nsfw
}
export type MotelyJamlyzerAnteResult = Readonly<{
    ante: number;
    boss: MotelyBossBlind;
    voucher: MotelyVoucher;
    smallBlindTag: MotelyTag;
    bigBlindTag: MotelyTag;
    shopItems: Array<MotelyItem>;
    packs: Array<MotelyJamlyzerPack>;
    pulls: MotelyJamlyzerPulls;
    shopStreams: MotelyJamlyzerShopStreams;
}>;
export type MotelyJamlyzerEvents = Readonly<{
    luckyMoney: Array<boolean>;
    luckyMult: Array<boolean>;
    wheelOfFortune: Int32Array;
    cavendish: Array<boolean>;
    grosMichel: Array<boolean>;
    space: Array<boolean>;
    business: Array<boolean>;
    bloodstone: Array<boolean>;
    parking: Array<boolean>;
    eightBall: Array<boolean>;
    glass: Array<boolean>;
    omenGlobe: Array<boolean>;
    theWheel: Array<boolean>;
    misprint: Int32Array;
}>;
export type MotelyJamlyzerPack = Readonly<{
    pack: MotelyBoosterPack;
    items: Array<MotelyItem>;
}>;
export type MotelyJamlyzerPulls = Readonly<{
    judgementJokers: Array<MotelyItem>;
    wraithJokers: Array<MotelyItem>;
    emperorTarots: Array<MotelyItem>;
    purpleSealTarots: Array<MotelyItem>;
    sixthSenseSpectrals: Array<MotelyItem>;
    seanceSpectrals: Array<MotelyItem>;
    riffRaffJokers: Array<MotelyItem>;
    rareTagJokers: Array<MotelyItem>;
    uncommonTagJokers: Array<MotelyItem>;
    legendaryJokers: Array<MotelyItem>;
    voucherSequence: Array<MotelyVoucher>;
}>;
export type MotelyJamlyzerSeedResult = Readonly<{
    seed: string;
    score: number;
    antes: Array<MotelyJamlyzerAnteResult>;
    events: MotelyJamlyzerEvents;
    streamStates: MotelyJamlyzerStreamStates;
    erraticDeck?: Array<MotelyItem>;
}>;
export type MotelyJamlyzerShopStreams = Readonly<{
    shopJokers: Array<MotelyItem>;
    commonShopJokers: Array<MotelyItem>;
    uncommonShopJokers: Array<MotelyItem>;
    rareShopJokers: Array<MotelyItem>;
    shopTarots: Array<MotelyItem>;
    shopPlanets: Array<MotelyItem>;
    shopSpectrals: Array<MotelyItem>;
}>;
export type MotelyJamlyzerStreamStates = Readonly<{
    rollOffset: number;
    luckyMoney: number;
    luckyMult: number;
    wheelOfFortune: number;
    cavendish: number;
    grosMichel: number;
    space: number;
    business: number;
    bloodstone: number;
    parking: number;
    eightBall: number;
    glass: number;
    omenGlobe: number;
    theWheel: number;
    misprint: number;
}>;
export type JamlConfig = Readonly<{
    id: string;
    name?: string;
    description?: string;
    author?: string;
    deck: MotelyDeck;
    stake: MotelyStake;
    seeds: Array<string>;
    filter?: string;
    must: Array<IJamlClause>;
    should: Array<IJamlClause>;
    mustNot: Array<IJamlClause>;
}>;
export type JamlSpan = Readonly<{
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}>;
export type MotelyScoredSeedResult = Readonly<{
    score: number;
    seed: string;
    tallies: Int32Array;
}>;
export type JamlCompletionItem = Readonly<{
    label: string;
    kind: string;
    detail?: string;
}>;
export type JamlDiagnostic = Readonly<{
    span: JamlSpan;
    message: string;
    severity: JamlDiagnosticSeverity;
    code: string;
}>;
export type JamlHoverInfo = Readonly<{
    span: JamlSpan;
    markdown: string;
}>;
export type MotelyItem = Readonly<{
    value: number;
    type: MotelyItemType;
    typeCategory: MotelyItemTypeCategory;
    seal: MotelyItemSeal;
    enhancement: MotelyItemEnhancement;
    edition: MotelyItemEdition;
    standardcardSuit: MotelyStandardcardSuit;
    standardcardRank: MotelyStandardcardRank;
    isPerishable: boolean;
    isEternal: boolean;
    isRental: boolean;
}>;
export type MotelyProgress = Readonly<{
    completedBatchCount: bigint;
    totalBatchCount: bigint;
    seedsSearched: bigint;
    matchingSeeds: bigint;
    seedsPerMillisecond: number;
    percentComplete: number;
    elapsedMilliseconds: bigint;
    estimatedTimeRemainingMilliseconds?: bigint;
}>;
