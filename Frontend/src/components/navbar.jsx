import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const Navbar = () => {
  const items = [
    {
      key: '1',
      label: (
        <a  href="/yoga">
          Yoga
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a  href="/bmiTracker">
               BMI Tracker
        </a>
      ),
      
    },
    {
      key: '3',
      label: (
        <a  href="#">
          Blogs
        </a>
      ),
      
    },
    {
      key: '4',
      label:(
        <a  href="meditation">
          Music Player
        </a>
      )
    },
   
    
  ];

  
  return (
    <div className=" z-50 bg-slate-100 border-gray-200 py-6 mx-auto dark:bg-gray-900" >
  <header className=' sticky'>
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-3 mx-auto">
    <a href="#" className="flex items-center">
      {/* <img
        src=""
        className="sm:h-9"
        style={{height:"58px",marginRight:"10px"}}
        alt="Logo"
      /> */}
      <span className="pl-3 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent self-center  text-3xl font-semibold whitespace-nowrap dark:text-white">
      HealthPro
      </span>
    </a>
    <div className="flex items-center lg:order-2">
      <div className="hidden mt-2 mr-4 sm:inline-block">
        <span />
      </div>
      <a href="/chatbot" className="inline-flex mr-3 items-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out">
               Chat Now
            </a>
            <a href="/login" className="inline-flex items-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out">
               Login
            </a>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="true"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col text-lg mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            How Its Work
          </a>
        </li>
        <li>
          <a
            href="/predictDiseases"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Predict Diseases
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Find a Doctor
          </a>
        </li>
        <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Mental Health
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>

      </ul>
    </div>

   
  </div>
</header>


    </div>
  )
}

export default Navbar