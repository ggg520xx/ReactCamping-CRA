import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import styled from 'styled-components'

function Home() {
    
    const Btn = styled.button`border:1px solid red; color:blue`

    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="text-blue-500">
                    TailwindCSS setup1231555
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h1>安安</h1>

                <Btn>我的按鈕</Btn>

                <button
                    class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                ></button>

                
                <button
                    class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
                ></button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React111
                </a>
            </header>

            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>

            <nav>
                <Link to="/about">About</Link>
                <Link to="/faq">Faq</Link>
            </nav>
        </>
    );
}

export default Home;
// 匯出這個函式功能