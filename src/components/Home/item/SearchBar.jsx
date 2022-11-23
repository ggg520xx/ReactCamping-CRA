import indexBanner from '../../../assets/index/index.jpg';
import { SearchBarGlowColor1, SearchBarGlowColor2, SearchBarGlowColor3, SearchBarGlowColor4,SearchBarShadow,  SearchBarShadow2 } from './SearchBarStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {


    const inputStyle = {
        width: "66%",
        borderBottomLeftRadius: "40px",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        borderBottomRightRadius: "40px",
    }



    return (
        <>

            {/* banner */}
            <img src={indexBanner} alt="" className="w-screen max-h-[70vh] object-cover rounded-b-[100px]" />


            {/* 搜尋框的陰影遮罩 外容器的75％ 及控制位置 */}
            <SearchBarShadow className="flex flex-col justify-center">

                {/* 控制內部搜尋框 的最大大小 2xl以上範圍為 外容器的80％ */}
                <div className="relative p-6 w-full 2xl:max-w-[80%] sm:mx-auto">

                    {/* 彩色邊框 的外型內推 搜尋框*/}
                    <div className="overflow-hidden z-0 rounded-full relative p-1">

                        {/* 最中間白色搜尋框樣式 */}
                        <form action="" className="relative flex z-50 bg-white rounded-full">
                            <input type="text" placeholder="enter your search here" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none" />
                            <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
                        </form>
                        <SearchBarGlowColor1 className="z-10 bg-pink-400 absolute"></SearchBarGlowColor1>
                        <SearchBarGlowColor2 className="z-20 bg-purple-400 absolute"></SearchBarGlowColor2>
                        <SearchBarGlowColor3 className="z-30 bg-yellow-400 absolute"></SearchBarGlowColor3>
                        <SearchBarGlowColor4 className="z-40 bg-blue-400 absolute"></SearchBarGlowColor4>
                    </div>
                </div>
            </SearchBarShadow>

            


            <SearchBarShadow2 className="bg-white border" style={inputStyle}>
            <div className="d-flex justify-content-between " >
                {/* <!-- input --> */}
                <div className=" pl-3 d-flex " style={{ width: "90%" }} >

                    <div className=" p-2  pl-4 border-right" style={{ width: "35%", borderRight: "1px solid gray" }}>
                        <p className="mb-1 text-secondary" style={{ fontSize: 16 }}>
                                <label htmlFor="where" className="m-0">
                                    <FontAwesomeIcon icon={faCoffee} className="mr-2" />
                                輸入地區或營區名稱 ...
                            </label>
                        </p>
                        <input
                            type="text"
                            id="where"
                            className="w-100 m-searchInput rounded-left font-weight-bold "
                            placeholder="Hi！想去哪裡？"
                            name="place"
                            style={{ fontSize: 16 }}
                        />
                    </div>

                    <div className="inputHome p-2 pl-4 border-right" style={{ width: "45%", borderRight: "1px solid gray" }}>
                        <p className=" mb-1 text-secondary " style={{ fontSize: 16 }}>
                            <label htmlFor="chooseDate" className="m-0">
                                選擇入營及離營日期
                            </label>
                        </p>


                    </div>

                    <div className="inputHome p-2 pl-4" style={{ width: "20%" }}>
                        <p className="mb-1 text-secondary " style={{ fontSize: 16 }}>

                            選擇帳數
                        </p>

                        <select
                            name="campAmount"
                            className="w-100 border-0"
                            id="exampleFormControlSelect1"
                            style={{ outline: "none", fontSize: 16, cursor: "pointer" }}

                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>

                    </div>

                </div>


            </div>

            </SearchBarShadow2>




        </>
    );



}

export default SearchBar;