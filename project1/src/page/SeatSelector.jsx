import React, { useEffect, useState } from "react";

// Dummy JSON data for seats
const seatsData = [
    { id: 1, seatName: "A1", booked: false },
    { id: 2, seatName: "A2", booked: true },
    { id: 3, seatName: "A3", booked: false },
    { id: 4, seatName: "A4", booked: false },
    { id: 5, seatName: "A5", booked: false },
    { id: 6, seatName: "A6", booked: false },
    { id: 7, seatName: "A7", booked: false },
    { id: 8, seatName: "A8", booked: false },
    { id: 9, seatName: "A9", booked: false },
    { id: 10, seatName: "A10", booked: false },
    { id: 11, seatName: "A11", booked: false },
    { id: 12, seatName: "A12", booked: false },
    { id: 13, seatName: "A13", booked: false }
    { id: 14, seatName: "A14", booked: false },
    { id: 15, seatName: "A15", booked: false },
    { id: 16, seatName: "A16", booked: false },
    { id: 17, seatName: "A17", booked: false },
    { id: 18, seatName: "A18", booked: false },
    { id: 19, seatName: "A19", booked: false }
    // Add more seat objects as needed

]

const SeatSelector = () => {
    const [numSeats, setNumSeats] = useState(0);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seats, setSeats] = useState(seatsData);

    useEffect(() => {
        let storedSeatData = seatsData;
        if (storedSeatData) {
            setSeats(storedSeatData);
        }
    }, [])

    const handleInputChange = (e) => {
        setNumSeats(parseInt(e.target.value))
        // Show seat selection page
        // You can implement routing or toggle a state to switch the view
    }
    const handleInputSubmit = (e) => {
        e.preventDefault()
    }

    return (<>
        <div className="container">
            <h2>Book Now</h2>
            <div className="row">
                <div className="col">
                    <form onSubmit={handleInputSubmit}>
                        <label htmlFor="numSeats">Number of Seats:</label>
                        <input type="number" id="numSeats" name="numSeats" value={numSeats} onChange={handleInputChange} />
                        <button type="submit">Book Seats</button>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-4">
                    {/* {JSON.stringify(seats)} */}
                    <div className="seatMap">
                        {seats.map(seat =>
                            <div key={seat.id}
                                className={`seat ${seat.booked ? "booked" : (selectedSeats.includes(seat.id) ? "selected" : "available")}`}
                                onClick={() => toggleSeatSelection(seat.id)}></div>
                        )}
                    </div>
                </div>
            </div>
        </div>


    </>);
}

export default SeatSelector;