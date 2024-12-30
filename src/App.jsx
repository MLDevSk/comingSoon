import './App.css';
import Navbar from './components/Navbar';
import { Player } from '@lottiefiles/react-lottie-player';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {

  return (
    <div
      style={{
        backgroundColor: '#1B181F',
        minHeight: '150vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
      className='six-caps-regular '
    >
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Lottie Animation Section */}
      <div
        className="flex justify-center items-center"
        style={{
          height: '80vh', // Adjust the height for proper spacing
          width: '100%',
          display: 'flex', // Ensure flexbox is applied
          justifyContent: 'center', // Horizontal centering
          alignItems: 'center', // Vertical centering
        }}
      >
        <DotLottieReact
          src="https://lottie.host/ff19a623-a44f-4e87-aadd-5ed715e8933d/UUcymceAsy.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '400px' }} // Adjust animation size if needed
        />
      </div>
      
      <h1 className='font-thin text-5xl mb-10 text-[#F2F2F3] tracking-[35px]' style={{
        alignSelf: 'center',
      }}>COMING SOON</h1>

      {/* Email Box */}
      <div
        className="w-[50%] rounded-md flex justify-center items-center p-4 mt-10"
        style={{
          backgroundColor: '#222',
          borderTop: '1px solid #444', // Optional border to separate the box
          alignSelf: 'center',
        }}
      >
        <div className="rounded-md w-[550px] h-[150px] flex flex-col justify-center items-center shadow-lg">
          <p className="text-[#F0E9F3] mb-4 text-lg text-center">
            GET NOTIFIED WHEN IT'S READY
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[80%] h-10 rounded-md px-4 text-sm outline-none"
          />
          <button className="mt-4 px-6 py-2 bg-[#B16573] text-white rounded-2xl shadow hover:bg-zinc-700 hover:border-white hover:border-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;