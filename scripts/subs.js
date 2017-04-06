'use strict';

define(['helper'], ({kob}) => {

  const loadCarVM = ({makes, models, cars}) => ({
    make: kob(makes),
    model: kob(models),
    car: kob(cars)
  });

  const getSubs = () => {
    return fetch('./data/subs.json')
    .then(data => data.json())
    .then(loadCarVM)
    .catch(console.log)
  };


  return getSubs;

});
