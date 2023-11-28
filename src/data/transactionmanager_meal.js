/**
 * @param mensa_id
 * @returns all menus of a mensa as JSON
 */

export const get_all_menus = async (mensa_id) => {
  try {
    const url =
      process.env.VUE_APP_BACKEND_BASEURL +
      "/menue?canteenId=" +
      mensa_id
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
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
