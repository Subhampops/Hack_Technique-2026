import React from 'react';
import { Clock, CalendarDays, Timer } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineWithBackground = () => {
  const timelineData = [
    {
      date: "Tuesday, Jan 6",
      time: "9:00 AM - 10:00 AM",
      title: "Check-in Starts",
    },
    {
      date: "Tuesday, Jan 6",
      time: "10:20 AM",
      title: "Hackathon Starts",
      
    },
    {
      date: "Tuesday, Jan 6",
      time: "12:00 - 1:00 PM",
      title: "Mentoring Round",
    
    },
    {
      date: "Tuesday, Jan 6",
      time: "1:00 - 1:40 PM",
      title: "Lunch Time",
      
    },
    {
      date: "Tuesday, Jan 6",
      time: "4:00 - 5:00 PM",
      title: "Judging Round",
      
    },
    {
      date: "Tuesday, Jan 6",
      time: "5:00 - 6:00 PM",
      title: "Hackathon Ends",
      
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-red-900/50">
      {/* Gradient Orbs for background effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl translate-x-1/2"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          {/* Header section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl text-white mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Event Timeline
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A detailed schedule of our event, ensuring you don't miss a moment of the action.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-red-500/20 via-orange-500/50 to-transparent transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Circle indicator */}
      <div className="absolute left-1/2 w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
      
      {/* Card */}
      <motion.div
        className={`w-full md:w-96 p-6 rounded-2xl backdrop-blur-lg bg-black/20 border border-white/5 shadow-lg transition-all duration-300 hover:bg-white/5 ${
          index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
        }`}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 69, 0, 0.5)" }}
      >
        <div className="flex items-center gap-3 text-gray-300 mb-4">
          <CalendarDays className="w-5 h-5 text-orange-500" />
          <span className="text-base">{item.date}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300 mb-6">
          <Clock className="w-5 h-5 text-orange-500" />
          <span className="text-base">Starts from {item.time}</span>
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-orange-500 transition-colors">
          {item.title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default TimelineWithBackground;