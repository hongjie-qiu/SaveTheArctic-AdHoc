import Bar from '../components/progressbar';
import '../css/AccountPage.css';
import Graph from "../images/bear.png";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

function AccountPage(props) {
    let point = Object.values(props);
    if (point == 0) {
        const db = getDatabase();
        let userId = getAuth().currentUser.uid;
        const userInfo = ref(db, "users/" + userId);
        onValue(userInfo, (snapshot) => {
            point = snapshot.val().points;
        })
    }
    let donation = 0;
    if (point >= 100) {
        donation = point / 10;
        donation = Math.floor(donation);
        donation = donation - donation % 10;
    }
    return (
        <div className='accountPage'>
            <h2 className="center">Points</h2>
            <div className='barContainer'>
                <Bar />
            </div>

            <div className="totalDonation">
                <span className='bear'><img src={Graph} alt="Cartoon of a polar bear" />Total Donation: ${donation}</span>
            </div>

            <div className="donationOrg p-5">
                <div className="pt-5">
                    <h2>Environmental Organizations</h2>
                    <p>click on the pictures to donate</p>
                </div>
                <ul class="cardss">
                    <li class="cards_item">
                        <div class="car">
                            <div class="card_image">
                                <img class="pt-5 pb-5" alt="The Nature Conservancy" src='https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/2246/logo-tnc.svg?v=1612203209000' /></div>
                            <div class="card_content">
                                <h2 class="card_title">The Nature Conservancy</h2>
                                <p class="card_text">
                                    Join as a Conservation Champion today to help save endangered lands, waters and wild species and receive our picnic blanket thank-you gift seen on TV.
                                </p>
                                <a className='p-5' href='https://www.nature.org/en-us/'>
                                    <button class="btn card_btn">Read More</button>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="car">
                            <div class="card_image">
                                <img class="pt-5 pb-5" alt="Watershed Agricultural Concil" src='https://www.nycwatershed.org/wp-content/uploads/2015/06/waclogowebsite2.jpg' />
                            </div>
                            <div class="card_content">
                                <h2 class="card_title">Watershed Agricultural Concil</h2>
                                <p class="card_text">To promote the economic viability of agriculture and forestry, the protection of water quality, and the conservation of working landscapes through strong local leadership and sustainable public-private partnerships.</p>
                                <a className='p-5' href='https://www.nycwatershed.org'>
                                    <button class="btn card_btn">Read More</button>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="car">
                            <div class="card_image">
                                <img alt="Climate Emergency Fund" src='https://images.squarespace-cdn.com/content/v1/60930b2084ef393517963bbe/1623167942413-WFF37KW0HO9H1DI85K12/CEF_logo_BlueTransparent+%283%29.png?format=1500w' />
                            </div>
                            <div class="card_content">
                                <h2 class="card_title">Climate Emergency Fund</h2>
                                <p class="card_text">Climate Emergency Fund named BAG MIR SA one of the most high impact & cost effective organizations you can donate to.</p>
                                <a className='p-5' href='https://www.climateemergencyfund.org'>
                                    <button class="btn card_btn">Read More</button>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="car">
                            <div class="card_image"><img alt="CLEAN AIR TASK FORCE" src='https://cdn.catf.us/wp-content/uploads/2021/09/21091839/catf-logo%402x.png' /></div>
                            <div class="card_content">
                                <h2 class="card_title">CLEAN AIR TASK FORCE</h2>
                                <p class="card_text">We push the change in technologies and policies needed to get to a zero-emissions, high-energy planet at an affordable cost.</p>
                                <a className='p-5' href='https://www.nycwatershed.org'>
                                    <button class="btn card_btn">Read More</button>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default AccountPage;