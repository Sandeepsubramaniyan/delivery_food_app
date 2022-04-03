import { useParams } from "react-router-dom";
import { getRestaurant } from "../App"

export default function Restaurant() {
    let params = useParams();
    let restaurant = getRestaurant(parseInt(params.restaurantId,10));
    return (
      <main style={{ padding: "1rem" }}>
        <h2>{restaurant.Hotel}</h2>
        <p>Cuisine - {restaurant.cuisine}</p>  
        <p>Location - {restaurant.location}</p>
        <p>Description - {restaurant.description}</p>
    </main>
    );
  
}