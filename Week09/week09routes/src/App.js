import Link from './components/Link';
// import GalleryPage from './pages/GalleryPage';

export default function App() {
  return (
    <div>
      <div>
        <Link to="/button">Go to Button Page</Link>
        <Link to="/accordion">Go to Accordion Page</Link>
        <Link to="/gallery">Go to Gallery Page</Link>
        {/* <GalleryPage /> */}
      </div>
    </div>
  );
}
