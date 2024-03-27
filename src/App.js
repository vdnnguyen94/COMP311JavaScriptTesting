import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import { useState } from "react";

const App = () => {
const [toggle, setToggle] = useState(true);
const [status, setStatus] = useState('Available');

const handleReserve = () => setStatus('Reserved');
const handleCheckIn = () => setStatus('Checked-In');
const handleCheckOut = () => setStatus('Available');
const handleCancel = () => setStatus('Available');
return (
    <div className="App">
      <Header />
      <div className="content">
        <h2>Use Case: Testing Button and Text Components</h2>
        <Button setToggle={setToggle} btnTxt="Toggle Text" />
        <Text toggle={toggle} displayTxt="JavaScript Unit Testing" />
      </div>
      <div >
        <h2>Use case: Hotel Room Reservation Lifecycle Testing</h2>
        <p data-testid="room-status"> <strong> Room Status:</strong> {status}</p>
        {status === 'Available' && <button data-testid="reserve-button" onClick={handleReserve}>Reserve</button>}
        {status === 'Reserved' && (
          <>
            <button data-testid="check-in-button" onClick={handleCheckIn}>Check-In</button>
            <button data-testid="cancel-button" onClick={handleCancel}>Cancel</button>
          </>
        )}
        {status === 'Checked-In' && <button data-testid="check-out-button" onClick={handleCheckOut}>Check-Out</button>}
    </div>
      <Footer />
    </div>
 );
}

    //export details
export default App;
