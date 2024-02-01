import { Routes, Route } from "react-router-dom"
import CreationsPage from "../pages/CreationsPage"
import Homepage from "../pages/Homepage"
import DetailsPage from "../pages/DetailsPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Homepage />} />
            <Route path={'/creazioni'} element={<CreationsPage />} />
            <Route path={'/creazioni/:creazioni_id'} element={<DetailsPage />} />

            <Route path={'*'} element={<p>Errore, pagina non trovata</p>} />
        </Routes>
    )
}

export default AppRoutes