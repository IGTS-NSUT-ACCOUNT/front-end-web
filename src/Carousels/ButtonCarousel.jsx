import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Related from '../article/related/Related';
import { useState } from 'react';
const ButtonCarousel = ({subtopics})=> {
    let index = -1;
    
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={70}
        totalSlides={6}
        isPlaying={true}
        isIntrinsicHeight={true}
        interval={3000}
        infinite={true}
        playDirection={'backward'}
        className='w-full h-auto'
      >
        <Slider className='max-lg:hidden w-full'>
            {subtopics?.map(el => {
                const subtopicName = el.name.replaceAll(" ", "-");
                ++index;
                return (
                  
                    <Slide index={index} className='w-full'>
                        <a
                            href={"/blogs/subtopic/" + el.subtopic_id + "/" + subtopicName}    
                        >
                            <div className='flex justify-center h-full w-full'>
                                <Related name={subtopicName} content={"Some content about gt"} date = {'Today'} likes={"10k"} comments={"100"}/>
                            </div>
                        </a>
                    </Slide>
                  
                );
            })}  
        </Slider>
        
        {/* <Slider className='max-lg:hidden'>
          <Slide index={0}>
            <div className='flex justify-center h-full'>
                <Related/>
                <Related/>
            </div>
          </Slide>
          <Slide index={1}>
            <div className='flex justify-center h-full'>
                    <Related/>
                    <Related/>
            </div>
          </Slide>
          <Slide index={2}>
            <div className='flex justify-center h-full'>
                    <Related/>
                    <Related/>
            </div>
          </Slide>
        </Slider> */}
        <Slider className='lg:hidden'>
          <Slide index={0}>
            <div className='flex justify-center h-full'>
                <Related/>
                
            </div>
          </Slide>
          <Slide index={1}>
            <div className='flex justify-center h-full'>
                    <Related/>
            </div>
          </Slide>
          <Slide index={2}>
            <div className='flex justify-center h-full'>
                    <Related/>
            </div>
          </Slide>
        </Slider>
        <div className='flex justify-center gap-x-5 text-xl text-white'>
            <ButtonBack className='hover:bg-white/20 px-5 py-2 rounded-full'>Back</ButtonBack>
            <ButtonNext className='hover:bg-white/20 px-5 py-2 rounded-full'>Next</ButtonNext>
        </div>
      </CarouselProvider>
    );
  }

export default ButtonCarousel;