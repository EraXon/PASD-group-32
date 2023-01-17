import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Disruptive Delivery Home Page</h1>
            <p>
                This is the DD home page. You can access the entire functionality of the POT from here.
            </p>
            <Link to="/ddscheduler"> Scheduler </Link>
            <br />
            <Link to="/dddscheduler"> Deliverer </Link>
            <br/>
            <Link to="/warehouse-worker"> Warehouse worker</Link>
            <br/>
            <Link to="/orders"> Orders </Link>
        </div>
    );
}

export {
    HomePage
}