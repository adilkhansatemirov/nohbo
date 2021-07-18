import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Technology/Provide/Provide.module.scss';

const list = [
  {
    id: 1,
    imageSrc: 'lab1.png',
    title: 'Flexibility',
    description:
      'Vast domain knowledge, obsessively focused R&D, and specialization in water soluble film and anhydrous formulations allows us to modify formats and build new applications with ease.',
  },
  {
    id: 2,
    imageSrc: 'lab2.png',
    title: 'Tuneability',
    description:
      'We have the capacity to tweak the fragrance, color, and organoleptic properties of our Drops. Our in-house R&D team ensures that these changes meet the necessary requirements for commercialization through rigorous film compatibility, stability and performance testing.',
  },
  {
    id: 3,
    imageSrc: 'lab3.png',
    title: 'Scalability',
    description:
      'With a vertically integrated and constantly expanding supply chain, we can make up to 195 million Drops and 30,000 kilos of film annually.',
  },
];

function Provide() {
  return (
    <div className={styles.provide}>
      <div className={styles.container}>
        <h3 className={styles.title}>What Nohbo Can Provide</h3>
        <div className={styles.list}>
          {list.map((item, index) => (
            <div className={styles.item} key={item.id}>
              <ScrollAnimation animateIn="fadeInUp" animateOnce delay={index * 100}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/${item.imageSrc}`} alt="item" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Provide;
