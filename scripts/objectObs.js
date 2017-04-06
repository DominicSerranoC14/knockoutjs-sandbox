'use strict';


define(['helper'], ({ kob }) => {

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


  // Creating a new view model object
  const myComputed = genViewModel(data);


  // Created a writeable computed that listens to each observable obj and concats
  // Both firstName and lastName on keypress
  myComputed.fullNameComputed = ko.computed(() => {
    return `${myComputed.firstName()} ${myComputed.lastName()}`;
  });


  // adding a read/write computed value to the view model object
  // myComputed.fullName = ko.computed({
  //   // This will concat firstName and lastName
  //   read: function() {
  //     return `${this.firstName()} ${this.lastName()}`;
  //   },
  //   // This will change the firstName and lastName when fullName is edited
  //   write: function(string) {
  //     let first = string.split(" ")[0] ? string.split(" ")[0] : "";
  //     let last = string.split(" ")[1] ? string.split(" ")[1] : "";
  //     this.firstName(first);
  //     this.lastName(last);
  //   },
  //   // Passing in myComputed for reference to this
  //   owner: myComputed
  // });


  // Export myComputed
  return myComputed;

});
