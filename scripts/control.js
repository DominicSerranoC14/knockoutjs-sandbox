'use strict';

define(['helper'], ({kob}) => {

  const controlList = [
    { name: 'Dominic', age: 22 , likes: ['soccer', 'fishing', 'cats']},
    { name: 'Ashley', age: 25, likes: ['soccer', 'fishing', 'cats']},
    { name: 'Cody', age: 24, likes: ['soccer', 'fishing', 'cats']},
    { name: 'Risha', age: 22, likes: ['soccer', 'fishing', 'cats']}
  ];

  const controlVM = {
    selected: kob(),
    selectItem: (item) => {
      controlVM.selected(item);
    },
    controlList
  };


  return controlVM;

});
