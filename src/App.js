import React from 'react'
import './pages/home/Home';
import './pages/login/Login';
import './pages/list/List';
import './pages/single/Single';
import './pages/new/New';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
// skdgiuoighlwhp
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
<Routes>
  <Route path="/">
    <Route index element={<Home></Home>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="users">
      <Route index element={<List></List>}/>
      <Route path=":userId" element={<Single/>}/>
      <Route
                path="new"
                element={<New/>}
              />
    </Route>
 </Route>
</Routes>
     </BrowserRouter>
    </div>
  )
}

export default App