import { Button } from "@material-tailwind/react";

const Heading = () => {
  const AutoCenter = "max-w-[1250px] w-full flex-col justify-center py-20";
  const FontBoldCenter = "text-center font-bold text-white";
  const ButtonColor ="bg-[#f9fbe7] text-black font-bold hover:bg-[#689f38] hover:text-white";

  return (
    <section className="bg-secondary font-serif">
      <div className={`${AutoCenter} mx-auto`}>
        
        <p className={`${FontBoldCenter} p-16 text-7xl`}>
          STI Student Council Election 
        </p>

        <p className={`${FontBoldCenter} px-24 text-2xl leading-loose`}>
          Vote for a brighter tomorrow, where students' voices shape our future. Together, we're the architects of change in the STI community.
        </p>

        <div className={`${FontBoldCenter} mx-auto  py-10 flex w-max items-end gap-4`}>
          <Button size="lg" className={`${ButtonColor}`}>Start Vote</Button>
          <Button size="lg" className={`${ButtonColor}`}>View More</Button>
        </div>
      </div>
        
    </section>
  )
}

export default Heading