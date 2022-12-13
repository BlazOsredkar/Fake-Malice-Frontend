import {Link, Outlet} from "react-router-dom";


const AdminMainPage = () => {


    return (
        <>
            <div className="adminMainPage">
                <div className="adminMainPage__container">
                    <div className="adminMainPage__container__left">
                        <div className="adminMainPage__container__left__header">
                            <h1>Admin Panel</h1>
                        </div>
                        <div className="adminMainPage__container__left__body">
                            <div className="adminMainPage__container__left__body__item">
                                <Link to="/admin/createUser">Users</Link>
                            </div>
                            <div className="adminMainPage__container__left__body__item">
                                <Link to="/admin/roles">Roles</Link>
                            </div>
                            <div className="adminMainPage__container__left__body__item">
                                <Link to="/admin/permissions">Permissions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="adminMainPage__container__right">
                        <Outlet/>
                    </div>
                </div>
            </div>

        </>
    )



}

export default AdminMainPage
