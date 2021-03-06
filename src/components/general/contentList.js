import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Box as Base, Heading, Text } from 'rebass'

const StyledLink = styled(Link)`
  position: relative;
  width: 100%;
  margin: 0 0 1rem 0;
  text-decoration: none;
`

export const Box = styled(Base)`
  &:hover div {
    @supports (object-fit: cover) {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Cover = styled.div`
  position: relative;
  transition: none;
  &::before {
    transition: all 0.3s;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: var(--color-base-75);
  }
  @media screen and (min-width: 52em) {
    position: fixed !important;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;
    width: 50%;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    div {
      height: 100% !important;
      object-fit: cover !important;
    }
    .gatsby-image-wrapper {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }
    &::before {
      display: none;
    }
  }

  @media screen and (min-width: 64em) {
    position: fixed !important;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;
    width: 66.666%;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    div {
      height: 100% !important;
      object-fit: cover !important;
    }
    .gatsby-image-wrapper {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }
    &::before {
      display: none;
    }
  }
`
const Overflow = styled.div`
  display: inline-block;
  overflow: none;
  position: absolute;
  bottom: 1em;
  padding: 2em 3em 2em 2em;
  z-index: 2;
  @media screen and (min-width: 52em) {
    bottom: 0;
    display: block;
    position: relative;
    padding: 0.25rem 0;
  }
`

const ContentList = props => {
  return (
    <StyledLink
      key={props.id}
      to={props.blogList ? `/blog/${props.slug}/` : `${props.slug}/`}
    >
      <Box
        width={[1]}
        px={[3, 4]}
        pb={[3, 4]}
        pt={0}
        flexWrap="wrap"
        flexDirection="column"
      >
        <Cover>
          <Img fluid={props.image.fluid} />
        </Cover>
        {props.galleryList ? (
          <Overflow>
            <Heading width={1} fontSize={[3, 4]}>
              {props.title}
            </Heading>
            <Text
              className="linkAccentReset"
              width={1}
              dangerouslySetInnerHTML={{
                __html: props.excerpt.childMarkdownRemark.excerpt,
              }}
            />
          </Overflow>
        ) : props.blogList ? (
          <>
            <Heading pt={3} width={1} fontSize={[3, 4]}>
              {props.title}
            </Heading>
            <Heading width={1} fontSize={1}>
              Published: {props.date} | Reading time: {props.time} min
            </Heading>

            <Text
              className="linkAccentReset"
              width={1}
              dangerouslySetInnerHTML={{
                __html: props.excerpt.childMarkdownRemark.excerpt,
              }}
            />
          </>
        ) : (
          <Heading width={1} fontSize={[3, 4]}>
            {props.title}
          </Heading>
        )}
      </Box>
    </StyledLink>
  )
}

export default ContentList
