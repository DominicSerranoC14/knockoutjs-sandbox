'use strict';


require(['objectObs', 'arrayObs'], (myComputed, arrayVM) => {

  // Apply view model to the view
  ko.applyBindings({
    myComputed,
    arrayVM
  });

});
