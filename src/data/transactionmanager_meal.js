export const get_menu_of_the_day = async (mensa_id) => {

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let today = year + "-" + month + "-" + day;


  try {
    const url = process.env.VUE_APP_BACKEND_BASEURL + '/menue?canteenId=' + mensa_id + '&startdate=' + today + '&enddate=' + today;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'X-API-KEY': process.env.VUE_APP_BACKEND_API_KEY
      }
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error('Netzwerkfehler');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
