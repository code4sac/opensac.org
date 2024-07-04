/**
 * Donate landing section.
 * @returns {JSX.Element}
 */
export default function ContactSectionLanding({ sectionType }) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div
        className={`general-section-${sectionType}-container contact-heading-underline`}
      >
        <h1 className={`general-heading-section`}>Donate</h1>
        <h2 className={`contact-sub-heading`}>
          Support<br></br> Our Mission
        </h2>
      </div>

      

      <div className={`general-section-${sectionType}-container`}>
        <p className={`contact-section-paragraph`}>
          <span className={`paragraph-bold`}>
            Choose the option that suits you best.
          </span>{" "}
          Make a one-time donation to support our mission instantly
          {/*, or become a sustaining supporter by selecting the monthly donation option*/}
          . Your tax-deductable donation fuels innovaction, empowers civic
          engagement, and enhances public services while shaping a brighter
          future for Sacramento. Thank you for your generous support!
        </p>
        <br />

        <script async src="https://js.stripe.com/v3/buy-button.js"></script>

        <stripe-buy-button
          buy-button-id="buy_btn_1POWMWLuvTadPilhtpcuuZL1"
          publishable-key="pk_live_51KlwVzLuvTadPilhP2f7hyPjlLqcDK804eFojbSZJOJhowUXFMfCvKKBha7fOfUYlGsTUZJzy4UbKmRSueQnIIqT00MDGq54rB"
        ></stripe-buy-button>
      </div>
    </section>
  );
}
