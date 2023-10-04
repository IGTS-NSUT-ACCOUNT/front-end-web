import React from 'react';
import Related from '../article/related/Related';
import Carousel from "react-elastic-carousel";
import "./rec-styles.css"
import { useRef,useState } from 'react';
import { carousel } from '@material-tailwind/react';

const ElastiCarousel = ({subtopics})=> {
    const [num,setNum] = useState(window.innerWidth >=1024 ? 2 : 1);
    const carouselRef = useRef(null);
    let resetTimeout;
    window.addEventListener("resize", function(event) {
        setNum(window.innerWidth >=1024 ? 2 : 1);
    })

    return (
        <Carousel 
            itemsToShow={num} 
            className='w-full' 
            enableAutoPlay 
            autoPlaySpeed={3500}
            ref={carouselRef}
            onNextEnd={({ index }) => {
                clearTimeout(resetTimeout)
                if (document.getElementsByClassName("rec-arrow")[1].disabled) {
                   resetTimeout = setTimeout(() => {
                      carouselRef.current.goTo(0)
                  }, 3500) // same time
                }
           }}
           
        >
            {subtopics?.map(el => {
                const subtopicName = el.name.replaceAll(" ", "-");
                return (
                        <div className='flex justify-center h-full w-full'>
                            <a
                                href={"/blogs/subtopic/" + el.subtopic_id + "/" + subtopicName}    
                            >
                            <Related name={subtopicName} content={"Some content about gt"} date = {'Today'} likes={"10k"} comments={"100"}/>
                            </a>
                        </div>
                );
            })}  
        
        </Carousel>
        
    );
  }

export default ElastiCarousel;