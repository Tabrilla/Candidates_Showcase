import { Button } from "@material-tailwind/react";
import { getPartyListNameGroup } from "../../firebase"
import { PartyListCard } from "../../components";

const OurPartyList = () => {
  
  // Partylist fetching
  const userPartylist = getPartyListNameGroup();
  
  const Text = "font-serif font-bold text-center";
  
  return (
    <section className="text-center">
      <h1 className={`${Text} text-3xl sm:text-3xl md:text-5xl lg:text-7xl pt-5`}>OUR PARTYLIST</h1>
      
      <div className='flex flex-wrap justify-center gap-4 py-2 px-2 md:px-10'> {/* Added gap between cards */}
        {userPartylist.map((i) => (
          <div key={i.id} className="w-72 md:w-80 lg:w-96 flex justify-center"> {/* Defined card width */}
            <PartyListCard partyListPicture={i.partyListPicture} pl_Name={i.pl_Name} />
          </div>
        ))}
      </div>
  
      <div className={`${Text} flex justify-center items-center py-2`}>
        <Button size="lg" className="hover:bg-[#33691e]">View All Candidates</Button>
      </div> 
    </section>
  )
}

export default OurPartyList