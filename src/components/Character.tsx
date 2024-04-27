import { Card, CardBody, Chip, Image } from "@nextui-org/react";
import { FC } from "react";

type colors = "success" | "danger" | "default";

const Character: FC<Character> = ({ name, image, status, gender, species }) => {
  const chipColor: Record<Character["status"], colors> = {
    Alive: "success",
    Dead: "danger",
    unknown: "default",
  };

  const fields = [
    {
      label: "Name",
      value: name,
    },
    {
      label: "Gender",
      value: gender,
    },
    {
      label: "Species",
      value: species,
    },
  ];
  return (
    <Card>
      <CardBody>
        <div className="grid grid-cols-2 gap-3">
          <Image
            width={300}
            height={200}
            alt={name ?? "character profile picture"}
            src={image}
          />
          <div className="">
            <div className="text-right mb-2">
              <Chip color={chipColor[status]}>{status}</Chip>
            </div>
            {fields.map(({ label, value }) => (
              <div className="flex gap-2">
                <div className="flex justify-between">
                  <p className="w-16">{label}</p>
                  <p className="px-1">:</p>
                </div>
                <h3 className="font-bold">{value ?? "NA"}</h3>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Character;
