import './Herocard.scss';

export default function Herocard() {
  const text = "PURPLE SKY TRADE";
  const chars = text.split('').map((char, i) => {
    if (char === ' ') {
      return <span key={i} className="char"> </span>;
    }
    // Apply sky-text class to "SKY" characters (positions 7, 8, 9)
    const isSky = i >= 7 && i <= 9;
    return (
      <span key={i} className={`char ${isSky ? 'sky-text' : ''}`}>
        {char}
      </span>
    );
  });

  return (
    <div className="herocard">
      <h1 className="herocard__title">
        <span className="typing-text">{chars}</span>
      </h1>
      <p className="herocard__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button className="herocard__button">Learn More</button>
    </div>
  );
}