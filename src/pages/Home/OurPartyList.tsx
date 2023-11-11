import { getPartyListNameGroup } from "../../firebase"
import { PartyListCard } from "../../components";

const OurPartyList = () => {
  
  // Partylist fetching
  const userPartylist = getPartyListNameGroup();

  return (
    <section>
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