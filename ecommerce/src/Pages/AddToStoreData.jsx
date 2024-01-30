import { CartProvider } from "./AddToCartProvider";
import Headers from "../Componente/Header";


const App = () => {
    return (
        <CartProvider>
            <Headers />
        </CartProvider>
    );
};

export default App;