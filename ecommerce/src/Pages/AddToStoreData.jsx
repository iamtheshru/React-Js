import { CartProvider } from "./AddToCartProvider";
import AddToCard from "../Pages/AddToCard";


const App = () => {
    return (
        <CartProvider>
            <AddToCard />
        </CartProvider>
    );
};

export default App;