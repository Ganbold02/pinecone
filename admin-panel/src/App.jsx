import './styles/bootstrap.min.css';
import './styles/styles.css';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { useState } from 'react';

const App = () => {
    const [offMenu, setOffMenu] = useState(false);

    const toggleOffMenu = () => setOffMenu(!offMenu);

    return (
        <>
            <Navbar toggleOffMenu={toggleOffMenu} />
            <div className='main-wrapper'>
                <div className={`off-menu ${offMenu && `show`} bg-dark`}>test</div>
                <div className='off-menu-sibling'>
                    <Content />
                </div>
            </div>
        </>
    );
};

export default App;
