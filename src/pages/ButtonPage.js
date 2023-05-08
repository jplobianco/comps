import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked!");
  };
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoBell />
          Buy me!
        </Button>
      </div>
      <div>
        <Button success>
          <GoCloudDownload />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoCloudDownload />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
