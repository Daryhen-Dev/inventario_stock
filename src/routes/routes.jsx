import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export function MyRountes() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}