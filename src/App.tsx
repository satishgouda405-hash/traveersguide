import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Video layer z-0 */}
      <VideoBackground />

      {/* Nav z-10 */}
      <Navbar />

      {/* Hero z-10 */}
      <Hero />
    </div>
  );
}

export default App;
