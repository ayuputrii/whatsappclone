export const getData = async url => {
  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    return true;
  }
};
