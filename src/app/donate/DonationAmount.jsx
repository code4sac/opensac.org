import { useState } from "react";

const DonationAmount = ({donationValue, setDonationValue}) => {
    const [customAmount, setCustomAmount] = useState(0);
    const [isChecked, setIsChecked] = useState("");
    const [customAmountError, setCustomAmountError] = useState(false);


    const handleCustomDonation = (amount) => {
        let regexOne = new RegExp(/^\d{0,6}\.?$/);
        let regexTwo = new RegExp(/^\d{0,6}(?:\.\d)$/);
        let regexThree = new RegExp(/^\d{0,6}(?:\.\d{2})$/);

        if (regexOne.test(amount)) {
            let convertedAmount = Number(amount.replace(/\./, '') + '00');
            setCustomAmountError(false);
            setCustomAmount(convertedAmount);
            if (isChecked === "donation-custom-amount") setDonationValue(convertedAmount);
        } else if (regexTwo.test(amount)) {
            let convertedAmount = Number(amount.replace(/\./, '') + '0');
            setCustomAmountError(false);
            setCustomAmount(convertedAmount);
            if (isChecked === "donation-custom-amount") setDonationValue(convertedAmount);
        } else if (regexThree.test(amount)) {
            let convertedAmount = Number(amount.replace(/\./, ''));
            setCustomAmountError(false);
            setCustomAmount(convertedAmount);
            if (isChecked === "donation-custom-amount") setDonationValue(convertedAmount);
        }
        else {
            setCustomAmount(0);
            console.log('error');
            if (isChecked === "donation-custom-amount") setDonationValue(0);
            setCustomAmountError(true);
        };
    }


  return (
    <div className="donation-amount-container">
        <h2>Donation</h2>
        <div className="donation-amount-selection-container">
            <input id="donation-five-dollars" name="donation-amount" type="radio" defaultChecked value={500} onClick={(e) => {
                setDonationValue(e.target.value) 
                setIsChecked(e.target.id)}} /> 
            <label className="donation-amount-label" htmlFor="donation-five-dollars">$5</label> 
        </div>
        <div className="donation-amount-selection-container">
            <input id="donation-ten-dollars" name="donation-amount" type="radio" value={1000} onClick={(e) => {
                setDonationValue(e.target.value)
                setIsChecked(e.target.id)}} />
            <label className="donation-amount-label" htmlFor="donation-ten-dollars">$10</label>
        </div>
        <div className="donation-amount-selection-container">
            <input id="donation-twenty-five-dollars" name="donation-amount" type="radio" value={2500} onClick={(e) => {
                setDonationValue(e.target.value)
                setIsChecked(e.target.id)}} />
            <label className="donation-amount-label" htmlFor="donation-five-dollars">$25</label>
        </div>
        <div className="donation-amount-selection-container">
            <input id="donation-custom-amount" name="donation-amount" type="radio" value={customAmount} onClick={(e) => {
                setDonationValue(e.target.value)
                setIsChecked(e.target.id)}}/>
            <label className="donation-amount-label" htmlFor="donation-custom-amount">Custom Amount (Enter your preferred donation)</label>
            <input className="donation-custom-amount" type="text" onChange={(e) => handleCustomDonation(e.target.value)} />
            {customAmountError && <span style={{color: 'red', display: 'block', margin: '10px 0'}}>Amount must be $0.50 to $999,999.99, format XXXXXX.XX</span>}
        </div>
        <button style={{margin: '0 auto'}}>Pay ${donationValue}</button>
    </div>
  )
}

export default DonationAmount