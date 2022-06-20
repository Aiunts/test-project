import './Header.scss'
import { Layout, Menu, Input } from 'antd'
import { Link } from 'react-router-dom'
import { GlobalOutlined } from '@ant-design/icons'

const Header: React.FC = () => {

    const onSearch = (value: string) => console.log(value)

    const menuItems = [
        {
            key: 'login',
            label: (
                <Link to='login'>
                    Log In
                </Link>
            ),
        },
        {
            key: 'sign-up',
            label: (
                <Link to='sign-up'>
                    Sign Up
                </Link>
            ),
        },
        {
            key: 'contacts',
            label: (
                <Link to='contacts'>
                    Contacts
                </Link>
            ),
        },
        {
            key: 'language',
            label: (
                <GlobalOutlined style={{ fontSize: 18 }} />
            ),
            children: [
                {
                    key: 'english',
                    label: <div>English</div>
                },
                {
                    key: 'ukrainian',
                    label: <div>Ukrainian</div>
                }
            ]
        }
    ]

    return (
        <Layout.Header>
            <div className='header-item'>
                <div className='logo'>
                    <Link to='/'>Logo</Link>
                </div>
                <Input.Search placeholder='input search text' onSearch={onSearch} enterButton />
            </div>
            <Menu theme='light' mode='horizontal' items={menuItems} />
        </Layout.Header>
    )
}

export default Header
