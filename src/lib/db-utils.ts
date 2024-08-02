import { Collection, MongoClient } from 'mongodb'

export const dbConnect = async () => {
  const url = process.env.mongodb_cluster_url || ''
  const client = new MongoClient(url)
  return await client.connect()
}

export const insertDocument = async (
  client: MongoClient,
  collectionName: string,
  document: object
) => {
  const dbName = 'events'
  const db = client.db(dbName)
  const collection = db.collection(collectionName)
  const insertResult = await collection.insertOne(document)
  return insertResult
}

export const getDocuments = async (
  client: MongoClient,
  collectionName: string,
  contactId: string
) => {
  const dbName = 'events'
  const db = client.db(dbName)
  const collection = db.collection(collectionName)
  return await collection.find({ contactId }).sort({ _id: -1 }).toArray()
}
