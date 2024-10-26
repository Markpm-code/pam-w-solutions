import './Mobile.css';

const MobileSection = () => {
  return (
    <div>
      <section className='mobile-section'>
        <h2 className="mobile-heading">Mobile-Responsive Design</h2>
        <p>
          More than half of web traffic comes from mobile devices. I ensure your
          website is fully responsive, so it looks great and functions perfectly
          on any device.
        </p>
        <p>Includes:</p>
        <ul>
          <li>Mobile-first design approach</li>
          <li>Cross-browser compatibility</li>
          <li>Seamless experience across all screen sizes</li>
        </ul>
      </section>
      <div className='mobile-circle'></div>
    </div>
  );
};

export default MobileSection;
