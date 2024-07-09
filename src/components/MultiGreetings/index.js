import {Component} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  ItemsList,
  ImageContainer,
  Image,
} from './styledComponents'

import Tabs from '../Tabs'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiGreetings extends Component {
  state = {
    singleObject: languageGreetingsList[0],
  }

  onClickTab = id => {
    const updatedList = languageGreetingsList.filter(each => each.id === id)
    this.setState({singleObject: updatedList[0]})
  }

  render() {
    const {singleObject} = this.state
    const {imageUrl, imageAltText} = singleObject
    return (
      <MainContainer>
        <SubContainer>
          <Heading>Multilingual Greetings</Heading>
          <ItemsList>
            {languageGreetingsList.map(each => (
              <Tabs
                key={each.id}
                listDetails={each}
                onChangeTab={this.onClickTab}
                isActive={singleObject.id === each.id}
              />
            ))}
          </ItemsList>
          <ImageContainer>
            <Image src={imageUrl} alt={imageAltText} />
          </ImageContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}
export default MultiGreetings
