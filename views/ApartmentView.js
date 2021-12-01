import { createElement } from "../utils/createElement.js";

class ApartmentView {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.apartmentListContainer = createElement(
      "div",
      ["row"],
      "apartmentListContainer"
    );
    this.rootElement.appendChild(this.apartmentListContainer);
  }

  renderApartments(apartments) {
    if (apartments?.length > 0) {
      apartments.forEach((apartmentItem) => {
        const apartmentContainer = createElement("div", [
          "apartment-container",
          "col-12",
          "col-lg-4",
        ]);

        const apartmentCard = createElement("div", ["apartment-card"], null);
        apartmentContainer.appendChild(apartmentCard);

        const apartmentImage = createElement("img", ["apartment-image"], null);
        apartmentImage.src = apartmentItem.imageUrl;
        apartmentCard.appendChild(apartmentImage);

        const apartmentCardContent = createElement(
          "div",
          ["apartment-card-content", "bg-light"],
          null
        );
        apartmentCard.appendChild(apartmentCardContent);

        const apartmentHeader = createElement("h2", ["apartment-header", null]);
        apartmentHeader.textContent = `${apartmentItem.address}, ${apartmentItem.zipCode} ${apartmentItem.city}`;
        apartmentCardContent.appendChild(apartmentHeader);

        const apartmentDescription = createElement("p", [
          "apartment-description",
          null,
        ]);

        apartmentDescription.textContent = apartmentItem.description;
        apartmentCardContent.appendChild(apartmentDescription);

        const apartmentInfoBoxContainer = createElement(
          "div",
          ["apartment-info-box-container", "row"],
          null
        );

        apartmentCardContent.appendChild(apartmentInfoBoxContainer);

        // RENT
        const apartmentRent = this.generateInfoBox(
          "Husleje",
          apartmentItem.rent
        );
        apartmentInfoBoxContainer.appendChild(apartmentRent);

        // UTILITIES
        const apartmentUtilities = this.generateInfoBox(
          "A'conto",
          apartmentItem.utilities
        );
        apartmentInfoBoxContainer.appendChild(apartmentUtilities);

        // UTILITIES
        const apartmentDeposit = this.generateInfoBox(
          "Indskud",
          apartmentItem.deposit
        );
        apartmentInfoBoxContainer.appendChild(apartmentDeposit);

        // PREPAID RENT
        const apartmentDate = this.generateInfoBox("Dato", apartmentItem.date);
        apartmentInfoBoxContainer.appendChild(apartmentDate);

        const buttonSection = createElement("div", ["row"], null);
        apartmentCardContent.appendChild(buttonSection);

        const readmoreButtonContainer = createElement(
          "div",
          ["col-6", "button-section-container"],
          null
        );
        buttonSection.appendChild(readmoreButtonContainer);

        const readmoreButton = createElement("button", [
          "btn",
          "btn-secondary",
          "text-light",
          "apartment-readMore-button",
        ]);
        readmoreButton.textContent = "Læs mere";
        readmoreButtonContainer.appendChild(readmoreButton);

        const favoriteButtonContainer = createElement(
          "div",
          ["col-6", "button-section-container"],
          null
        );
        buttonSection.appendChild(favoriteButtonContainer);

        const favoriteButton = createElement("button", [
          "btn",
          "text-light",
          "apartment-favorite-button",
        ]);

        favoriteButton.setAttribute("data-apartmentId", apartmentItem.address);

        const favoriteIcon = createElement("i", ["far", "fa-heart"], null);
        favoriteIcon.setAttribute("data-apartmentId", apartmentItem.address);
        favoriteButton.appendChild(favoriteIcon);
        favoriteButtonContainer.appendChild(favoriteButton);

        this.apartmentListContainer.appendChild(apartmentContainer);
      });
    }
  }

  generateInfoBox = (header, text, icon) => {
    const box = createElement("div", ["apartment-info-box", "col-6"], null);
    const boxContent = createElement(
      "div",
      ["apartment-info-box-content"],
      null
    );
    box.appendChild(boxContent);

    const infoHeader = createElement("h3", null, null);
    infoHeader.textContent = header;
    boxContent.appendChild(infoHeader);

    const infoText = createElement("p", null, null);
    infoText.textContent = text;
    boxContent.appendChild(infoText);

    return box;
  };

  toggleFavorited = (id) => {
    const clickedItem = document.querySelector(`i[data-apartmentId="${id}"]`);
    if (clickedItem.classList.contains("fas")) {
      clickedItem.classList.remove("fas");
      clickedItem.classList.remove("favorited");
      clickedItem.classList.add("far");
    } else if (clickedItem.classList.contains("far")) {
      clickedItem.classList.remove("far");
      clickedItem.classList.remove("favorited");
      clickedItem.classList.add("fas");
      clickedItem.classList.add("favorited");
    }
  };

  bindFavoriteButton = (e, callback) => {
    const buttons = document.querySelectorAll(".apartment-favorite-button");
    buttons.forEach((button) => {
      button.removeEventListener("click", this.handleFavoriteEvent);
      button.addEventListener("click", this.handleFavoriteEvent);
    });
  };

  handleFavoriteEvent = (e) => {
    const apartmentId = e.currentTarget.getAttribute("data-apartmentId");
    this.toggleFavorited(apartmentId);
    //callback(clickedItem)
  };
}

export default ApartmentView;
