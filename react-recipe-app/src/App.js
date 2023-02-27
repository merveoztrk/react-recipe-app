import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css';
import SearchResult from './components/pages/SearchResult';
import Home from './components/pages/Home';
import Random from './components/pages/Random';
import Categories from './components/pages/Categories';
import Detail from './components/pages/Detail';
import SearchByIngrediant from './components/pages/SearchByIngrediant';
import Region from './components/pages/Region';
import Sidebar from './components/Sidebar';
//import Footer from './components/Footer';
import axios from 'axios';
// import { AuthProvider } from './components/Auth';
// import AuthHome from './components/AuthHome';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import PrivateRoute from './components/PrivateRoute';

export const fetchDetail = async (id) => {
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  return data
}


const App = () => {
  return (
    <>
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:term" element={<SearchResult />} />
          <Route path='/search_by_ingredient/:term' element={<SearchByIngrediant />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/details/:id" element={<Detail fetchDetail={fetchDetail} />} />
          <Route path="/region" element={<Region />} />
          <Route path="/random" element={<Random />} />
          {/* <PrivateRoute exact path="/authhome" component={AuthHome} /> */}
          {/* <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} /> */}
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </>
  )

}


export default App;
