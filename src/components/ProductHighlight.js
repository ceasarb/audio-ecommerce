import headphones from '../assets/1x/headphones-bitmap@1x.png';

const ProductHighlight = () => {
  return (
    <section>
      <div className='highlight-container'>
        <img src={headphones} alt="" />
        <div className='highlight-text-container'>
          <p className='overline'>New Product</p>
          <h2>xx99 mark ii headphones</h2>
          <p className='subtitle'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='btn-1'>See Product</button>
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;