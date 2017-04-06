'use strict';


require(['objectObs', 'arrayObs', 'subs'],

  (objects, array, subs) => {

  Promise.all([
    objects, array, subs()
  ])
  .then(([object, array, subs]) => (
    // Apply view model to the view
    ko.applyBindings({
      objects,
      array,
      subs
    })
  ))
  .catch(console.error);

});
