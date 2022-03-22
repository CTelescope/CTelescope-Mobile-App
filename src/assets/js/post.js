function GotoFunction() {

addEventListener('click', async _ => {
  try {     
    const response = await fetch('http://192.168.1.30:5000/api/goto', {
      method: 'post',
      headers:  {"Content-Type":"application/json"},
      body: JSON.stringify({mode:1, nb_steps:50})
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});
}

function getPosFunction() {

  addEventListener('click', async _ => {
    try {     
      const response = await fetch('http://192.168.1.30:5000/api/position', {
        method: 'get',
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  });
  }
  
function rafalesFunction(){
  addEventListener('click', async _ => {
    try {     
      const response = await fetch('http://192.168.1.30:5000/api/rafales', {
        method: 'post',
        headers:  {"Content-Type":"application/json"},
        body: JSON.stringify({duree:5, fps:24})
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  });
  }

  function recordFunction(){
    addEventListener('click', async _ => {
      try {     
        const response = await fetch('http://192.168.1.30:5000/api/enregistrement', {
          method: 'post',
          headers:  {"Content-Type":"application/json"},
          body: JSON.stringify({duree_record:5, fps_record:24})
        });
        console.log('Completed!', response);
      } catch(err) {
        console.error(`Error: ${err}`);
      }
    });
    }