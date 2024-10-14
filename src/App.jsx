
import './App.css';
import HomePage from './Components/Home/HomePage';

import {RouterProvider,createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import BuyNowPage from './Components/BuyNowPage/BuyNowPage';

const router = createBrowserRouter([
  {path:"/",
  element:<Layout/>,
  children:[
    {path:"",
      element:<HomePage/>,
    },
    {path:"BuyTokens",
      element:<BuyNowPage/>
    }
  ]
}
])

function App() {
  return (
    <div className="app_container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
