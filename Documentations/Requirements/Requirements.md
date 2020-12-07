B airways 

General information 

		Based on - Indonesia 
		Transits not available
	

	Entities		Attributes
	Flight			Airplane, Route[origin,Destination],Seat[multiple], Schedule
	Model 			Name, number , seating capacity
	Airplane		id, model
	Route 			Start, end 
	Airport 		code, location [ ...,city,country]
	Passenger 		Type [ Guest, Registered User]
	Guest 	
	Registered User		Category[Frquent, Gold] (derived by number of times flight booked)
	Ticket 			Price ( Derived from class [ Economy,Business,Platinum] ),Discount (Derived from category of user)
	Seat			ID, Booked[yes/no] , class
	Booking			state(created, completed)
	Payment			Not processed by system
	Report	
	Managment	





Airplane modes	No of availab e
Boeing 737	3
Boeing 757	4
Airbus A380	1

Availabl airports
	1. CGK
	2. DRS
	3. BIA
	4. HRI
	5. DIEL
	6. BOM
	7. MAA
	8. BKK
	9. DMC
	10. SIN
	
	
	
	
	Users		Goals
	Passenger	Book a flight, Regiser,  View schdedule
		
	
	Non functional requirements 
		
		Scalable
		
	Activities
	
		1) Predefine schedule for flights
		2) Booking 
			a. Show schedule - For a day
			b. Select flight 
			c. Select seat
			d. Create booking 
			e. Payment  ---> Handled by another service
			f. Booking
			g. Ticket allocated
		3) Flight No --->  All passengers travelling in it according to 18 years age
		4) Date range ---> Booking per passeger type ( number of )
		5) Origin and destination  ---- > Past flights , states , passenger classes 
	
	Data base populate the database 
	
	Location given
	30 flights
	Schedule --> 7 days 
	
