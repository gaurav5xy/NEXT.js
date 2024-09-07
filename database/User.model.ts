import {Schema, model, models, Document  } from "mongoose";

export interface IUser extends Document {
    clerkId: string,
    name: string,
    usename: string,
    emial: string,
    password?: string,
    portfolioWebsite: string,
    image: string,
    bio: string,
    joinedAt: Date,
    location?: string,
    saved: Schema.Types.ObjectId[],
    reputation?: number
}

const UserSchema = new Schema ({
    clerkId: {type: String, require: true},
    name: {type:String, require: true},
    usename: {type:String, require: true, unique : true},
    email: {type: String, require: true, unique : true},
    password: {type:String, require: true},
    image: {type:String, require: true},
    portfolioWebsite: {type:String,},
    bio: {type:String,},
    joinedAt: {type:Date, default: Date.now},
    location: {type:String},
    saved: [{type : Schema.Types.ObjectId}],
    reputation: {type: Number, default: 0}
})

const User  = models.User || model('User', UserSchema);
export default User;