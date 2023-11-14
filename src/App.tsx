import StickyNavbar from "./components/navbar/StickyNavbar"
import { Heading, Instructions, OurPartyList, OurTeam } from "./pages"

export default function App() {
  return <div>
    <StickyNavbar/>
    <Heading/>
    <OurPartyList/>
    <Instructions/>
    <OurTeam/>
  </div>
}
