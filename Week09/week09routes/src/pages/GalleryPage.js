import Gallery from '../components/Gallery';

export default function ButtonPage() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    // <div>
    <>
      <Gallery images={require('../assets/taptype_cover.png')} className="top-0 left-1/4" />
      <Gallery images={require('../assets/luckytiger_cover.jpeg')} className="top-1/4 left-2/3" />
      <Gallery images={require('../assets/2022demoreel_cover.png')} className="top-1/2 left-0" />
      <Gallery images={require('../assets/wpphouse_cover.png')} className="top-3/4 left-1/2" />
      {/* <Gallery primary rounded outline onClick={handleClick} className="mb-5" /> */}
      {/* <Gallery success rounded />
      <Gallery danger outline /> */}
    </>
    // </div>
  );
}
