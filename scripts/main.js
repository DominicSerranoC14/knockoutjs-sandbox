'use strict';


require(['objectObs', 'arrayObs', 'subs', 'control'],
  (objects, array, subs, control) => {


  const loadVMList = (pageName) => {
    loadPage(pageName);
    return Promise.all([
      objects, array, subs(), control
    ])
    .then(([objects, array, subs, control]) =>
      ({objects, array, subs, control}))
    .then(vmList => vmList[pageName])
    .then(selectedVM => ko.applyBindings(selectedVM, document.querySelector('#main-div')))
    .catch(console.error)
  };

  // Determine which partial and view model to load
  const loadPage = (pageName) => {
    // Load selected partial into main div
    $('#main-div').load(`/partials/${pageName}.html`);
    // Apply binding to selected view model
  };

  loadVMList('subs');
  

  // subs().then((data) => {
  //   ko.applyBindings(data);
  // })

  // ko.applyBindings(array);

  // // Use promise.all to load all vm's
  // Promise.all([
  //   objects, array, subs(), control
  // ])
  // .then(([object, array, subs, control]) => (
  //   // Apply view models to the view
  //   ko.applyBindings({
  //     objects,
  //     array,
  //     subs,
  //     control
  //   }, document.getElementById('main-div'))
  // ))
  // .catch(console.error);

});
