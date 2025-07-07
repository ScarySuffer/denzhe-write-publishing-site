import './styles/Journey.css';

export default function Journey() {
  return (
    <div className="journey">
      <h2>Our Publishing Journey</h2>
      <ul>
        <li>
          <div className="icon">
            <i className="bi bi-lightbulb"></i>
          </div>
          <p>Idea generation and manuscript development support.</p>
        </li>
        <li>
          <div className="icon">
            <i className="bi bi-pencil-square"></i>
          </div>
          <p>Professional editing and proofreading.</p>
        </li>
        <li>
          <div className="icon">
            <i className="bi bi-image"></i>
          </div>
          <p>Illustration and cover design (outsourced to creatives).</p>
        </li>
        <li>
          <div className="icon">
            <i className="bi bi-book"></i>
          </div>
          <p>Layout, formatting, and publishing in print/digital formats.</p>
        </li>
        <li>
          <div className="icon">
            <i className="bi bi-megaphone"></i>
          </div>
          <p>Launch and optional marketing support for distribution.</p>
        </li>
      </ul>
    </div>
  );
}
