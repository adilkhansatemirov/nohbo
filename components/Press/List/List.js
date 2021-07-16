import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Press/List/List.module.scss';

const list = [
  {
    id: 1,
    imageSrc: 'uncountable.png',
    link: 'https://bbc.com',
    title: 'Nohbo selects Uncountable as R&D data platform',
    date: 'January 15, 2021',
  },
  {
    id: 2,
    imageSrc: 'businesswire.png',
    link: 'https://bbc.com',
    title: '‘Shark Tank’ Alum Nohbo Raises $3M Series Seed Led By Material Impact',
    date: 'March 27, 2020',
  },
  {
    id: 3,
    imageSrc: 'floridatoday.png',
    link: 'https://bbc.com',
    title: `'Shark Tank' shampoo entrepreneur from Viera High guiding Nohbo to new heights`,
    date: 'January 10, 2020',
  },
  {
    id: 4,
    imageSrc: 'plasticgeneration.png',
    link: 'https://bbc.com',
    title: 'Young entrepreneur aims to remove plastic bottles forever',
    date: 'March 29, 2019',
  },
  {
    id: 5,
    imageSrc: 'forbes.png',
    link: 'https://bbc.com',
    title: 'The Teen Trying To Go Plastic-Free',
    date: 'March 27, 2019',
  },
  {
    id: 6,
    imageSrc: 'medium.png',
    link: 'https://bbc.com',
    title: 'How To Swim With The Sharks When Mark Cuban Is Your Mentor',
    date: 'October 17, 2018',
  },
  {
    id: 7,
    imageSrc: 'businessinsider.png',
    link: 'https://bbc.com',
    title: 'How a 14-year-old turned his plastic-free shampoo idea into a waste-free product business',
    date: 'October 1, 2018',
  },
  {
    id: 8,
    imageSrc: 'nowthis.png',
    link: 'https://bbc.com',
    title: 'Nohbo Drops Are Plastic Shampoo Bottle Alternative',
    date: 'August 7, 2018',
  },
  {
    id: 9,
    imageSrc: 'huffpost.png',
    link: 'https://bbc.com',
    title: 'Mark Cuban Finds His “Mini-Me” in a 16-Year-Old Entrepreneur',
    date: 'December 6, 2017',
  },
  {
    id: 10,
    imageSrc: 'spacecoast.png',
    link: 'https://bbc.com',
    title: 'Governor Rick Scott Recognizes Melbourne’s Ben Stern With Young Entrepreneur Award',
    date: 'August 4, 2016',
  },
  {
    id: 11,
    imageSrc: 'thesun.png',
    link: 'https://bbc.com',
    title: 'Lad invents SHAMPOO BALLS that eliminate the need for plastic bottles… and he’s only 16',
    date: 'May 19, 2016',
  },
  {
    id: 12,
    imageSrc: 'dailymail.png',
    link: 'https://bbc.com',
    title: `Just add water! Schoolboy develops solid 'shampoo balls' that may spell the end of plastic bottles…`,
    date: 'May 12, 2016',
  },
  {
    id: 13,
    imageSrc: 'businessinsider.png',
    link: 'https://bbc.com',
    title: `4 lessons Mark Cuban taught his 16-year-old 'Mini Me' about business`,
    date: 'May 12, 2016',
  },
  {
    id: 14,
    imageSrc: 'yahoo.png',
    link: 'https://bbc.com',
    title: `16-year-old entrepreneur who landed a $100,000 'Shark Tank' deal shares lessons he's learned from Mark Cuban`,
    date: 'March 5, 2016',
  },
];

function List() {
  return (
    <div className={styles.container}>
      {list.map((item) => (
        <ScrollAnimation animateIn="fadeIn" animateOnce key={item.id}>
          <div className={styles.pressItem}>
            <div className={styles.imageContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.image} src={`/images/${item.imageSrc}`} alt="image" />
            </div>
            <div className={styles.main}>
              <p className={styles.date}>{item.date}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>Read Release</button>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}

export default List;
