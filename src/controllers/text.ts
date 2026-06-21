import { type Text, TextModel } from "../models/text.ts";

export default class TextController {
    textModel: TextModel;
    constructor(textModel: TextModel) {
        this.textModel = textModel;
    }

    
}