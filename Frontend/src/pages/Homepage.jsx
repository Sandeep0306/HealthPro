import Lottie from "lottie-react";
import doc from "../assets/doc.json"
import doc2 from "../assets/doc2.json"
import mental from "../assets/mental.json";
import health from "../assets/healthcare.png"
import sub from "../assets/subscription.png"
import blogs from "../assets/blog.png"
import search from "../assets/search.png"
import chatbot from "../assets/chatbot.png"
import ai from "../assets/ai.png"
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const HomePage = () => {
    return (
      <div>
        <div className="bg-slate-100 min-h-screen h-full flex flex-row w-full pt-24 pb-20 ">
        {/* <div className="gradient"></div> */}
        <div className=" pl-20 pt-10 ">
            <h1 className="text-start text-3xl font-extrabold leading-[1.15] text-black sm:text-6xl">Empowering Your Health</h1>
            <br />
            <span className="text-4xl bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center"> Predicting Disease and Elevating Mental Wellness. </span>
          <p className="pt-10 desc text-start text-black text-xl">With a blend of advanced healthcare prediction and comprehensive mental 
          <br />health care.
          <br /> HealthProPredict is your trusted partner in achieving a healthier,
          <br /> happier life.
           Join us today and take control of your well-being like never before.
          </p>
           <Button  variant="contained" disableElevation size="large" style={{marginRight:"20px", marginTop:"30px",backgroundColor:"#2563eb",padding:"12px"}}>
       <Link to='/predictDiseases'  className='text-white'>Let's Started</Link> 
      </Button>
      
      </div>
      <div className="flex" >
        <Lottie animationData={doc}  style={{ width: 500, marginLeft:"120px", marginRight:"20px"}} /> 
        </div>
      </div>


      <div className='mb-24 bg-white my-16'>
        <div className='mb-20 flex justify-center items-center text-center  px-3'>
            <h1 className='text-5xl font-mono font-bold '> Ab<span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent '>ou</span>t us </h1>
        </div>

        <div className="relative mb-20">
  <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
      <div>
        <div>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-8 w-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-bold tracking-tight">
          How Its Work
          </h2>
          <p className="mt-4 text-lg ">
          Welcome to HealthPro, your comprehensive platform for proactive healthcare and 
          mental wellness. At HealthProPredict, we believe in harnessing the 
          power of cutting-edge technology to predict, prevent, and manage diseases effectively.
           Our state-of-the-art predictive analytics tools analyze your health data to provide early warnings and personalized recommendations, 
          helping you stay one step ahead of potential health issues.
          </p>
         
        </div>
      </div>
    </div>
    <div >
        <Lottie animationData={doc2}  style={{ width: 400, marginLeft:"120px"}} /> 
        </div>
  </div>
  </div>
  </div>

    {/* next part */}
    <div className="relative">
  <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
    <div className="mx-auto max-w-xl px-10 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
      <div>
        <div>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl">
            <img src={health} alt="" />
          </span>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Mental Health:
          </h2>
          <p className="mt-4 text-lg ">
          With a blend of advanced healthcare prediction and comprehensive mental health care, HealthProPredict is your trusted partner in achieving a healthier, happier life.
          <br /> Join us today and take control of your well-being like never before.
          </p>
          
        </div>
      </div>
    </div>
    <div className="mt-12 sm:mt-16 lg:mt-0">
      <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <Lottie animationData={mental} style={{width:"300px" ,marginLeft:"50px"}}/>
      </div>
    </div>
  </div>
</div>


{/* feature section */}

<div className='bg-slate-900 pr-0 py-20'>
        <section
  id="features"
  className="container mx-auto px-4 space-y-6  py-8 dark:bg-transparent md:py-12 lg:py-20"
>
  <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
    <h2 className="text-white font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
      Features
    </h2>
    <p className=" text-white max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
    "Access a wide spectrum of legal services, from expert legal consultation to precise document drafting, arbitration, mediation, notarization, and more—all in one place
    </p>
  </div>
  <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
    <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <span>
            <img src={search} alt="" className='h-12 w-12 fill-current'/>
        </span>
        <div className="space-y-2">
          <h3 className="font-bold">Search Top Doctors</h3>
          <p className="text-sm text-muted-foreground">
          Search for top rated Doctors near you.
          </p>
        </div>
      </div>
    </div>
    
    <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
      <span>
            <img src={chatbot} alt="" className='h-12 w-12 fill-current'/>
        </span>
        <div className="space-y-2">
          <h3 className="font-bold">24/7 Customer Support</h3>
          <p className="text-sm text-muted-foreground">
          Our chatbot provides round-the-clock customer support.
          </p>
        </div>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
      <span>
            <img src={ai} alt="" className='h-12 w-12 fill-current'/>
        </span>
        <div className="space-y-2">
          <h3 className="font-bold">Diseases Predictor Using ML</h3>
          <p className="text-sm text-muted-foreground">
          ML-Powered Diseases Detection 
          </p>
        </div>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          className="h-12 w-12 fill-current"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <div className="space-y-2">
          <h3 className="font-bold">Authentication</h3>
          <p className="text-sm text-muted-foreground">
          Assured with a secure website that protects your data and privacy.
          </p>
        </div>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
      <span>
            <img src={sub} alt="" className='h-12 w-12 fill-current'/>
        </span>
        <div className="space-y-2">
          <h3 className="font-bold">Subscriptions</h3>
          <p className="text-sm text-muted-foreground">
          Premium subscription for Users.

          </p>
        </div>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
      <span>
            <img src={blogs} alt="" className='h-12 w-12 fill-current'/>
        </span>
        <div className="space-y-2">
          <h3 className="font-bold">Blogs</h3>
          <p className="text-sm text-muted-foreground">
          Explore our curated collection of insightful blogs 
          </p>
        </div>
      </div>
    </div>
   
    
  </div>
</section>

    </div>
    {/* team */}
    <div className="container my-28 mx-auto md:px-6 ">
  {/* Section: Design Block */}
  <section className="mb-32 text-center">
    <h2 className="mb-32 text-3xl font-bold">
      Meet the <u className="text-primary dark:text-primary-400">team</u>
    </h2>
    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-24 md:mb-0">
        <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Janvi</h5>
            <p className="mb-6">ML Expert</p>
            <ul className="mx-auto flex list-inside justify-center">
              <a href="#!" className="px-2">
                {/* GitHub */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a href="#!" className="px-2">
                {/* Twitter */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400"
                >
                  <path
                    fill="currentColor"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a href="#!" className="px-2">
                {/* Linkedin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-24 md:mb-0">
        <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Negrah</h5>
            <p className="mb-6">ML expert</p>
            <ul className="mx-auto flex list-inside justify-center">
              <a href="#!" className="px-2">
                {/* Facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-primary dark:text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#!" className="px-2">
                {/* Twitter */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400"
                >
                  <path
                    fill="currentColor"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a href="#!" className="px-2">
                {/* Linkedin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-24">
        <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"
                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Sandeep Biswal</h5>
            <p className="mb-6">Web Developer</p>
            <ul className="mx-auto flex list-inside justify-center">
              <a href="#!" className="px-2">
                {/* Dribbble */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"
                  />
                </svg>
              </a>
              <a href="#!" className="px-2">
                {/* Linkedin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
              <a href="#!" className="px-2">
                {/* Instagram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</div>

    {/*  */}
    <section className="text-neutral-700 dark:text-neutral-300 py-28 px-40 bg-slate-100">
  <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
    <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
      amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
      nostrum quisquam eum porro a pariatur veniam.
    </p>
  </div>
  {/*First Testimonial*/}
  <div className="grid gap-6 text-center md:grid-cols-3">
    <div>
      <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]" />
        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
            elit.
          </p>
        </div>
      </div>
    </div>
    {/*Second Testimonial*/}
    <div>
      <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]" />
        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Neque cupiditate assumenda in maiores repudi mollitia architecto.
          </p>
        </div>
      </div>
    </div>
    {/*Third Testimonial*/}
    <div>
      <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]" />
        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Delectus impedit saepe officiis ab aliquam repellat rem unde
            ducimus.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="flex justify-cente my-28">
  <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-3xl font-extrabold leading-normal tracking-tight text-center text-gray-900 sm:text-4xl">
      <p>Want updates about big releases and product launches?</p>
      <p>
        <span className="text-indigo-600">Sign up for our newsletter.</span>
      </p>
    </h2>
    <form
      action="https://github.us3.list-manage.com/subscribe/post?u=6a33c422777aedd88e9a9488e&id=9b99f013b8"
      method="post"
      target="_blank"
      className="justify-center mt-8 sm:flex"
    >
      <input
        aria-label="Email address"
        name="EMAIL"
        type="email"
        required=""
        className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline focus:border-blue-300 sm:max-w-xs"
        placeholder="Enter your email"
      />
      <input
        type="hidden"
        defaultValue={8}
        name="group[27425][8]"
        id="mce-group[27425]-27425-3"
      />
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
          Notify me
        </button>
      </div>
    </form>
  </div>
</div>



      </div>
      
    )
}

export default HomePage;