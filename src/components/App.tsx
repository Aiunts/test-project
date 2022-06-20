import 'antd/dist/antd.css'
import './App.scss'
import { Layout } from 'antd'
import { Routes, Route } from "react-router-dom"

import Header from './common/Header/Header'
import Home from './Home/Home'
import SignUp from './SignUp/SignUp'
import LogIn from './LogIn/LogIn'
import NotFound from './NotFound/NotFound'
import Contacts from './Contacts/Contacts'

const App: React.FC = () => {

  return (
    <Layout>
      <Header />
      <Layout.Content className='site-layout'>
        <div className='site-layout-background'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="login" element={<LogIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Layout.Content>
      <Layout.Footer>Test Project ©2022</Layout.Footer>
    </Layout>
  )
}

export default App