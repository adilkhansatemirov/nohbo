import TechnologiesStyles from 'styles/Home/Technologies/Technologies.module.scss';

function Technologies() {
  return (
    <section className={`${TechnologiesStyles.technoloies} wow slideInLeft`}>
      <div className={TechnologiesStyles.technoloies__container}>
        <div className={TechnologiesStyles.technoloies__textContainer}>
          <h3 className={TechnologiesStyles.technoloies__title}>Our Technology</h3>
          <p className={TechnologiesStyles.technoloies__description}>
            We are fearless believers that packaging is antiquated, plastic is unnecessary, and the future of personal
            care stems from our sustainable and groundbreaking packaging transformations that disappear without a trace.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={TechnologiesStyles.technoloies__image} src="/images/products.png" alt="products" />
      </div>
    </section>
  );
}

export default Technologies;
