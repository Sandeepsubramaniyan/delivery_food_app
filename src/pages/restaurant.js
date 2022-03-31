import { useParams } from "react-router-dom";
import { getRestaurant } from "../resource"

export default function Restaurant() {
    let params = useParams();
    let restaurant = getRestaurant(parseInt(params.restaurantId,10));
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Total Due: {restaurant.amount}</h2>
        <p>
          {restaurant.name}: {restaurant.number}
        </p>
        <p>Due Date: {restaurant.due}</p>
    </main>
    );
  
}