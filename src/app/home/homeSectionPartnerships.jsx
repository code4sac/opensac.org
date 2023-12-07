import Link from "next/link";
/**
 * Home Partnerships Section
 * @returns {JSX.Element}
 */

export default function HomeSectionPartnership({sectionType}) {
    return (
    <section className={`home-section-${sectionType} partnership-section`}>
    <div className={`home-section-${sectionType}-container`}>
    <div className={'home-section-heading-underline-partnership'}>
    <h1 className={`heading-large-section-sub`}>Our Collaborations and Partnerships</h1>
    </div>
    <div className={`partnership-section-paragraph-container`}>
    <p className={`home-numbered-paragraph-partnerships`}>We have had the privilege of working with a diverse array of companies, organizations, and government entities, some of which are showcased below.</p>
   <div className={`home-projects-section-partnerships`}>
   <div>
   <Link href={`https://www.cityofsacramento.gov/`}>
   <img src="/img/partnership-icons/cityofsacramento.png" 
   width="300px"
   height="120.83px" 
   color="white"
   alt="cityofsacramento"
   />
   </Link>
   </div>
   <div>
   <Link href={`http://www.dbaarts.org/`}>
   <img src="/img/partnership-icons/DBA.png"
   width="180.57px"
   height="130.83px"
   alt="DBA"
   />
   </Link>
   </div>
   <div>
  <Link href={`https://codeforamerica.org/`}><img src="/img/partnership-icons/codeforamerica.png" alt="Code for America" /></Link>
   </div>
   </div>
    </div>
    </div>
    </section>
    );
}