import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import Shop from "./pages/Shop";
import Layout from "./components/Layout";
import {action} from "./pages/ShoppingCart";

function App() {



    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
                <Route index element={<Shop/>}/>
                <Route path='shopping-cart' element={<ShoppingCart/>} action={action} />
            </Route>
        ))

    return (
            <RouterProvider router={router}/>

    );
}

export default App;
