import React, { useState } from 'react';
import { Login , LoginNav , Logo ,SignInButton , LogoImage ,  Container , Button ,Layout ,
    Content,
    Title,Description,FormContent, Form , FormTitle ,FormInput ,Br , FormButton 
    , CardDetails ,  CardTitle ,Image ,cardTitle
    ,Card4 , CardImages , CardDesc , Container4 ,CardContainer , CardRow , CardDescription,
    CardVideo , VideoImage , Video , Mp4Video, CardContent , Card2Content , Video2 ,Mp4Video2,
    QuestionsTitle , Questions , AskQustions , AskTitle, AskIcon ,Answer , AnswerQuestion , ContentForm , CardRow2

} from './LoginStyle.js';
import data from '../../Qusetions';
import SignInScreen from '../../Components/SignInScreen/SignInScreen.js';

const LoginPage = ()=>{
    const [selected , setSlected]=useState(null)
    const toggle = (index)=>{

        if ( selected === index){
            return setSlected(null)
        }else{
            setSlected(index)
        }
    }

    const [signIn , setSignIn]=useState(false);

    return(
        <Login>
            <LoginNav>
                <Layout></Layout>
        
                <Container>
                <Logo>
                    <LogoImage src ="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></LogoImage>
                </Logo>
                <SignInButton>
                    {!signIn? (<Button onClick={()=> setSignIn(true)}>Sign In</Button>) : (<SignInButton/>)}
                    
                </SignInButton>
                
                </Container>

                {signIn ? (<SignInScreen/>):(
                    <>
                    <Content>
                    <Title>Unlimited movies, TV<Br/> shows, and more.</Title>
                    <Description>Watch anywhere. Cancel anytime.</Description>
                </Content>
                <FormContent>
                    <Form  onSubmit={()=> setSignIn(true)}>
                        <FormTitle>Ready to watch? Enter your email to create or restart your membership.</FormTitle>
                        <FormInput placeholder="Email address" type="email"onSubmitEditing={()=> setSignIn(true)}  required ></FormInput>
                        <FormButton  >Get Started</FormButton>
                    </Form>
                    
                    
                </FormContent>
                </>
                )}
            
            
                


            </LoginNav>

        {!signIn ?  (
            <>
        <CardContent>
            <CardContainer>
            <CardRow>
                <CardDescription>
                    <CardTitle>Enjoy on your TV.</CardTitle>
                <CardDetails>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</CardDetails>
                </CardDescription>
                <CardVideo>
                <VideoImage src ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></VideoImage>
                <Video>
                <Mp4Video autoPlay playsInline muted loop > <source src = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"></source></Mp4Video>
                </Video>
                </CardVideo>
                </CardRow>
            </CardContainer>
            </CardContent>


                <Card2Content>
                    <CardContainer>
                    <CardRow2>
        
                    <CardVideo>
            <VideoImage src ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></VideoImage>
        
                    </CardVideo>
                    <CardDescription>
            <CardTitle>Download your shows to watch offline.</CardTitle>
            <CardDetails>Save your favorites easily and always have something to watch.</CardDetails>
                </CardDescription>
                </CardRow2>
                    </CardContainer>
                        </Card2Content>

<Card2Content>
<CardContainer>
    <CardRow>
    <CardDescription>
            <CardTitle>Watch everywhere.</CardTitle>
            <CardDetails>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</CardDetails>
        </CardDescription>
        
        <CardVideo>
            <VideoImage src ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"></VideoImage>
            <Video2>
            <Mp4Video2 autoPlay playsInline muted loop > <source src = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            type="video/mp4"></source></Mp4Video2>
            </Video2>
        </CardVideo>
        
    </CardRow>
</CardContainer>
</Card2Content>
    
    <Card2Content>
    <Container4>
    <Card4 >
        
        <CardImages>
            <Image src="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"></Image>
        </CardImages>
    
        <CardDesc>
        <CardTitle>Create profiles for kids.</CardTitle>
        <CardDetails>
        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.

            </CardDetails>
        
        

        </CardDesc>
        
    </Card4>
    </Container4>
    </Card2Content>

    <Card2Content>
        <QuestionsTitle>Frequently Asked Questions</QuestionsTitle>
    
        
            
            {data.map ((x, index)=>(
                
                <Questions>
                <AskQustions onClick={()=> toggle(index)} >
                <AskTitle>{x.question}</AskTitle>
            <AskIcon >{selected === index? "x" :"+"}</AskIcon>
            </AskQustions>
            
            <Answer selected = {selected} index ={index} className= { selected === index? "answer-show" : "answer-hidden"}>
                <AnswerQuestion >{x.answer}</AnswerQuestion>
            </Answer>
        </Questions>
        

            ))
            }
            {
                !signIn? (

                    <ContentForm>
                    <FormContent>
                    <Form  onSubmit={()=> setSignIn(true)}>
                        <FormTitle>Ready to watch? Enter your email to create or restart your membership.</FormTitle>
                        <FormInput placeholder="Email address" type="email"onSubmitEditing={()=> setSignIn(true)}  required ></FormInput>
                        <FormButton  >Get Started</FormButton>
                    </Form>
                    
                    
                </FormContent>
                </ContentForm> 

                ) : (<SignInScreen/>)
            }
        
        

    </Card2Content>
    </>

        ) :(<CardContent/>)
        
        }
        
            
            
        
        </Login>
    
    )
}

export default LoginPage;