'use strict';

define(['helper'], ({kob}) => {

  const loadCarVM = ({makes, models, cars}) => ({
    make: ko.observableArray(makes),
    model: ko.observableArray(models),
    car: ko.observableArray(cars),
    selectedMake: kob(),
    selectedModel: kob(),
    selectedCar: kob()
  });

  const setSubscriptions = (vm) => {
    vm.selectedMake.subscribe(() => vm.selectedModel(undefined));
    vm.selectedModel.subscribe(() => vm.selectedCar(undefined));
    return vm;
  };

  const getSubs = () => {
    return fetch('./data/subs.json')
    .then(data => data.json())
    .then(loadCarVM)
    .then(setSubscriptions)
    .catch(console.log)
  };


  return getSubs;

});
