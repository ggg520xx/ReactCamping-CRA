// import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            {/* <Header /> 拉出來寫外元件也可以*/}
            <div className="header">表頭11</div>


            
            {/* 不一定要包main */}
            <main>
                <Outlet />
            </main>


            <div className="footer">表尾22</div>
            {/* <Footer /> 拉出來寫外元件也可以*/}
        </div>
    );
}

export default Layout;
// 匯出這個函式功能