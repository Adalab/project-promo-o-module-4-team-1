const callToApi = (data) => {
  const serverUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://project-promo-o-module4-team1.herokuapp.com'
      : 'http://localhost:4000';

  return fetch(`${serverUrl}/card`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => response);
};

export default callToApi;
