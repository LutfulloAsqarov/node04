import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    password: String,
    age: Number,
    url: Array,
    gender: String,
    isActive: Boolean,
    budget: Number,
});
export const Blogs = mongoose.model("blog", blogSchema);
