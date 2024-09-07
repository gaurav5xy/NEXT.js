import {models, model, Schema, Document} from 'mongoose';

interface ITags extends Document { 
    name: string,
    description: string,
    question: Schema.Types.ObjectId[],
    followers: Schema.Types.ObjectId[];
    createdOn: Date
}

const TagSchema = new Schema ({
    name: {type:String, require: true, unique: true},
    description: {type:String, require: true},
    question: [{type:Schema.Types.ObjectId, ref: 'Question'}],
    followers: [{type:Schema.Types.ObjectId, ref: 'User'}],
    createdOn: {type: Date, default: Date.now}   
})

const Tag  = models.Tag || model('Tag', TagSchema);

export default Tag;