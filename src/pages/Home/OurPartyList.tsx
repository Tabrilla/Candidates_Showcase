import { getPartyListNameGroup } from "../../firebase"
import { PartyListCard } from "../../components";

const OurPartyList = () => {
  
  // Partylist fetching
  const userPartylist = getPartyListNameGroup();

  return (
    <section>
      <h1 className="font-serif text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center mt-10">OUR PARTYLIST</h1>
      <div className='flex justify-evenly py-10 px-10'>
        {userPartylist.map((i) =>{
          return <div key={i.id}>
            <PartyListCard partyListPicture={i.partyListPicture} pl_Name={i.pl_Name} />
          </div>
        })}
      </div>
    </section>
  )
}

export default OurPartyList