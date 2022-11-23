import SearchBar from './item/SearchBar';
import CampSearch from './item/CampSearch';
import CampHot from './item/CampHot';

function Home() {
    return (
        <>
            <SearchBar />

            <div className="container">
                <CampSearch />
                <CampHot />

            </div>

        </>
    );
}

export default Home;
// 匯出這個函式功能