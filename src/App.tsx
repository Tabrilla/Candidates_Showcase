import StickyNavbar from "./components/navbar/StickyNavbar"
import { Heading, Instructions, OurPartyList } from "./pages"


export default function App() {
  return <div>
    <StickyNavbar/>
    <Heading/>
    <OurPartyList/>
    <Instructions/>
  </div>
}
