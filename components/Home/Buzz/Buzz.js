import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Home/Buzz/Buzz.module.scss';

const list = [
  {
    id: 1,
    imageSrc: 'businessinsider.png',
    link: 'https://www.insider.com/benjamin-stern-plastic-free-bottles-shampoo-drops-nohbo-2018-9',
    title: 'How a 14-year-old turned his plastic-free shampoo idea into a waste-free product business',
    date: 'October 1, 2018',
  },
  {
    id: 2,
    imageSrc: 'forbes.png',
    link: 'https://www.youtube.com/watch?ab_channel=Forbes&v=rbD03aLL0gw',
    title: 'The Teen Trying To Go Plastic-Free',
    date: 'March 27, 2019',
  },
  {
    id: 3,
    imageSrc: 'yahoo.png',
    link: 'https://finance.yahoo.com/news/16-old-entrepreneur-landed-100-202102036.html',
    title: `16-year-old entrepreneur who landed a $100,000 'Shark Tank' deal shares lessons he's learned from Mark Cuban`,
    date: 'March 5, 2016',
  },
  {
    id: 4,
    imageSrc: 'businesswire.png',
    link: 'https://www.businesswire.com/news/home/20200327005022/en/%E2%80%98Shark-Tank%E2%80%99-Alum-Nohbo-Raises-3M-Series-Seed-Led-By-Material-Impact',
    title: '‘Shark Tank’ Alum Nohbo Raises $3M Series Seed Led By Material Impact',
    date: 'March 27, 2020',
  },
  {
    id: 5,
    imageSrc: 'floridatoday.png',
    link: 'https://www.floridatoday.com/story/news/2020/01/10/shark-tank-inventor-viera-high-gets-visit-mark-cuban/4305917002/',
    title: `'Shark Tank' shampoo entrepreneur from Viera High guiding Nohbo to new heights`,
    date: 'January 10, 2020',
  },
  {
    id: 6,
    imageSrc: 'plasticgeneration.png',
    link: 'https://plasticgeneration.com/young-entrepreneur-aims-to-remove-plastic-bottles-forever/',
    title: 'Young entrepreneur aims to remove plastic bottles forever',
    date: 'March 29, 2019',
  },
  {
    id: 7,
    imageSrc: 'medium.png',
    link: 'https://medium.com/swlh/how-to-swim-with-the-sharks-when-mark-cuban-is-your-mentor-bf6b0c7b31e2',
    title: 'How To Swim With The Sharks When Mark Cuban Is Your Mentor',
    date: 'October 17, 2018',
  },
  {
    id: 8,
    imageSrc: 'spacecoast.png',
    link: 'https://spacecoastdaily.com/2016/08/governor-rick-scott-recognizes-melbournes-ben-stern-with-young-entrepreneur-award/',
    title: 'Governor Rick Scott Recognizes Melbourne’s Ben Stern With Young Entrepreneur Award',
    date: 'August 4, 2016',
  },
  {
    id: 9,
    imageSrc: 'dailymail.png',
    link: 'https://www.dailymail.co.uk/sciencetech/article-3586828/Just-add-water-Schoolboy-develops-solid-shampoo-balls-away-plastic-bottles-won-t-leak-luggage.html',
    title: `Just add water! Schoolboy develops solid 'shampoo balls' that may spell the end of plastic bottles…`,
    date: 'May 12, 2016',
  },
];

function Buzz() {
  return (
    <section className={styles.buzz}>
      <h3 className={styles.title}>The Buzz</h3>
      <div className={styles.list}>
        {list.map((item, index) => (
          <div className={styles.item} key={item.id}>
            <ScrollAnimation animateIn="fadeIn" animateOnce delay={100 * index}>
              <Link href={item.link}>
                <a>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={styles.image} src={`/images/${item.imageSrc}`} alt="buzz" />
                </a>
              </Link>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Buzz;
