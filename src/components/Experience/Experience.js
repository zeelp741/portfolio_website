import React from 'react';
import { Layout } from '../../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ExperienceStyles';

import { experiences } from '../../constants/constants';




const Experience = () => (
    <Section nopadding id = "experience">
        <SectionDivider/>
        <SectionTitle main>Work Experience</SectionTitle>

        <GridContainer>
        {experiences.map(({id, image, title, description, tags, source, visit}) => (
            <BlogCard key = {id}>
            <Img src = {image}/>

            <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr/>
            </TitleContent>

            <CardInfo>{description}</CardInfo>
            <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                {tags.map((tag, i) => (
                    <Tag key ={i}>{tag}</Tag>
                ))}
                </TagList>
            </div>

            <UtilityList>
                <ExternalLinks href = {visit}>Code</ExternalLinks>
                <ExternalLinks href = {source}>Source</ExternalLinks>
            </UtilityList>


            </BlogCard>

        ))}

        </GridContainer>
    </Section>
);

export default Experience
