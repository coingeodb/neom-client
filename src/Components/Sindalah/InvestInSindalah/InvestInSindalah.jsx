import Card1 from '../../Card1/Card1';
import './InvestInSindalah.css'

import CardIcon from '../../../Assets/Main/CardIcon.png'

const InvestInSindalah = () => {
    return(
        <div className='investInSindalah-main' >
            <div className='investInSindalah-main' >
                <h2>INVEST IN SINDALAH</h2>
                <hr/>
                <h4>Invest in the luxury island of Sindalah with its breathtaking coastal beaches that form a scenic gateway to the Red Sea </h4>
            </div>
            <div className='investInSindalah-main-card-container'  >
                <div class="investInSindalah-main-card-item-1">
                    <Card1
                        image={CardIcon}
                        head1="SILVER PLAN"
                        head2="$100 - $1000"
                        bodyL1='> Regular commission of $10 - $100 as per shares owned '
                        bodyL2='> Access to exclusive projects built on AI and Blockchain'
                        bodyL3='> Daily Withdrawal Limit $1000 '
                        bodyL4='> Free maintenance and chat support'
                        buttonLink=""
                    />
                </div>
                <div class="investInSindalah-main-card-item-2">
                    <Card1
                        image={CardIcon}
                        head1="GOLD PLAN"
                        head2="$1,100 - $10,000"
                        bodyL1='> Regular commission of $110 - $1000 as per shares owned '
                        bodyL2='> Access to exclusive projects built on AI and Blockchain >'
                        bodyL3='> Daily Withdrawal Limit $10,000 '
                        bodyL4='> Free maintenance and chat support'
                        buttonLink=""
                    />
                </div>
                <div class="investInSindalah-main-card-item-3">
                    <Card1
                        image={CardIcon}
                        head1="PLATINUM PLAN"
                        head2="$11,000 - $100,000"
                        bodyL1='> Regular commission of $1100 - $10,000 as per shares owned '
                        bodyL2='> Access to exclusive projects built on AI and Blockchain'
                        bodyL3='> Daily Withdrawal Limit $50,000 '
                        bodyL4='> Free maintenance and chat support'
                        bodyL5=''
                        buttonLink=""
                    />
                </div>
                <div class="investInSindalah-main-card-item-4">
                    <Card1
                        image={CardIcon}
                        head1="SILVER PLAN"
                        head2="$100,000 + "
                        bodyL1='> Regular commission of $20,000+ as per shares owned '
                        bodyL2='> Access to exclusive projects built on AI and Blockchain'
                        bodyL3='> Daily Withdrawal Limit : Unlimited '
                        bodyL4='> Free maintenance and chat support '
                        bodyL5='> VIP access to Events hosted by NEOM'
                        buttonLink=""
                    />
                </div>
            </div>
        </div>
    )
}
export default InvestInSindalah;