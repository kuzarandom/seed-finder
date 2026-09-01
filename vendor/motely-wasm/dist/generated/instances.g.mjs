import { Event } from "../bcl/event.mjs";
import { exports } from "../exports.mjs";
import { instances as $i } from "../instances.mjs";
import $s, { serialize } from "./serializer.g.mjs";
import * as index from "./modules/index.g.mjs";

$i.Motely_Filters_Jaml_IJamlClause = class JS_Export_Motely_Filters_Jaml_IJamlClause {
    constructor(_id) { this._id = _id; }
    get label() { return index.IJamlClause.getLabel(this._id); }
    set label(value) { index.IJamlClause.setLabel(this._id, value); }
    get min() { return index.IJamlClause.getMin(this._id); }
    set min(value) { index.IJamlClause.setMin(this._id, value); }
    get max() { return index.IJamlClause.getMax(this._id); }
    set max(value) { index.IJamlClause.setMax(this._id, value); }
    get score() { return index.IJamlClause.getScore(this._id); }
    set score(value) { index.IJamlClause.setScore(this._id, value); }
};

export default $i;