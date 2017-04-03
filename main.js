'use strict';

const kob = (data) => ko.observable(data);

// Data model
const data = {
  first: 'Dominic',
  last: 'Serrano',
};


// Creates a view model object
const genViewModel = ({first, last}) => {
  return {
    firstName: kob(first),
    lastName: kob(last),
    fullName: (first, last) => `${first()} ${last()}`
  }
};

// Apply view model to the view
ko.applyBindings(genViewModel(data));
