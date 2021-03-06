import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineFileText } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span} from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href = "/">
        <a style = {{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/> <Span>Zeel Patel </Span>
        </a>

    </Link>
  </Div1>

  <Div2>

  <li>
      <Link href="#experience">
        <NavLink>Work Experience</NavLink>
      
      </Link>
    </li>


    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      
      </Link>
    </li>

    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      
      </Link>
    </li>

    {/* <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      
      </Link>
    </li> */}
  </Div2>

  <Div3>
    <SocialIcons onClick = {openTabGithub}>
      <AiFillGithub size = "3rem"/>
    </SocialIcons>

    <SocialIcons onClick = {openTabLinkedin}>
      <AiFillLinkedin size = "3rem"/>
    </SocialIcons>

    <SocialIcons onClick = {openTabResume}>

      <AiOutlineFileText size = "3rem"/>
    </SocialIcons>
  </Div3>

</Container>
);

function openTabResume(){
  const url = "https://drive.google.com/file/d/1Z-TEhpcEgil6V24O6R4rvZ2iEWTRN5cq/view?usp=sharing"
  window.open(url, '_blank')
}

function openTabGithub(){
  const url = "https://github.com/zeelp741"
  window.open(url, '_blank')
}

function openTabLinkedin(){
  const url = "https://www.linkedin.com/in/zeelp2002/"
  window.open(url, '_blank')
}


export default Header;
