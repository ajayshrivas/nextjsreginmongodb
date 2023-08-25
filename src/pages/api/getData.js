import connectToDatabase from '../../utils/mongodb';
export default async (req, res) => {
     const db = await connectToDatabase();
    const collection = db.collection('pixaurl_templates'); // Replace with your collection name
    const data = await collection.find({}).toArray();
    res.status(200).json(data);
};
