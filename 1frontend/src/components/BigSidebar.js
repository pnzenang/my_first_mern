import Wrapper from '../assets/wrappers/BigSidebar';
import { useAppContext } from '../context/appContext';
import { Logo } from '../components';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
      ;
    </Wrapper>
  );
};
export default BigSidebar;
