import 'bootstrap/dist/css/bootstrap.min.css';
import Count from './pages/counter/Counter';
import Nav from './components/navbar/navbar';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Product from './pages/products/Product';
import NotFound from './pages/notfound/NotFound';
import Todo from './pages/todo/Todo'
import Register from './pages/register/register';


function App() {

  return (
   <BrowserRouter>
       <Nav />
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/products" element={<Products />} />
       <Route path="/product/:id" element={<Product />} />
       <Route path="/count" element={<Count />} />
       <Route path='/todo' element={<Todo />} />
       <Route path='/register' element={<Register />} />
       <Route path="*" element={<NotFound />} />
       </Routes>
  
   </BrowserRouter>
  );
}
export default App;
