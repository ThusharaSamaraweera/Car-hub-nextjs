export async function getCarData() {
    const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  const headers = {
    "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
    "X-RapidAPI-Host": 'cars-by-api-ninjas.p.rapidapi.com',
  };   
    const response = await fetch(url, { headers });
    const result = await response.json();
    return result;
}
