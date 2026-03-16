// // import React from "react";

// // function Home() {
// //   return (
// //     <div className="home">
// //       <h1>Welcome to December in Ghana</h1>
// //       <p>Celebrate culture, music, and unforgettable experiences.</p>
// //     </div>
// //   );
// // }

// // export default Home;
// import React from "react";
// import HeroSlideshow from "../components/HeroSlideshow";


// //import SocialBar from '../components/SocialBar'


// function Home() {
//   return (
//     <div className="homepage">
//       <HeroSlideshow/>
      

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2026 December in Ghana</p>
//       </footer>
//     </div>

//   );
// }
// export default Home;
import HeroSlideshow from "../components/HeroSlideshow";
//import SocialBar from "../components/SocialBar";
import Events from "../pages/Events";
import Tourism from "../pages/Tourism";
import Investment from "../pages/Investment";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <HeroSlideshow />
      <Events />
      <Tourism />
      <Investment/>
      <Footer />
    </div>
  );
}

export default Home;