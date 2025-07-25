import React from 'react';
import './styles/Services.css';

export default function Services() {
  return (
    <div className="services">
      <h2>Products and Services</h2>

      {/* Self-Publishing Section */}
      <div className="service-package">
        <div className="service-header">
          <img src="/assets/author.png" alt="Author writing" className="service-img" />
          <h3>Self-Publishing Packages</h3>
        </div>
        <p>
          These packages are for authors who want to publish their own work with professional support, including:
        </p>
        <ul>
          <li>Fiction and Non-Fiction Novels</li>
          <li>Poetry Collections</li>
          <li>Children’s Storybooks (including illustrated books)</li>
          <li>Ghostwriting Services (writing on behalf of clients)</li>
          <li>Editing and Proofreading (developmental editing, copyediting, formatting)</li>
          <li>Book Launch Planning and Marketing (optional add-ons such as TikTok promotions and launch events)</li>
        </ul>
        <div className="service-gallery">
          <img src="/assets/books.jpg" alt="Books stack" />
          <img src="/assets/valentines-day-background-Book.jpg" alt="Romantic book cover" />
          <img src="/assets/typewriter.jpg" alt="Typewriter and book" />
        </div>
        <p>
          Clients receive personalized manuscript assistance, outsourced cover design and illustration, formatting for print and digital, and guidance through the publishing process.
        </p>
      </div>

      {/* Stationery & Journals Section */}
      <div className="service-package">
        <div className="service-header">
          <img src="/assets/notebook.jpg" alt="Notebook" className="service-img" />
          <h3>Journals, Notebooks, and Other Stationery Products</h3>
        </div>
        <p>
          These are ready-made or customizable products designed for everyday use, gifting, and niche markets:
        </p>
        <ul>
          <li>Journals (e.g., gratitude, prayer, study journals)</li>
          <li>Notebooks and Planners (daily planners, goal trackers, diaries)</li>
          <li>Poetry Anthologies and Collections (as gift books or personal keepsakes)</li>
          <li>Children’s Activity Books or Educational Planners</li>
        </ul>
        <div className="service-gallery">
          <img src="/assets/typewriter-Green.jpg" alt="Vintage typewriter" />
          <img src="/assets/books-heart.jpg" alt="Books in heart shape" />
          <img src="/assets/writing.jpg" alt="Handwriting" />
        </div>
        <p>
          These products are either designed in-house or outsourced, printed via print-on-demand or local printers, and sold directly to customers via online shops or events. They do not require manuscript development or editing services.
        </p>
      </div>

      {/* Copywriting services */}
      <div className="service-package">
        <div className="service-header">
          <img src="/assets/Copywriting.webp" alt="Copywriting service" className="service-img" />
          <h3>Copywriting and Creative Content</h3>
        </div>
        <p>
          We also offer creative writing and content development for websites, blogs, personal bios, and digital content.
          These services are suitable for authors, creatives, and entrepreneurs who need written content with impact.
        </p>
      </div>
    </div>
  );
}
