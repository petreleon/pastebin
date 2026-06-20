import { type Collection, type DeleteResult, type InsertOneResult, type UpdateResult} from "mongodb";

export interface Text {
    _id?: string,
    title: string,
    content: string
}

export class TextModel {
    collection: Collection<Text>;
    constructor(collection: Collection<Text>) {
        this.collection = collection;
    }
    
    async addText (text: Text): Promise<InsertOneResult<Text>> {
        let response: InsertOneResult<Text> = await this.collection.insertOne(text);
        return response;
    }
    
    async listAll(): Promise<Array<Text>> {
        let list: Array<Text> = [];
        let response = this.collection.find();
        for await (const text of response) {
            list.push(text);
        }
        return list;
    }
    
    async deleteOne(id: string): Promise<DeleteResult> {
        let response = await this.collection.deleteOne({_id: id});
        return response;
    }
    
    async replaceOne(id: string, text: Text): Promise<UpdateResult<Text>> {
        let response = await this.collection.replaceOne({_id: id}, text);
        return response;
    }
}
