
import Navbar from '@/components/shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
           <div>
            <Toaster/>
            {children}
            </div> 
        </div>
    );
};

export default MainLayout;