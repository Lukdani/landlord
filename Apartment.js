import ApartmentController from "./controllers/ApartmentController.js";
import ApartmentModel from "./models/ApartmentModel.js";
import ApartmentView from "./views/ApartmentView.js";

const rootElement = document.createElement("div", null, "apartmentContainer");
document.querySelector("#apartmentRoot").appendChild(rootElement);
const apartmentView = new ApartmentView(rootElement);
const apartmentModel = new ApartmentModel();

new ApartmentController(apartmentModel, apartmentView);
