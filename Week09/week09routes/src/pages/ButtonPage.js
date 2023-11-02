import Button from '../components/Button';
import { MdFlutterDash, MdHighlightOff, MdLogout } from 'react-icons/md';

export default function ButtonPage() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className="flex">
      <Button primary rounded outline onClick={handleClick} className="mb-5">
        <MdFlutterDash />
        Buy Now
      </Button>
      <Button success rounded>
        <MdLogout />
        Sign Out
      </Button>
      <Button danger outline>
        <MdHighlightOff />
        Delete
      </Button>
    </div>
  );
}
