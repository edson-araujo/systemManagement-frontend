import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";

const SubscriptionCard = ({ data }) => {
  return (
    <div className="rounded-md bg-primary/20 bg-opacity-20 shadow-[#2563eb54] shadow-2xl card p-5 space-y-5 w-[22rem]">
      <p>{data.planName}</p>
      <p>
        <span className="text-xl font-semibold">{data.price}</span>
        <span>{data.planType}</span>
      </p>
      {data.planType=="ANUAL"&&<p className="text-green-500">30% Off</p>}

      <Button className='w-full'>
        {data.buttonName}
      </Button>
      <div>
        {data.fetures.map((item) => <div key={item} className="flex items-center gap-2">
            <CheckCircledIcon/>
            <p>{item}</p>
        </div>)}
      </div>
    </div>
  );
};

export default SubscriptionCard;
