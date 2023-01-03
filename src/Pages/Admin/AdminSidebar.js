import '../../style/AdminSidebar.css';
import {Link, useLocation} from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import {useEffect, useRef, useState} from "react";

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
        icon: <i className="bx bx-shopping-bag"></i>,

    },
    {
        title: 'Izhod',
        path: '/',
        icon: <i className="bx bx-exit"></i>,
    }

]


const AdminSidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {

        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
        }, 50);
    }, []);

    //change active index
    useEffect(() => {
        const curPath = location.pathname;
        const activeItem = sidebarNavItems.findIndex(item => item.path === curPath);
        setActiveIndex(activeItem);

    }  , [location]);


return (
    <div className="sidebar">
        <div className="sidebar__logo">
            Malice
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div ref={indicatorRef} className="sidebar__menu__indicator" style={{top:activeIndex*62+"px",display:activeIndex<0?"none":""}}></div>
            {
                sidebarNavItems.map((item, index) => {
                    return (
                        <Link to={item.path} className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`} key={index}>
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