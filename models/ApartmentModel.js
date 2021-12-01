const apartments = [
  {
    address: "Lykkevej 12",
    city: "Slagelse",
    zipCode: "4200",
    description: "En rummelig lejlighed med plads til bros",
    landlord: "Jens Hansen",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rent: "2.900 kr.",
    utilities: "750 kr.",
    deposit: "8.700 kr",
    prepaidRent: "2.900 kr",
    date: "01/12/21",
  },
  {
    address: "Strædet 42",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rent: "4.500 kr.",
    utilities: "850 kr.",
    deposit: "13.500 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Strædet 58",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rent: "4.900 kr.",
    utilities: "1.100 kr.",
    deposit: "14.700 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Strædet 254",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    rent: "4.900 kr.",
    utilities: "1.100 kr.",
    deposit: "14.700 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Strædet 153",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    rent: "4.900 kr.",
    utilities: "1.100 kr.",
    deposit: "14.700 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Strædet 152",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    rent: "4.900 kr.",
    utilities: "1.100 kr.",
    deposit: "14.700 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Lykkevej 2",
    city: "Slagelse",
    zipCode: "4200",
    description: "En rummelig lejlighed med plads til bros",
    landlord: "Jens Hansen",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rent: "2.900 kr.",
    utilities: "750 kr.",
    deposit: "8.700 kr",
    prepaidRent: "2.900 kr",
    date: "01/12/21",
  },
  {
    address: "Strædet 49",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rent: "4.500 kr.",
    utilities: "850 kr.",
    deposit: "13.500 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Strædet 18",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rent: "4.900 kr.",
    utilities: "1.100 kr.",
    deposit: "14.700 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Magohnistræde 154",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    rent: "4.900 kr.",
    utilities: "1.100 kr.",
    deposit: "14.700 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Maglevej 12",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    rent: "4.900 kr.",
    utilities: "1.100 kr.",
    deposit: "14.700 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
  {
    address: "Lykkevej 8",
    city: "Ringsted",
    zipCode: "4100",
    description: "Stor lejlighed med plads til roomies",
    landlord: "Gurli Jensen",
    imageUrl:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    rent: "4.900 kr.",
    utilities: "1.100 kr.",
    deposit: "14.700 kr",
    prepaidRent: "9.800 kr",
    date: "01/01/22",
  },
];

class ApartmentModel {
  constructor() {
    this.state = { apartments: [] };
  }

  populateApartments = () => {
    this.state.apartments = [...apartments];
  };
}

export default ApartmentModel;
