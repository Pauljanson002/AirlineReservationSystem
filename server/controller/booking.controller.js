import booking_db from './../db/booking.db'

const listBookingWithUserId = async (req,res,next)=>{
    const bookings = await booking_db.selectBookingWithUserId(req.params.user_id)
    res.status(200).json(bookings)
}
const confirmBookingWithBookingCode = async (req,res,next)=>{
    await booking_db.updateBookingStateWithBookingCode(req.params.booking_code)
    res.status(200).json({
        "message":"Successfully booked"
    })
}
const cancelBookingWithBookingCode = async (req,res,next)=>{
    await booking_db.cancelBookingStateWithBookingCode(req.params.booking_code)
    res.status(200).json({
        "message":"Successfully canceled"
    })
}

export {listBookingWithUserId,confirmBookingWithBookingCode,cancelBookingWithBookingCode}