import React, { useEffect, useState } from "react";
import './customcss.css';


// Dummy JSON data for seats
const seatsData = [
    { id: 1, seatNumber: "A1", booked: false },
    { id: 2, seatNumber: "A2", booked: false },
    { id: 3, seatNumber: "A3", booked: false },
    { id: 4, seatNumber: "A4", booked: false },
    { id: 5, seatNumber: "A5", booked: false },
    { id: 6, seatNumber: "A6", booked: false },
    { id: 7, seatNumber: "A7", booked: false },
    { id: 8, seatNumber: "A8", booked: false },
    { id: 9, seatNumber: "A9", booked: false },
    { id: 10, seatNumber: "A10", booked: false },
    { id: 11, seatNumber: "A11", booked: false },
    { id: 12, seatNumber: "A12", booked: false },
    { id: 13, seatNumber: "A13", booked: false },
    { id: 14, seatNumber: "A14", booked: false },
    { id: 15, seatNumber: "A15", booked: false },
    { id: 16, seatNumber: "A16", booked: false },
    { id: 17, seatNumber: "A17", booked: false },
    { id: 18, seatNumber: "A18", booked: false },
    { id: 19, seatNumber: "A19", booked: false }
    // Add more seat objects as needed

]

const SeatSelector = () => {
    const [seats, setSeats] = useState(seatsData);
    const [numSeats, setNumSeats] = useState(0);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [book, setBook] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [message, setMessage] = useState('');


    useEffect(() => {
        let storedSeatData = seatsData;
        if (storedSeatData) {
            setSeats(storedSeatData);
        }
    }, [])

    const handleInputChange = (e) => {
        setNumSeats(parseInt(e.target.value))
    }
    const handleInputSubmit = (e) => {
        e.preventDefault();
        // Show seat selection page
        // You can implement routing or toggle a state to switch the view
    }

    const confirmBtn = (seatId) => {
        const updatedSeats = seats.map(seat => {
            if (seat.id === seatId && !seat.booked && selectedSeats.length < numSeats) {
                return { ...seat, booked: !seat.booked };
            }
            return seat;

        });
        const updatedSelectedSeats = updatedSeats.filter(seat => seat.booked).map(seat => seat.id);
        setSelectedSeats(updatedSelectedSeats);
        setSeats(updatedSeats);
        if (numSeats > 0 && updatedSelectedSeats.length > 0) {
            setBook(true)
            setNumSeats(0)
        } else {
            setBook(false)
        }
    }

    const toggleSeatSelection = (seatId) => {
        console.log(seatId);
        const updatedSeats = seats.map(seat => {
            console.log(seat.id);
            if (seat.id === seatId && !seat.booked && selectedSeats.length < numSeats) {

                return { ...seat, booked: !seat.booked }
            }
            return seat;
        });

        const updatedSelectedSeats = updatedSeats.filter(seat => seat.booked).map(seat => seat.id);
        setSelectedSeats(updatedSelectedSeats);
        setSeats(updatedSeats);

        localStorage.setItem("seatsData", JSON.stringify(updatedSeats));
    }

    const handleChangeYes = () => {
        setBook(false);
        setConfirmed(true)
        setMessage('ticket booked succesfully')
    }




    return (<>
        <div className="container">
            <h2>Book Now</h2>
            <div className="row">
                <div className="col mt-5">
                    <form onSubmit={handleInputSubmit}>
                        <label htmlFor="numSeats">Number of Seats:</label>
                        <input type="number" id="numSeats" name="numSeats" value={numSeats} onChange={handleInputChange} />
                        <button type="submit" onClick={confirmBtn}>Book Seats</button>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-4" style={{ columns: 3, columnGap: "20px" }}>
                    {/* {JSON.stringify(seats)} */}
                    <div className="seatMap">
                        {seats.map(seat =>
                            <div key={seat.id}
                                className={`seat ${seat.booked ? "booked" : (selectedSeats.includes(seat.id) ? "selected" : "available")}`}
                                style={{ backgroundColor: confirmed && seat.booked ? "green" : "" }}
                                onClick={() => toggleSeatSelection(seat.id)}>
                                {seat.seatNumber}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {book && (<div>
                <p>Ticket confirmation message</p>
                <button onClick={handleChangeYes}>Yes</button>
            </div>)}
            <p>{message}</p>
        </div >
    </>);
}

export default SeatSelector