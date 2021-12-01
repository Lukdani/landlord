class ApartmentController {
  constructor(apartmentModel, apartmentView) {
    this.apartmentModel = apartmentModel;
    this.apartmentView = apartmentView;
    this.index = 0;
    this.apartmentModel.populateApartments();
    this.renderApartments();
    document
      .querySelector("#moreApartmentsButton")
      .addEventListener("click", () => this.renderApartments());
  }

  renderApartments() {
    var newIndex = this.index + 3;
    this.apartmentView.renderApartments(
      [...this.apartmentModel.state.apartments].slice(this.index, newIndex)
    );
    this.index = newIndex;
    this.apartmentView.bindFavoriteButton(() => console.log("test"));
  }
}

export default ApartmentController;
