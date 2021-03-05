const getAllAirplaneNumbers = async ()=>{
    try{
        let response = await fetch('/api/airplane',{
            method:'GET'
        });
        let arr = await response.json()
        let airplaneNumbers = arr.map((item,i)=>{
            return item.airplane_num
        })
        return airplaneNumbers
    }
    catch (e) {
        console.log(e)
    }
}
export {getAllAirplaneNumbers}