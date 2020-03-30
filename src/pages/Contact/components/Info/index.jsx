import React from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';
import { ReactComponent as EmailIcon } from '../../icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as PlaceIcon } from '../../icons/place.svg';
import mockData from '../../data'

const icons = [
  { id: 'info-email', icon: EmailIcon },
  { id: 'info-phone', icon: PhoneIcon, },
  { id: 'info-place', icon: PlaceIcon, },
]

const ItemLink = ({ icon, href, target, text }) => (
  <S.ButtonLink href={href} target={target} icon={icon === PlaceIcon}>
    <S.Icon as={icon} size={24} />
    <S.Text>{text}</S.Text>
  </S.ButtonLink>
)

const ItemText = ({ icon, text }) => (
  <S.Flex>
    <S.Icon as={icon} size={24} />
    <S.Text>{text}</S.Text>
  </S.Flex >
)


const ContactInfo = () => (
  <S.Section>
    <Fade bottom delay={400}>
      <S.List>
        {
          mockData.map((item, index) => {
            const findIcon = icons.find(icon => icon.id === item.id)
            const icon = findIcon ? findIcon.icon : icons[0].icon
            const Item = item.href ? ItemLink : ItemText

            return <Item key={index} icon={icon} {...item} />
          })
        }
      </S.List>
    </Fade>
  </S.Section>
)

export default ContactInfo
