import React, { useState, useRef } from 'react'

export default function EventsTab() {
    const Ref = useRef(null);
    const [event, setEvent] = useState([
        {
            event_title: "Strata",
            date: "17/05/23",
            time: "23:00:00",
            date_time: Date("Jul 25, 2021 16:37:52"),
            location: "NSUT",
            main_poster: "https://www.mokshansut.com/_next/image?url=https%3A%2F%2Fodlfyjrswlruygfdauic.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fevent-banner%2F6bcc6feb-3699-4258-8447-705164ebbfbbbanner_strata.png&w=1920&q=75",
            HTML: "#",
            event_moderators: [],
            active: true,
            registrations_open: true,
            registrations: [],
            created_by: "12345"
        },
        {
            event_title: "Strata",
            date: "17/05/23",
            time: "23:00:00",
            date_time: Date("Jul 25, 2021 16:37:52"),
            location: "NSUT",
            main_poster: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1678695284%2Fwxxyylzqnbdn2pdwream.png",
            HTML: "#",
            event_moderators: [],
            active: true,
            registrations_open: true,
            registrations: [],
            created_by: "12345"
        }
    ])
    const [Remtime, setRemTime] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setRemTime(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    return (
        <div className='flex flex-col'>
            {event.map(({ event_title, date, time, date_time, location, main_poster, HTML, event_moderators, active, registrations_open, registrations, created_by }) => {
                return (
                    <div>
                        <div className='w-[70vw]  shadow-[0_0_50px_10px_rgb(0,0,0)]  my-10 rounded-xl flex lg:flex-row flex-col-reverse justify-between object-cover'>
                            <div className='text-white py-5 pl-5 lg:!py-10 lg:!pl-10 !pr-0 lg:p-10 z-10'>
                                <h1 className='text-2xl lg:text-5xl font-bold'>{event_title}</h1>
                                <p className='text-md lg:text-xl pt-2 lg:pt-10 font-light'>Starts in</p>
                                <p className='text-slate-200 text-xl lg:text-3xl my-0 lg:my-3 font-semibold'>{Remtime}</p>
                                <div className="translate-x-[-50px] lg:translate-x-[20px] w-full items-center mt-4 lg:my-8 py-1 lg:py-5 shadow-[0_0_5px_-10px_rgb(0,0,0)] text-white bg-gray-700 bg-clip-padding rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-20 flex">
                                    <div className='flex'>
                                        <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                            <h1 className='text-xs lg:text-lg font-semibold'>Location</h1>
                                            <p className='text-xs lg:text-md'>{location}</p>
                                        </div>
                                        <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                            <h1 className='text-xs lg:text-lg font-semibold'>Date</h1>
                                            <p className='text-xs lg:text-md'>{date}</p>
                                        </div>
                                        <div className='text-center flex flex-col gap-2 px-2 lg:px-10 border-r border-slate-600'>
                                            <h1 className='text-xs lg:text-lg font-semibold'>Time</h1>
                                            <p className='text-xs lg:text-md'>{time}</p>
                                        </div>
                                        <div className=' flex flex-col gap-2 items-center px-2 lg:px-10'>
                                            <h1 className='text-xs lg:text-lg font-semibold'>Registrations</h1>
                                            <div className={(registrations_open) ? "w-2 h-2 lg:w-5 lg:h-5 rounded-full bg-red-500" : "w-2 h-2 lg:w-5 lg:h-5 rounded-full bg-red-500"}></div>
                                        </div>
                                    </div>
                                    <a href={HTML} className='bg-gradient-to-r from-blue-400 to-pink-500 rounded-full lg:px-10 px-5 lg:py-2 py-1 lg:mr-5 text-xs lg:text-lg font-normal lg:font-bold hidden lg:block'>
                                        Check
                                    </a>
                                </div>
                            </div>

                            <img className='overflow-x-hidden h-[10rem] rounded-t-xl lg:rounded-r-xl lg:w-[50rem] lg:h-[25rem] object-cover z-0' alt="Event Poster" src={main_poster} />

                        </div>

                    </div>
                )
            })}
        </div>
    )
}