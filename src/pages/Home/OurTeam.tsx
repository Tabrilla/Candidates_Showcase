import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { INFORMATIONS } from "../../components";

const OurTeam = () => {

  const Text = "font-serif font-bold text-center";
  return (  
    <section>
      <h1 className={`${Text} text-3xl sm:text-3xl md:text-5xl lg:text-7xl pt-5`}>OUR TEAM</h1>

      <div className="flex">
          {
            INFORMATIONS.map((capsTeam) => {
              return <div key={capsTeam.studId}>
                  <Card className="w-96">
                  <CardHeader floated={false} className="h-80">
                  <img src={capsTeam.img}/>
                  </CardHeader>

                  <CardBody className="text-center">
                      <Typography variant="h4" color="blue-gray" className="mb-2">
                        {capsTeam.fullName}
                      </Typography>
                      <Typography color="blue-gray" className="font-medium" textGradient>
                        {capsTeam.position}
                      </Typography>
                  </CardBody>
                  </Card>
              </div>
            })
          }
      </div>

    </section>
  )
}

export default OurTeam