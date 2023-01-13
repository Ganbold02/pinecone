import logoSmall from '../Image/logoSmall.svg';
import SearchIcon from '../components/SearchIcon';
import WriteIcon from '../components/WriteIcon';
import MainButton from '../components/MainButton';

export default function SlimNav(){
    return(
        <div className="d-flex justify-content-between py-2 px-4 slim-nav">
            <div>
                <div className='d-flex'>
                    <img src={logoSmall} alt=''className='me-3'/>
                    <form className='position-relative'>
                        <input type="text" className='form-control search-input' placeholder='Search medium'/>
                        <button className='btn search-button'>
                            <SearchIcon/>
                        </button>
                    </form>  
                </div>
            </div>
            <ul className='d-flex align-items-center slim-nav-menu'>
                <li>
                    <a href='javascript:void(0)' className='slim-nav-link'>
                        <WriteIcon/>   
                        Write
                    </a>
                </li>
                <li>
                    <MainButton>Sign up</MainButton>
                </li>
                <li>
                    <a href='javascript:void(0)' className='slim-nav-link'>                      
                        Sign in
                    </a>
                </li>
            </ul>
        </div>
    )
}