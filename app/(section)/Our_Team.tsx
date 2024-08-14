import Section_Head from "../(components)/Section_Head";
import Mian_Button from "../(components)/Button";
import Team_Card from "../(components)/Team_Card";

const Our_Team = () => {
  return (
    <section className="cont-block">
      {/* Section Head */}
      <div className="flex justify-between items-center">
        <Section_Head sub_head="Meet our team" head="Our Team" />
        <Mian_Button link="/sbout" text="Learn More" />
      </div>
      {/* Cards */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center gap-5 py-6 md:py-10">
        <Team_Card
          name="Dolores Webster"
          position="CEO & Founder"
          text="Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet."
          bg="/img/team/member1.jpg"
          instaLink="x.com"
          facebookLink="facebook.com"
          tweeterLink="tweeter.com"
          linkedInLink="linkedin.com"
        />
        <Team_Card
          name="Dana Vaughn"
          position="Architect"
          text="Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet."
          bg="/img/team/member2.jpg"
          instaLink="x.com"
          facebookLink="facebook.com"
          tweeterLink="tweeter.com"
        />
        <Team_Card
          name="Jonathan Mcdaniel"
          position="Architect"
          text="Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet."
          bg="/img/team/member3.jpg"
          instaLink="x.com"
          facebookLink="facebook.com"
          tweeterLink="tweeter.com"
        />
      </div>
    </section>
  );
};

export default Our_Team;
