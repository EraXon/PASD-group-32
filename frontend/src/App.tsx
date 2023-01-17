import {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BackendContext } from "./BackendContext";
import {HomePage, NotFound} from "./routes/components"
import {DeliveryList} from "./routes/scheduler";
import {WarehouseWorkerPage} from "./routes/warehouse-worker";
import {DelivererPage} from "./routes/deliverer";

function App() {
    const [backend, setBackend] = useState('http://localhost:3000');
    return (
        <Router>
            <BackendContext.Provider value={backend}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dddeliverer" element={<DelivererPage />} />
                    <Route path="/ddscheduler" element={<DeliveryList />} />
                    <Route path="/warehouse-worker" element={<WarehouseWorkerPage />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BackendContext.Provider>
        </Router>
    )
}

export {
    App
}