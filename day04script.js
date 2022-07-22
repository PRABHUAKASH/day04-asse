const object1 = {
    name: 'ABC',
    address: 'India'
  };
      
  const object2 = {
    address: 'India',
    name: 'ABC'
  };
      
  if (JSON.stringify(object1) === JSON.stringify(object2)){
    console.log("false");
  }
    else{
      console.log("true");
      }