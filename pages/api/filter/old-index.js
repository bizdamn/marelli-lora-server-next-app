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
  // 9AM
  // const filteredEntriesOne = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment( req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(9, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  // if( filteredEntriesOne.length>0){
  //   finalTempArray.push(parseInt(filteredEntriesOne[0].temprature))
  //   finalHumArray.push(parseInt(filteredEntriesOne[0].humidity))
  // }
  // else{
  //   finalTempArray.push(null)
  //   finalHumArray.push(null)
  // }

  // 12AM-1 AM
  const filteredEntries121AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(0, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(1, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries121AM.length>0){
    finalTempArray.push(parseInt(filteredEntries121AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries121AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 1AM-2 AM
  const filteredEntries12AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(1, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(2, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries12AM.length>0){
    finalTempArray.push(parseInt(filteredEntries12AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries12AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 2AM-3 AM
  const filteredEntries23AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(2, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(3, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries23AM.length>0){
    finalTempArray.push(parseInt(filteredEntries23AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries23AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 3AM-4 AM
  const filteredEntries34AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(3, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(4, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries34AM.length>0){
    finalTempArray.push(parseInt(filteredEntries34AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries34AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 4AM-5 AM
  const filteredEntries45AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(4, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(5, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries45AM.length>0){
    finalTempArray.push(parseInt(filteredEntries45AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries45AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 5AM-6 AM
  const filteredEntries56AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(5, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(6, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries56AM.length>0){
    finalTempArray.push(parseInt(filteredEntries56AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries56AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 6AM-7 AM
  const filteredEntries67AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(6, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(7, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries67AM.length>0){
    finalTempArray.push(parseInt(filteredEntries67AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries67AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 7AM-8 AM
  const filteredEntries78AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(7, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(8, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries78AM.length>0){
    finalTempArray.push(parseInt(filteredEntries78AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries78AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 8AM-9 AM
  const filteredEntries89AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(8, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(9, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries89AM.length>0){
    finalTempArray.push(parseInt(filteredEntries89AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries89AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }

  // 9 AM-10 AM
  const filteredEntries910AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(9, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(10, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries910AM.length>0){
    finalTempArray.push(parseInt(filteredEntries910AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries910AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 10 AM-11 AM
  const filteredEntries1011AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(10, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(11, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries1011AM.length>0){
    finalTempArray.push(parseInt(filteredEntries1011AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries1011AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 11 AM-12PM
  const filteredEntries1112AM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(11, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(12, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries1112AM.length>0){
    finalTempArray.push(parseInt(filteredEntries1112AM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries1112AM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 12PM-1PM
  const filteredEntries121PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(12, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(13, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries121PM.length>0){
    finalTempArray.push(parseInt(filteredEntries121PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries121PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  
  // 1PM-2PM
  const filteredEntries12PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(13, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(14, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries12PM.length>0){
    finalTempArray.push(parseInt(filteredEntries12PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries12PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  
  // 2PM-3PM
  const filteredEntries23PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(14, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(15, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries23PM.length>0){
    finalTempArray.push(parseInt(filteredEntries23PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries23PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  
  // 3PM-4PM
  const filteredEntries34PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(15, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(16, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries34PM.length>0){
    finalTempArray.push(parseInt(filteredEntries34PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries34PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  
  // 4PM-5PM
  const filteredEntries45PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(16, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(17, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries45PM.length>0){
    finalTempArray.push(parseInt(filteredEntries45PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries45PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }

  // 5PM-6PM
  const filteredEntries56PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(17, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(18, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries56PM.length>0){
    finalTempArray.push(parseInt(filteredEntries56PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries56PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 6PM-7PM
  const filteredEntries67PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(18, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(19, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries67PM.length>0){
    finalTempArray.push(parseInt(filteredEntries67PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries67PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 7PM-8PM
  const filteredEntries78PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(19, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(20, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries78PM.length>0){
    finalTempArray.push(parseInt(filteredEntries78PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries78PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 8PM-9PM
  const filteredEntries89PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(20, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(21, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries89PM.length>0){
    finalTempArray.push(parseInt(filteredEntries89PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries89PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 9PM-10PM
  const filteredEntries910PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(21, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(22, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries910PM.length>0){
    finalTempArray.push(parseInt(filteredEntries910PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries910PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 10PM-11PM
  const filteredEntries1011PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(22, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(23, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries1011PM.length>0){
    finalTempArray.push(parseInt(filteredEntries1011PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries1011PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }
  // 11PM-12PM
  const filteredEntries1112PM = await Entries.find({timestamp: { $gt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(23, 'hours').format("YYYY-MM-DDTHH:mm:ss")), $lt: new Date(moment(req.body.end_date, "YYYY-MM-DD").add(-1, 'days').add(24, 'hours').format("YYYY-MM-DDTHH:mm:ss")) },devEUI: req.body.deviceEUI  }).limit(1)
  if( filteredEntries1112PM.length>0){
    finalTempArray.push(parseInt(filteredEntries1112PM[0].temprature))
    finalHumArray.push(parseInt(filteredEntries1112PM[0].humidity))
  }
  else{
    finalTempArray.push(null)
    finalHumArray.push(null)
  }




  res.send({temprature: finalTempArray,humidity: finalHumArray});

});

export default handler;
