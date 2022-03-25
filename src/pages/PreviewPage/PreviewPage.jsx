import './PreviewPage.scss';
import ethIcon from '../../assets/images/ethereum-png.png';
import { ThumbsUpMinor, ChatMajor, CirclePlusMajor, ShareMinor} from '@shopify/polaris-icons';
import sungWang from '../../assets/images/sung-wang-g4DgCF90EM4-unsplash-scaled.jpg';
import thumbsUpIcon from '../../assets/icons/ThumbsUpMinor.svg';
import chatIcon from '../../assets/icons/ChatMajor.svg';
import shareIcon from '../../assets/icons/ShareMinor.svg';
import plusIcon from '../../assets/icons/CirclePlusMajor.svg';
import chevronUp from '../../assets/icons/ChevronUpMinor.svg';

function PreviewPage({description, gifNum, onClickHandler}) {
  return (
    <div className={`preview__wrapper page-wrapper gif-${gifNum}`}>
      <header className='preview-header'>
        <div className='preview-header__block'>
          <p className='preview-header__title preview-header__title--left'>
            Following
          </p>
          <p className='preview-header__title-divider'>
            |
          </p>
          <p className='preview-header__title preview-header__title--right'>
            Trending
          </p>
        </div>
        <div className='preview-header__price'>
            <img className='preview-header__price-icon' src={ethIcon}/>
            <h2 className='preview-header__price-text'>1.5 Eth</h2>
        </div>
      </header>
      <main className='preview-main page-wrapper'>
        <div className='preview-main__icon-bar'>
          <div className='preview-main__social'>
            <div className='preview-main__social-avatar'>
              <img className='preview-main__social-avatar-img' src={sungWang}/>
            </div>
            <div className='preview-main__social-icon--plus-container'>
              <img className='preview-main__social-icon preview-main__social-icon--plus' src={plusIcon} alt=""/>
            </div>
          </div>
          <div className='preview-main__social'>
            <img className='preview-main__social-icon' src={thumbsUpIcon}/>
            <p className='className-main__social-text'>
              1.3M
            </p>
          </div>
          <div className='preview-main__social'>
            <img className='preview-main__social-icon' src={chatIcon}/>
            <p className='className-main__social-text'>
              10.7M
            </p>
          </div>
          <div className='preview-main__social'>
            <img className='preview-main__social-icon' src={shareIcon}/>
            <p className='className-main__social-text'>
              30.9K
            </p>
          </div>
        </div>
      </main>
      <div className='preview-bottom'>
        <div className='preview-bottom__block'>
          <p className='preview-bottom__title'>
            @NFT Title
          </p>
          <p className='preview-bottom__description'>
            {description} <br/>
            #NFTgang #Shopify
          </p>
        </div>
        <div className='preview-bottom__swipe' onClick={onClickHandler}>
            <img className='preview-main__social-icon' src={chevronUp}/>
            <p className='preview-bottom__swipe-text'>Swipe</p>
        </div>
      </div>
    </div>
  )
}


export default PreviewPage;