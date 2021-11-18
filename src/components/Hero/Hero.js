import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const spaces = "&nbsp;"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, My name is  <br/>
        Zeel Patel
      </SectionTitle>
      <SectionText>
      🏦 - Software Developer at BMO <br/>
      🏫 - CS and BBA Student<br/>
      👀 - Seeking Intern Opportunities <br/>
      📝 - Check out my Resume below

      </SectionText>

      {/* Open up in a new tab  */}
      <Button onClick = {openTab}>Resume</Button>


    </LeftSection>
  </Section>

  
);

function openTab(){
  const url = "https://drive.google.com/file/d/1Z-TEhpcEgil6V24O6R4rvZ2iEWTRN5cq/view?usp=sharing"
  window.open(url, '_blank')
}


export default Hero;