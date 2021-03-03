const { Client } = require("pg");
const client = new Client("postgres://utgzulfz:pQzv_vmyJH24DpuGOFGUo81W-WMiduKm@ziggy.db.elephantsql.com:5432/utgzulfz");
client.connect().then(async ()=>{
    try{
        const{rows} = await client.query('select * from booking where booked_by = $1',[6])
        console.log(rows.filter((row)=>{return row.booking_state === 'confirmed'}))

    }
    catch (e) {
       console.log(e)
    }
    finally {
        client.end()
    }
})