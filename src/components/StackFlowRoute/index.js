import {Component} from 'react'

import {
  FaQuestion,
  FaInbox,
  FaStackExchange,
  FaTags,
  FaRegUser,
  FaSearch,
  FaRegThumbsUp,
  FaIdBadge,
  FaEdit,
} from 'react-icons/fa'
import {AiOutlineShopping} from 'react-icons/ai'
import {
  IoDocumentText,
  IoEyeOutline,
  IoChatboxOutline,
  IoGlobeOutline,
  IoLocationSharp,
} from 'react-icons/io5'
import {HiOutlineSpeakerphone} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdArrowDropright} from 'react-icons/io'

import './index.css'

class StackFlowRoute extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="options-container">
          <h1 className="logo">StackOverFlow</h1>
          <div className="questiions-container">
            <FaQuestion className="fa-icon" />
            <span className="que-element">Questions </span>
          </div>
          <ul className="ul-container">
            <li className="li-element">
              <AiOutlineShopping />
              <span className="que-element">Jobs</span>
            </li>
            <li className="li-element">
              <IoDocumentText />
              <span className="que-element">
                Documentations<sup className="fa-icon">New</sup>{' '}
              </span>
            </li>
            <li className="li-element">
              <FaTags />
              <span className="que-element">Tag</span>
            </li>
            <li className="li-element">
              <FaRegUser />
              <span className="que-element">USERS</span>
            </li>
            <li className="li-element">
              <FaIdBadge />
              <span className="que-element">BADGES</span>
            </li>
            <li className="li-element">
              <HiOutlineSpeakerphone />
              <span className="que-element">ASK QUESTIONS</span>
            </li>
            <li className="li-element">
              <FaStackExchange />
              <span className="que-element">STACK EXCHANGE</span>
            </li>
            <li className="li-element">
              <FaInbox />
              <span className="que-element">INBOX</span>
              <span className="fa-icon">24</span>
            </li>
          </ul>
        </div>
        <div className="search-container">
          <div className="search-element-container">
            <GiHamburgerMenu className="ham-burge-icon" />
            <FaSearch className="ham-burge-icon" />
            <input
              type="search"
              placeholder="Search"
              className="input-element"
            />
          </div>

          <h1 className="heading">Questions</h1>
          <ul className="ul-tab-container">
            <li className="tabs active-tab">interesting</li>
            <li className="tabs">
              featured <span>432</span>
            </li>
            <li className="tabs">hot</li>
            <li className="tabs">Week</li>
            <li className="tabs">Month</li>
          </ul>
          <hr />
          <div className="tab-information-container">
            <ul className="ul-container">
              <li>
                <p className="ul-heading">qsub disregarded memory limit</p>
                <ul className="ul-container tabs-container">
                  <li className="information-tabs">Memory</li>
                  <li className="information-tabs">Pub</li>
                  <li className="information-tabs">qsub</li>
                </ul>
              </li>
              <p className="head-line">
                <span>
                  <FaEdit className="fa-edit-icon" />
                </span>
                Modified one minute ago clustredude 322
              </p>
            </ul>
            <ul className="ul-votes-container">
              <li className="list-li-element">
                <span>0</span>
                <span>votes</span>
                <span>
                  <FaRegThumbsUp />
                </span>
              </li>
              <li className="list-li-element">
                <span>1</span>
                <span>answer</span>
                <span>
                  <IoChatboxOutline />
                </span>
              </li>
              <li className="list-li-element">
                <span>7</span>
                <span>views</span>
                <span>
                  <IoEyeOutline />
                </span>
              </li>
            </ul>
          </div>
          <div className="tab-information-container">
            <ul className="ul-container container">
              <li>
                <p className="ul-heading">
                  Javscript function rotate element => trying to set an If
                  condition for a specific parameter passed In{' '}
                </p>
                <ul className="ul-container tabs-container">
                  <li className="information-tabs">Javascript</li>
                  <li className="information-tabs">JQuery</li>
                  <li className="information-tabs">CSS</li>
                </ul>
              </li>
              <p className="head-line">
                <span>
                  <FaEdit className="fa-edit-icon" />
                </span>
                Answered 40 minutes ago Zive Mission 1,880
              </p>
            </ul>
            <ul className="ul-votes-container">
              <li className="list-li-element">
                <span>0</span>
                <span>votes</span>
                <span>
                  <FaRegThumbsUp />
                </span>
              </li>
              <li className="list-li-element active-answer-container">
                <span className="active">1</span>
                <span className="active">answer</span>
                <span className="active">
                  <IoChatboxOutline />
                </span>
              </li>
              <li className="list-li-element">
                <span>7</span>
                <span>views</span>
                <span>
                  <IoEyeOutline />
                </span>
              </li>
            </ul>
          </div>
          <div className="tab-information-container">
            <ul className="ul-container">
              <li>
                <p className="ul-heading">qsub disregarded memory limit</p>
                <ul className="ul-container tabs-container">
                  <li className="information-tabs">Memory</li>
                  <li className="information-tabs">Pub</li>
                  <li className="information-tabs">qsub</li>
                </ul>
              </li>
              <p className="head-line">
                <span>
                  <FaEdit className="fa-edit-icon" />
                </span>
                Modified one minute ago clustredude 322
              </p>
            </ul>
            <ul className="ul-votes-container">
              <li className="list-li-element">
                <span>0</span>
                <span>votes</span>
                <span>
                  <FaRegThumbsUp />
                </span>
              </li>
              <li className="list-li-element">
                <span>1</span>
                <span>answer</span>
                <span>
                  <IoChatboxOutline />
                </span>
              </li>
              <li className="list-li-element">
                <span>7</span>
                <span>views</span>
                <span>
                  <IoEyeOutline />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="jobs-container">
          <div className="profile-pic-container">
            <div className="globe">
              <IoGlobeOutline />
              <span>Help</span>
            </div>
            <span className="globe">Tour</span>
            <img
              src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1704165495/profile_rkhizp.avif"
              alt="profile"
              className="image-element"
            />
          </div>
          <p className="element">Looking out for....</p>
          <div>
            <ul className="jobs-details-container">
              <p className="ul-heading">Fronted Developer with angular</p>
              <p>Wallethub</p>
              <div className="location-container">
                <IoLocationSharp />
                <span>Washington DC</span>
                <span className="work-type"> Remote</span>
              </div>
              <span className="tecnologies">AngularJs</span>
              <span className="tecnologies">Cordova</span>
            </ul>
            <hr />
            <ul className="jobs-details-container">
              <p className="ul-heading">Senior IOS/Iphone Engineer</p>
              <p>Perk.com INC</p>
              <div className="location-container">
                <IoLocationSharp />
                <span>Bangalore, India</span>
                <span className="work-type"> In office</span>
              </div>
              <span className="tecnologies">IOS</span>
              <span className="tecnologies">IPhone</span>
            </ul>
            <hr />
            <ul className="jobs-details-container">
              <p className="ul-heading">Fronted Developer with angular</p>
              <p>Wallethub</p>
              <div className="location-container">
                <IoLocationSharp />
                <span>Washington DC</span>
                <span className="work-type"> Remote</span>
              </div>
              <span className="tecnologies">AngularJs</span>
              <span className="tecnologies">Cordova</span>
            </ul>
            <button type="button" className="button">
              View All Jobs <IoMdArrowDropright className="drop-down-icon" />
            </button>
          </div>
          <div>
            <h1 className="heading">Network Questions</h1>
            <ul className="ul-container">
              <li className="li-element">
                <span className="ul-heading">
                  Were there women who were against giving women the right to
                  vote?
                </span>
              </li>
              <li className="li-element">
                <span className="ul-heading">
                  Why does everybody typedef over standard C types
                </span>
              </li>
              <li className="li-element">
                <span className="ul-heading">
                  An English word describing a pseudo-job
                </span>
              </li>
            </ul>
            <button type="button" className="button-view">
              <span>View All Jobs</span>{' '}
              <IoMdArrowDropright className="drop-down-icon-right" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StackFlowRoute
