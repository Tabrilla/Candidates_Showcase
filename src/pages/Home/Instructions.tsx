import { IMGS } from "../../constants";
import { getStepbyStepProcess } from "../../firebase";

const Instructions = () => {

    const VoteProcess = getStepbyStepProcess();
    const FontBoldCenter = "text-center font-bold text-white";
  
  return (
    <section className="bg-secondary font-serif text-white">
        <div>
            <div className={`${FontBoldCenter} items-center text-3xl sm:text-3xl md:text-5xl lg:text-7xl pt-4`}>
                INSTRUCTIONS
            </div>
        </div>
  

        <div className="container px-5 py-4 mx-auto flex flex-wrap">

        <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

                {
                    VoteProcess.map((indexVote) => {
                        return <div key={indexVote.id}> 
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-2 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                                    
                                </div>
                                <div className="flex-grow pl-4">
                                <h2 className="font-medium text-4xl mb-1 tracking-wider">{indexVote.stepnum}</h2>
                                <p className="leading-relaxed text-justify">{indexVote.step}</p>
                                </div>
                            </div>

                        </div>
                    })
                }

            </div>
            <img className="mx-auto lg:w-2/4 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={IMGS.VOTEPROCESS} alt="step" />
        </div>
        </div>

    </section>
  )
}

export default Instructions