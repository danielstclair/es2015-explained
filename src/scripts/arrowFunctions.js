// ES2015 way:
let greenArrow = {
  names: ['daniel', 'andrea', 'aaron'],
  isCool: 'is cool',
  weCool () {
    console.log('this', this);
    this.names.map((item) => {
      console.log('item ' , item);
      console.log('this', this);
      console.log(`${item} ${this.isCool}`);
    });
  }
}

// ES5 way:
let offWhiteArrow = {
  names: ['daniel', 'andrea', 'aaron'],
  isCool: 'is cool',
  weCool: function() {
    var self = this;
    this.names.map(function (item) {
      console.log('item ' , item);
      console.log('this', self);
      console.log(item + ' ' + self.isCool);
    });
  }
}

export {greenArrow, offWhiteArrow};

// Use non-arrow functions for methods that will be called using the object.method() syntax. Those are the functions that will receive a meaningful this value from their caller.
// Use arrow functions for everything else.