
import { Toaster } from 'react-hot-toast';

const MainLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
           <div>
            <Toaster/>
            {children}
            </div> 
        </div>
    );
};

export default MainLayout;