import { Link } from 'react-router-dom';

const HomePageView = () => {
  return (
    <div>
      <h6 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">Employee Management System</h6>

      <div>
      <Link to={'/employees'} > All Employees </Link>
      </div>

      <div>
      <Link to={'/tasks'} > All Tasks </Link>
      </div>
      
    </div>
  );    
}

export default HomePageView;