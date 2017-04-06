'use strict';


require(['objectObs', 'arrayObs', 'subs', 'control'],

  (objects, array, subs, control) => {
  // Use promise.all to load all vm's
  Promise.all([
    objects, array, subs(), control
  ])
  .then(([object, array, subs, control]) => (
    // Apply view models to the view
    ko.applyBindings({
      objects,
      array,
      subs,
      control
    })
  ))
  .catch(console.error);

});
