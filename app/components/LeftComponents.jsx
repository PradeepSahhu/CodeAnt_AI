import TopCardElement from "./LeftComponents/TopCardComponents";
import { BottomCardElement } from "./LeftComponents/BottomCardElement";

const LeftComponents = () => {
  return (
    <div className="flex justify-center align-middle">
      <div>
        <TopCardElement />
      </div>
      <div>
        <BottomCardElement />
      </div>
    </div>
  );
};

export default LeftComponents;
