import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import './styles/global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Redirect } from './components/Redirect'
import { Posts } from './components/Posts'
import { NotFound } from './components/NotFound'
import { Post } from './components/Post'
import { Select } from './components/Select'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Posts />} /> */}
        <Route path='/posts' element={<Posts />} >
          <Route path=':id' element={<Post />}/> {/* rotas aninhadas */}
        </Route>
        <Route path='/posts' element={<Posts />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='/select' element={<Select />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>,
)
