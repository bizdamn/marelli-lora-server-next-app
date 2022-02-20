import nc from 'next-connect';
import Entries from '../../../models/Entries';
import db from '../../../utils/db';
import moment from 'moment'

const handler = nc();


handler.post(async (req, res) => {
  // console.log(req.body.deviceEUI)
  console.log(req.body.start_date)
  console.log(req.body.end_date)

  let finalTempArray=[]
  let finalHumArray=[]
  await db.connect();

  const filteredEntries = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').format("YYYY-MM-DD")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(0, 'days').format("YYYY-MM-DD")) },devEUI: req.body.deviceEUI  })
  await db.disconnect();

    console.log(filteredEntries)

  res.send(filteredEntries);

});

export default handler;
