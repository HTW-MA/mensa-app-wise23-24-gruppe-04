export const get_fav_mensa = async () => {

  if (localStorage.getItem('fav_mensa') !== null) {
    console.log("Loaded fav_mensa from local storage");
    return localStorage.getItem('fav_mensa');
  } else return null;


}

export const get_all_mensen = async () => {

  if (localStorage.getItem('all_mensen') !== null) {
    //data in local storage is stringified, so we need to parse it to JSON
    console.log("Loaded Mensen from local storage");
    return JSON.parse(localStorage.getItem('all_mensen'));

  } else {
    if (localStorage.getItem('all_mensen') === null) {
      console.log("Loading Mensen from backend")
      const url = process.env.VUE_APP_BACKEND_BASEURL + '/canteen';
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
          'X-API-KEY': process.env.VUE_APP_BACKEND_API_KEY
        }
      }

      await fetch(url, requestOptions)
        .then(response => {
          if (!response.ok) {

          }
          return response.json();
        })
        .then(data => {
          this.all_mensen = data;
          //JSONfy data to store it in local storage
          let json_data = (JSON.stringify(data));
          localStorage.setItem('all_mensen', json_data);
          return json_data;
        })

    }
  }
}


