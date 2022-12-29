import '../../style/AdminSidebar.css';
import {Link} from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

const sidebarNavItems = [
    {
        title: 'Ustvari meni',
        path: '/admin/createMeni',
        icon: <i className="bx bx-bowl-hot"></i>,
    },
    {
        title: 'Ustvari uporabnika',
        path: '/admin/createUser',
        icon: <i className="bx bx-user-plus"></i>,
    },
    {
        title: 'Naročila',
        path: '/admin/narocila',
        icon: <i className="fas fa-shopping-cart"></i>,

    },
    {
        title: 'Izhod',
        path: '/',
        icon: <i className="bx bx-exit"></i>,
    }

]


const AdminSidebar = () => {
return (
    <div className="sidebar">
        <div className="sidebar__logo">
        </div>
        <div className="sidebar__menu">
            <div className="sidebar__menu__indicator"></div>
            {
                sidebarNavItems.map((item, index) => {
                    return (
                        <Link to={item.path} className="sidebar__menu__item" key={index}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__title">
                                {item.title}
                            </div>
                        </Link>
                    )
                })
            }
    </div>
    </div>
)
}

export default AdminSidebar;