import React from "react";

const OneAndZeroCards = () => {
  let Cards = [
    {
      title: "1 & 0",
      para: "  Bit Brothers from its name and philosophy come from the concept of 1&0 or the bits. We believe in delivering solutions as a whole in the form with high integrity and transparent process. We are unreasonable in expecting nothing in between and compromising for something lesser. We believe in taking anything from O to 1 and nowhere in between. This attitude has helped us build, break, and rebuild our team over the last 7 years.  ",
    },
    {
      title: "We > I",
      para: "  The whole is greater than the sum of its parts. We believe the greatest challenges in the world never was/is solved by a single person but a larger whole. Within our own team and community, we always assume good intentions and when circumstances demand it, we are committed to going through hell or high water for each other. We push to create a perfect team with members that share common values and complementary talents.  ",
    },
    {
      title: "No Bullshit",
      para: " We believe in humility and push for open transparent communication from failures to success and thus creating conditions for authentic communication within all stakeholders involved. We embrace honesty and sometimes awkwardness in our efforts to create an incredible team and a brand worth believing in. In short, we believe in: Don’t bullshit yourself and don’t bullshit others.",
    },
    {
      title: "Always Learning",
      para: "We are obsessed with prototyping, experimenting, and fostering curiosity. We always analyze learning as a measurable parameter of any project and strive to learn from both our failure and success. We constantly hypothesize, test, and repeat to rapidly evolve with our partners.",
    },
    {
      title: "No Assholes",
      para: " We are small team of creative and social misfits seeks refuge and assholes will find no home at Bit Brothers. We seek out team members and partners who choose humility over arrogance, assume good intentions amongst one another, and respect one another irrespective of many differences of belief and perspective.",
    },
    {
      title: "Building with Care",
      para: " Design matters, the details matter, personality matters, and intentionality is critical. We are tired of hearing that the devil is in the detail. We believe magic is in the details. We have a culture that takes as much pride in a perfectly placed pixel as we do with the design of a page. Overtime, we believe our obsession over detail will speak volumes.",
    },
    {
      title: "Gyshido",
      para: " We are not a micro-management culture. We operate under the assumption that everyone on the team will Gyshido and hold themselves accountable with a mindset with an autonomous work practice and never letting others wait for their part of the job. We hold a conviction that nothing grand comes easily. We love the grind.",
    },
    {
      title: "Life ≠ Work",
      para: " We believe in maintaining a healthy work-life balance in the workspace, not just for better personal health and relationships but it always helps in team productivity, thereby performance and ultimately our partners. Put simply, people don’t view work as a chore, then they will work harder, make fewer mistakes, and are more likely to become advocates for core mission as a whole.",
    },
    {
      title: "Family & Health First",
      para: "Last but not least above all we push a family and health first approach across our organization and community. Your family and health always prioritize over anything else. If you are sick, if someone is getting married, if there is an urgent family need, we will insist you drop everything and take care of your family and your health above all else",
    },
  ];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-x-8 gap-y-9">
      {Cards.map((card) => {
        return (
          <div className="flex flex-col ">
            <h4 className="font-[500] text-[1.35em] text-[#252525] leading-[1.68em] mb-[1.33em]">
              {card.title}
            </h4>
            <p className="text-justify text-[1em] text-[#666666] font-[400] leading-[1.85em] ">
              {card.para}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OneAndZeroCards;
