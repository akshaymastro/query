require('./routes/airports.routes')
require('./database')
const express = require('express')
const app = express()
const airportRoutes=require('./routes/airports.routes')
const airlineEmpRoutes = require("./routes/airlineEmp.routes");
const journeyBookingRoute = require("./routes/journeyBooking.routes");
const ravenueRoutes = require("./routes/ravenue.routes");
const pilotsRoutes = require("./routes/pilots.routes");
const planeFlightstRoutes = require("./routes/planeFlights.routes");
const planeRoutes = require("./routes/plane.routes");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/airports", airportRoutes);
app.use("/bookings", journeyBookingRoute);
app.use("/airlineEmp", airlineEmpRoutes);
// app.use("/revenue", ravenueRoutes);
app.use("/pilots", pilotsRoutes);
app.use("/planeFlights", planeFlightstRoutes);
app.use("/plane", planeRoutes);
app.listen(3000, () => {
  console.log('server started at 3000')
})
