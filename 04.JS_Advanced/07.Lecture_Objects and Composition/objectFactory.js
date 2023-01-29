function factory(lib, list) {
    let result = []
    for (let order of list) {
        let obj = {};
        for (let prop in order.template) {
            obj[prop] = order.template[prop];
        }

        for (let part of order.parts) {
            obj[part] = lib[part]
        }
        result.push(obj);
    }
    return result; 
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.log(products);

  products[3].play('Rick Astley', 'Never gonna give you up')
  
