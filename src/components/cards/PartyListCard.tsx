import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
interface PartyListCardProps {
  partyListPicture: string;
  pl_Name: string;
}

const PartyListCard: React.FC<PartyListCardProps> = ({ partyListPicture, pl_Name }) => {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={partyListPicture}
        
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {pl_Name}
        </Typography>

        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>

    </Card>
  );
};

export default PartyListCard;
