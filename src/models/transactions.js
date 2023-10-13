import { ObjectId } from "mongodb"

export const deletebyId = async (collection, id) => await collection.deleteOne({ _id: new ObjectId(id) })

export const createRecord = async (collection, body) => await collection.insertOne(body)

export const getRecords = async (collection) => await collection.find({}).toArray()

export const getRecord = async (collection, id) => await collection.findOne({_id: new ObjectId(id)})

export const updateRecord = async (collection, id, newBody) => await collection.updateOne({ _id: new ObjectId(id) }, newBody)