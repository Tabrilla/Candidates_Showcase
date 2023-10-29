import { IMGS } from "../../constants";


// TODO? I DONT KNOW KUNG TAMA YUNG PAG ANO KO SA TSX, NITRY KO LANG YUNG SA TUTORIAL SA YT THEN NIPRACTICE KO DITO
// TODO? THEN DI KO PA KASI ALAM PANO MAG ANO NG SVG HAMBURGER LAGI KO GAMIT REACT ICON KASI MAS MAIKLI AT MAS MADALI

const Navbar = () => {
    const flexBetween = 'flex items-center justify-between';
    const flexCenter = 'flex items-center justify-center';

  return (
  <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-secondary`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                <img src={IMGS.NAVILOGO} alt="STI LOGO" width={100}/>
            </div>

            
            <div className={`${flexCenter} w-full`}>
                <div className={`${flexCenter} text-white gap-8 text-lg font-bold`}>
                    <p>HOME</p>
                    <p>PARTYLIST</p>                        
                    <p>INSTRUCTIONS</p>
                    <p>OUR TEAM</p>                    
                </div>
            </div>


        </div>
    </div>
  </nav>
)}

export default Navbar