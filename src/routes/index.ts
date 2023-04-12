// // import typeController from './../controllers/typesequenceController';
import sequenceController from '../controllers/sequencesController';
import RandNumGenController from '../controllers/RandNumController'
// // import employeeController from '../controllers/employeeController';
// // import servicesController from '../controllers/servicesController';
// // import bookingController from '../controllers/bookingController';
// // import authController from '../controllers/authController';

import express from "express";

// import { auth } from "../middlewares/auth"

// // import sequenceOneValidation from '../validations/sequences/getOne';
// // import sequenceCreateValidation from '../validations/sequences/create';
// // import sequenceUpdateValidation from '../validations/sequences/update';

// // import employeeCreateValidation from '../validations/employees/create';
// // import employeeOneValidation from '../validations/employees/getOne';

// // import servicesCreateValidation from '../validations/services/create';
// // import servicesOneValidation from '../validations/services/getOne';
// // import servicesUpdateValidation from '../validations/services/update';

// // import bookingCreateValidation from '../validations/booking/create';
// // import bookingOneValidation from '../validations/booking/getOne';
// // import typesequenceValidation from '../validations/typesequence/create';

const routes = express.Router();

// const login = new authController;
const sequence = new sequenceController;
const randNumbers = new RandNumGenController;
// const employee = new employeeController;
// const typesequence = new typeController;
// const services = new servicesController;
// const booking = new bookingController;


// routes.post("/login", login.login);

routes.get("/Sequences", sequence.listSequences);
routes.get("/random-numbers", randNumbers.generateRandomNumbers)

// routes.post("/clients", sequenceCreateValidation, sequence.createsequence);

// routes.put("/clients/:id", sequenceUpdateValidation, sequence.updatesequence);
// routes.delete("/clients/:id", sequenceOneValidation, sequence.deletesequence);

// routes.get("/employees", employee.listEmployees);
// routes.post("/employees", employeeCreateValidation, employee.createEmployee);
// routes.get("/employees/:id", employeeOneValidation, employee.oneEmployee );
// routes.delete("/employee/:id", employeeOneValidation, employee.deleteEmployee)

// routes.post("/typesequence",typesequenceValidation, typesequence.createType);
// routes.get("/typesequence", typesequence.listTypes);
// routes.put("/typesequence/:id",typesequenceValidation,typesequence.uptadeTypesequence);
// routes.delete("/typesequence/:id",typesequence.deleteType);
// routes.get("/typesequence/:id",typesequence.oneTyper);

// routes.get("/services", services.listServices);
// routes.post("/services", servicesCreateValidation, services.createServices);
// routes.get("/services/:id", servicesOneValidation, services.findByIdServices);
// routes.put("/services/:id", servicesUpdateValidation, services.updateServices);
// routes.delete("/services/:id", services.deleteServices);

// routes.get("/booking", booking.listBookings);
// routes.post("/booking", auth, bookingCreateValidation, booking.createBooking);
// routes.get("/booking/:id", bookingOneValidation, booking.oneBooking);
// routes.delete("/booking/:id", booking.deleteBooking);

export default routes;