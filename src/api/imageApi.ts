import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = '30tLR70ma-GqOrfmjSK4UxZADQJYzUpML4rgQeUUzTo'


async function imageRequest(city:string) {
    const params = {
      query: city,
    };
  
    const config = {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params,
    };
  
    const response = await axios.get(API_URL, config);
    const data = response.data;
    const results = data.results;
    if (results.length === 0) {
      throw new Error("No results found");
    }
  
    const firstResult = results[0];
    const imageUrl = firstResult.urls.full;
    return imageUrl;
  }
export default imageRequest;



