function ExternalJSFileFunction() {

addEventListener('click', async _ => {
  try {     
    const response = await fetch('http://192.168.1.97:5000/position', {
      method: 'get',

    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});

}