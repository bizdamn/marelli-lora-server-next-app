import nc from 'next-connect';
import Entries from '../../../models/Entries';
import db from '../../../utils/db';
import moment from 'moment'

const handler = nc();


handler.post(async (req, res) => {
  // console.log(new Date(moment(req.body.start_date, "YYYY-MM-DDT00:00:00.000Z")))
  // console.log(new Date(moment(req.body.start_date, "YYYY-MM-DDT00:00:00.000Z")).add(1, 'days'))
  await db.connect();
  const filteredEntries = await Entries.find({timestamp: { $gt: new Date(moment(req.body.start_date, "YYYY-MM-DD")), $lt: new Date(moment(req.body.start_date, "YYYY-MM-DD")).add(1, 'days') },devEUI: req.body.deviceEUI  })
  await db.disconnect();
  res.send(filteredEntries);

});

export default handler;
