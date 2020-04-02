import React from 'react'
import * as S from './styled';
import makeCarousel from 'react-reveal/makeCarousel';
import { Fade, Slide } from 'react-reveal';
import { Arrow, Painting, Coffee, Sewing } from '../../svgs'
import data from '../../data'

const icons = [
  { id: 'painting', icon: Painting },
  { id: 'coffee', icon: Coffee },
  { id: 'sewing', icon: Sewing },
]

const Thing = ({ icon, text }) => (
  <S.Flex>
    <S.Icon as={icon} size={120} />
    <S.Text>{text}</S.Text>
  </S.Flex >
)

const CarouselUI = ({ position, handleClick, children }) => (
  <S.Container>
    {children}
    <S.Button onClick={handleClick} data-position={position - 1} >
      <S.Icon as={Arrow} size={25} />
    </S.Button>

    <S.Button right onClick={handleClick} data-position={position + 1} >
      <S.Icon as={Arrow} size={25} />
    </S.Button>
  </S.Container>
);
const Carousel = makeCarousel(CarouselUI);


const Interests = () => {
  return (
    <S.Section>
      <S.Flex>
        <Fade fraction={0.5} bottom>
          <S.Title>{data.favorites.title}</S.Title>
        </Fade>
        <Fade delay={500}>
          <Carousel defaultWait={8000}>
            {
              data.favorites.list.map((item, index) => {
                const findIcon = icons.find(icon => icon.id === item.id)
                const icon = findIcon ? findIcon.icon : icons[0].icon

                return (
                  <Slide right>
                    <Thing key={index} icon={icon} {...item} />
                  </Slide>
                )
              })
            }
          </Carousel>
        </Fade>
      </S.Flex>

      <S.WrapLine>
        <Fade delay={200}>
          <S.Line />
        </Fade>
      </S.WrapLine>
    </S.Section>
  )
}

export default Interests



