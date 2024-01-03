export const get_fav_mensa = async () => {
  if (localStorage.getItem("fav_mensa") !== null) {
    console.log("Loaded fav_mensa from local storage");
    return localStorage.getItem("fav_mensa");
  } else return null;
};

/**
 * @returns all mensen as JSON
 * stores the data in local storage
 */
export const get_all_mensen = async () => {
  if (localStorage.getItem("all_mensen") !== null) {
    //data in local storage is stringified, so we need to parse it to JSON
    return JSON.parse(localStorage.getItem("all_mensen"));
    // return localStorage.getItem('all_mensen');
  } else if (localStorage.getItem("all_mensen") === null) {
    console.log("Loading Mensen from backend");
    const url = process.env.VUE_APP_BACKEND_BASEURL + "/canteen";
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "X-API-KEY": process.env.VUE_APP_BACKEND_API_KEY,
      },
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error("Netzwerkfehler");
    }

    const data = await response.json();
    localStorage.setItem("all_mensen", JSON.stringify(data));
    return data;
  }
};
