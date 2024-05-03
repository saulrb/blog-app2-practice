import { dbConnect, insertDocument, getDocuments } from '~/lib/db-utils'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid imput.' })
      return
    }
    // Store it in a database
    const newMessage = {
      email,
      name,
      message
    }
    let client = null
    let insertResult = null
    try {
      client = await dbConnect()
    } catch (error: any) {
      res.status(500).json({ message: 'Connecting to the database failed' })
      return
    }
    try {
      insertResult = await insertDocument(client, 'contacts', newMessage)
      client.close()
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Inserting data failed' })
      return
    }
    res.status(201).json({ contact: insertResult })
  }
}

export default handler
