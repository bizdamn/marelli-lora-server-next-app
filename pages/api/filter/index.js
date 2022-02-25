import nc from 'next-connect';
import Entries from '../../../models/Entries';
import db from '../../../utils/db';
const handler = nc();

handler.post(async (req, res) => {
  console.log(new Date(req.body.start_date))
  console.log(new Date(req.body.end_date))

  await db.connect();
  const filteredEntries = await Entries.find({timestamp:{$gt:new Date(req.body.start_date),$lt:new Date(req.body.end_date)},devEUI: req.body.deviceEUI}).sort({timestamp: -1})
  await db.disconnect();

  console.log(filteredEntries);
  res.send(filteredEntries);

});
export default handler;
