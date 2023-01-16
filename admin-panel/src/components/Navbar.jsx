import { NavbarMenu } from './Navbar/NavbarMenu';
import { NavbarDropdown } from './Navbar/NavbarDropdown';
import { NavbarWrapper } from './Navbar/NavbarWrapper';

export const Navbar = ({ toggleOffMenu }) => {
    const NavbarMenuInfo = {
        title: 'Dashboard',
        items: [
            { label: 'Home', link: '/' },
            { label: 'Articles', link: '/' },
            { label: 'Users', link: '/' },
            { label: 'Files', link: '/' },
        ],
    };

    const NavbarDropdownInfo = {
        picture: 'https://avatars.githubusercontent.com/u/98681?v=4',
        items: [
            { label: 'User Profile', link: '/' },
            { label: 'Add Article', link: '/' },
            { label: '---', link: '/' },
            { label: 'Sign Out', link: '/' },
        ],
    };

    return (
        <NavbarWrapper>
            <NavbarMenu {...NavbarMenuInfo} toggleOffMenu={toggleOffMenu} />
            <NavbarDropdown {...NavbarDropdownInfo} />
        </NavbarWrapper>
    );
};
