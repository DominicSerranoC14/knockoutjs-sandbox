'use strict';


define(['helper'], ({ kob }) => {

  const itemList = [
    { id: 1, salePrice: 10.00, description: 'Things' },
    { id: 2, salePrice: 15.00, description: 'Stuff' },
    { id: 3, salePrice: 150.00, description: 'All' }
  ];


  const createObservable = ({ id, salePrice, description }) => ({
      id: kob(id),
      salePrice: kob(salePrice),
      description: kob(description)
  });


  // Data model
  const arrayVM = {
    products: ko.observableArray([]),
    selectedProducts: ko.observableArray([]),
    itemToAdd: kob(""),
    load: () => {
      itemList.forEach(item => {
        arrayVM.products.push(createObservable(item));
      })
    }
  };


  // Create remove computed observable
  arrayVM.productsAreSelected = ko.computed(() =>
    arrayVM.selectedProducts().length > 0
  );
  // Function which removes selected products from products
  arrayVM.removeSelected = () => {
    arrayVM.products.removeAll(arrayVM.selectedProducts());
    arrayVM.selectedProducts([]);
  };


  // Sort functionality
  arrayVM.productsExist = ko.computed(() =>
    arrayVM.products().length > 1
  );
  // This will sort the products on click
  arrayVM.sortProducts = () =>
    arrayVM.products.sort((a, b) =>
      a.description().toLowerCase() < b.description().toLowerCase() ? -1 : 1)


  // Add functionality
  arrayVM.addItem = () => {
    if (arrayVM.itemToAdd) {
      arrayVM.products.push({ description: kob(arrayVM.itemToAdd()) });
      arrayVM.itemToAdd("");
    };
  };


  // Populate products array
  // Why is this affecting the productsExist?
  arrayVM.load();


  return { arrayVM };

});
