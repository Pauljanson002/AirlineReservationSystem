import report_db from "./../db/report.db"

const readFlightReportsByAge = async (req,res,next)=>{
    try{
        const report = await report_db.getFlightReportByAgeGroup({
            airplane_num:req.params.airplane_num
        })
        res.status(200).json(report);
    }
    catch (e) {
       console.log(e)
        res.status(400).json({
            "error":'Unable to generate report'
        })
    }
}

const readPassengerReportByDestination = async (req,res)=>{
    try{
        const report = await report_db.getPassengerReportByDestination({
            destination:req.body.destination,
            start_date:req.body.start_date,
            end_date:req.body.end_date
        })
        res.status(200).json(report);
    }
    catch (e) {
        console.log(e)
        res.status(400).json({
            "error":'Unable to generate report'
        })
    }
}
const readBookingReportByPassengerType = async (req,res)=>{
    try{
        const report = await report_db.getBookingReportByPassengerType({
            start_date:req.body.start_date,
            end_date:req.body.end_date
        })
        res.status(200).json(report);
    }
    catch (e) {
        console.log(e)
        res.status(400).json({
            "error":'Unable to generate report'
        })
    }
}
const readPassengerCountData = async (req,res)=>{
    try{
        const report = await report_db.getPassengerCountData({
           from_airport: req.body.from_airport,
           to_airport: req.body.to_airport
        })
        res.status(200).json(report);
    }
    catch (e) {
        console.log(e)
        res.status(400).json({
            "error":'Unable to generate report'
        })
    }
}
const readRevenueReport = async (req,res)=>{
    try{
        const report = await report_db.getRevenueReport()
        res.status(200).json(report);
    }
    catch (e) {
        console.log(e)
        res.status(400).json({
            "error":'Unable to generate report'
        })
    }
}
export {readFlightReportsByAge,readPassengerReportByDestination,readBookingReportByPassengerType,readPassengerCountData,readRevenueReport}