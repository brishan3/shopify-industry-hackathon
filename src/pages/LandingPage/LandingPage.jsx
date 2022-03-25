import './LandingPage.scss';
import { Icon } from '@shopify/polaris';
import {
  OrdersMajor,
  HomeMajor,
  ProductsMajor,
  StoreMajor,
  HorizontalDotsMinor
} from '@shopify/polaris-icons';
import sungWang from '../../assets/images/sung-wang-g4DgCF90EM4-unsplash-scaled.jpg'


function LandingPage({onClickHandler}) {
  return (
    <section className='landing'>
      {/* <h1>Landing Page</h1> */}
      <div className="landing__wrapper-top page-wrapper">
        <header className='landing-header'>
          <h1 className='landing-header__welcome-text'>Welcome to Shopify, Mike</h1>
          <div className='landing-header__block'>
            <h2 className='landing-header__sub-text'>Let's get started</h2>
            <Icon source={HorizontalDotsMinor} color="base"/>
          </div>
        </header>
        <main className='landing__main'>
          <div className='product-card'>
            <div className='product-card__img-container'>
              <img className='product-card__img-container' src={sungWang}/>
            </div>
            <div className='product-card__description'>
              <p className='product-card__description-title'>Upload your first NFT</p>
              <p className='product-card__description-subtext'>We'd love to see what you have to contribute to our community.</p>
            </div>
            <button className='product-card__button' onClick={() => {onClickHandler()}}>
              Let's get started
            </button>
            <a className='product-card__learn-more' href="">Learn more about adding NFT's</a>
          </div>
          <nav className="carousel">
            <input id="carousel-item-1" type="radio" name="carousel-dots"checked/>
            <label htmlFor="carousel-item-1">Go to item 1</label>

            <input id="carousel-item-2" type="radio" name="carousel-dots" />
            <label htmlFor="carousel-item-2">Go to item 2</label>

            <input id="carousel-item-3" type="radio" name="carousel-dots"/> 
            <label htmlFor="carousel-item-3">Go to item 3</label>

            <input id="carousel-item-4" type="radio" name="carousel-dots"/>
            <label htmlFor="carousel-item-4">Go to item 4</label>

            <input id="carousel-item-5" type="radio" name="carousel-dots"/>
            <label htmlFor="carousel-item-5">Go to item 5</label>
          </nav>
          <div className='user-plan'>
            <p className='user-plan__text'>You have 12 days left of your trial</p>
            <a className='user-plan__select-plan' href="">Select a plan</a>
          </div>
        </main>
      </div>
      <footer className='landing__wrapper-bottom'>
        <div className='explore-more page-wrapper'>
          <div className='explore-more__block'>
            <p className='explore-more__title'>Explore more support</p>
            <Icon source={HorizontalDotsMinor} color="base"/>
          </div>
          <p className='explore-more__sub-text'>Check out these resources for answers to your questions, videos, and best practices.</p>
        </div>
        <nav className='footer-nav page-wrapper'>
          <ul className='footer-nav__list'>
            <li className='footer-nav__element'>
              <Icon source={HomeMajor} color="base"/>
              <p className='footer-nav__element-text'>Home</p>
            </li>
            <li className='footer-nav__element'>
              <Icon source={OrdersMajor} color="base"/>
              <p className='footer-nav__element-text'>Orders</p>
            </li>
            <li className='footer-nav__element'>
              <Icon source={ProductsMajor} color="base"/>
              <p className='footer-nav__element-text'>Products</p>
            </li>
            <li className='footer-nav__element'>
              <Icon source={StoreMajor} color="base"/>
              <p className='footer-nav__element-text'>Store</p>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  )
}


export default LandingPage;