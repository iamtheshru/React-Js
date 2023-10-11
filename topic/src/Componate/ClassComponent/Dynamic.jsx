export const menuItems = [
    // ...
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'web design',
                url: 'web-design',
            },
            {
                title: 'web development',
                url: 'web-dev',
            },
            {
                title: 'SEO',
                url: 'seo',
            },
        ],
    },
    // ...
];


import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = () => {
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;


import Dropdown from './Dropdown';

const MenuItems = ({ items }) => {
    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu">
                        {items.title}{' '}
                    </button>
                    <Dropdown submenus={items.submenu} />
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;


const Dropdown = ({ submenus }) => {
    return (
        <ul className="dropdown">
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;