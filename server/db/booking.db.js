import pool from "./pool";

export default {
    selectBookingWithUserId:async (user_id)=>{
        const {rows} = await pool.query('select count(booking_id),booking_code,booking_state from booking where booked_by = $1 group by booking_code,booking_state',[user_id])
        return rows
    },
    updateBookingStateWithBookingCode:async (booking_code)=>{
        const {rows} = await pool.query(
            'update booking set booking_state = \'confirmed\' where booking_code = $1;',
            [booking_code]
        )
        return rows
    },
    cancelBookingStateWithBookingCode:async (booking_code)=>{
        const {rows} = await pool.query(
            'update booking set booking_state = \'cancelled\' where booking_code = $1;',
            [booking_code]
        )
        return rows
    }
}