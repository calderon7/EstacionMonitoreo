import { BrowserRouter, Route, Routes as RoutesGroup } from "react-router-dom"
import PointMonitoring from "../pages/PointMonitoring/PointMonitoring"


function Routes() {
    return (
        <BrowserRouter>
          <RoutesGroup>
            <Route
              path="/"
              element={<PointMonitoring></PointMonitoring>}
            />
          </RoutesGroup>
        </BrowserRouter>
      )
}

export default Routes