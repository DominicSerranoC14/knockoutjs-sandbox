'use strict';


require(['objectObs', 'arrayObs', 'subs'],

  (objects, array, subs) => {

  // Use promise.all to load all vm's
  Promise.all([
    objects, array, subs()
  ])
  .then(([object, array, subs]) => (
    // Apply view models to the view
    ko.applyBindings({
      objects,
      array,
      subs
    })
  ))
  .catch(console.error);

});
