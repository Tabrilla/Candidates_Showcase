import { Button } from "@material-tailwind/react";
import { getPartyListNameGroup } from "../../firebase"
import { PartyListCard } from "../../components";

const OurPartyList = () => {
  
  // Partylist fetching
  const userPartylist = getPartyListNameGroup();
  const Text = "font-serif font-bold text-center";
  return (
    <section>
      <h1 className={`${Text} text-3xl sm:text-3xl md:text-5xl lg:text-7xl mt-10`}>OUR PARTYLIST</h1>
      <div className='flex justify-evenly py-10 px-10'>
        {userPartylist.map((i) =>{
          return <div key={i.id}>
            <PartyListCard partyListPicture={i.partyListPicture} pl_Name={i.pl_Name} />
          </div>
        })}
      </div>
      
      <div  className={`${Text} items-center py-2`}>
        <Button size="lg" className="hover:bg-[#689f38]" >View All Candidates</Button>
      </div> 
    </section>
  )
}

export default OurPartyList