import { type Collection, type DeleteResult, type InsertOneResult, type UpdateResult} from "mongodb";

export interface Text {
    _id?: string,
    title: string,
    content: string
}

export async function addText (collection: Collection<Text>, text: Text): Promise<InsertOneResult<Text>> {
    let response: InsertOneResult<Text> = await collection.insertOne(text);
    return response;
}

export async function listAll(collection: Collection<Text>): Promise<Array<Text>> {
    let list: Array<Text> = [];
    let response = collection.find();
    for await (const text of response) {
        list.push(text);
    }
    return list;
}

export async function deleteOne(collection: Collection<Text>, id: string): Promise<DeleteResult> {
    let response = await collection.deleteOne({_id: id});
    return response;
}

export async function replaceOne(collection: Collection<Text>, id: string, text: Text): Promise<UpdateResult<Text>> {
    let response = await collection.replaceOne({_id: id}, text);
    return response;
}


