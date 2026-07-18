import React, { useState } from 'react';

// Types & Interfaces
interface DateOption {
  day: string;
  date: number;
  monthStr?: string; // For tracking unique dates if needed
}

interface TimeSlot {
  id: string;
  time: string;
  type: 'GROUP' | 'PRIVATE' | 'LADIES';
  className: string;
  instructor: string;
  spotsLeft: number; // 0 means Fully Booked
}

const BookingWidget: React.FC = () => {
  // Mock Data matching the screenshot perfectly
  const dates: DateOption[] = [
    { day: 'SAT', date: 27 },
    { day: 'SUN', date: 28 },
    { day: 'MON', date: 29 },
    { day: 'TUE', date: 30 },
    { day: 'WED', date: 1 },
    { day: 'THU', date: 2 },
    { day: 'FRI', date: 3 },
  ];

  const filters = ['All', 'Group', 'Private', 'Ladies'];

  const initialSlots: TimeSlot[] = [
    { id: '1', time: '7:00 AM', type: 'GROUP', className: 'Mat Strength', instructor: 'Imran Kabir', spotsLeft: 4 },
    { id: '2', time: '8:00 AM', type: 'GROUP', className: 'Beginner Reformer', instructor: 'Nadia Rahman', spotsLeft: 1 },
    { id: '3', time: '10:00 AM', type: 'LADIES', className: 'Ladies Reformer', instructor: 'Maliha Chowdhury', spotsLeft: 3 },
    { id: '4', time: '12:00 PM', type: 'PRIVATE', className: 'Private Session', instructor: 'Farhan Ahmed', spotsLeft: 1 },
    { id: '5', time: '4:00 PM', type: 'GROUP', className: 'Intermediate Mat', instructor: 'Imran Kabir', spotsLeft: 0 },
    { id: '6', time: '5:00 PM', type: 'LADIES', className: 'Ladies Reformer', instructor: 'Maliha Chowdhury', spotsLeft: 2 },
    { id: '7', time: '6:00 PM', type: 'GROUP', className: 'Reformer Flow', instructor: 'Nadia Rahman', spotsLeft: 3 },
    { id: '8', time: '8:00 PM', type: 'PRIVATE', className: 'Private Session', instructor: 'Farhan Ahmed', spotsLeft: 1 },
  ];

  // State Management
  const [selectedDate, setSelectedDate] = useState<number>(27);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Filter logic
  const filteredSlots = initialSlots.filter((slot) => {
    if (activeFilter === 'All') return true;
    return slot.type.toLowerCase() === activeFilter.toLowerCase();
  });

  const handleBookSlot = (slotId: string) => {
    console.log(`Booking submitted for slot ID: ${slotId}`);
    // Add checkout/booking submission handler here
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 font-sans antialiased text-[#1C1A17]">
      {/* Page Title Headers */}
      <span className="text-xs font-bold tracking-[0.12em] text-[#B35C38] uppercase block mb-2">
        Book A Class
      </span>
      <h1 
        style={{ fontFamily: "'Fraunces', serif" }} 
        className="text-4xl md:text-5xl text-[#1C1A17] font-semibold tracking-tight mb-8 leading-tight"
      >
        Pick your day, choose your slot,<br />book instantly
      </h1>

      {/* Main Booking Container (.bbook) */}
      <div className="bg-[#FAF7F0] border-[1.5px] border-[#E4DDD3] rounded-[10px] overflow-hidden shadow-sm">
        
        {/* Header Section (.bbook-hd) */}
        <div className="p-4 sm:px-5 bg-[#F0EAE1] border-b border-[#E4DDD3] flex flex-wrap gap-10px items-center justify-between">
          
          {/* Day Strip Slider (.day-strip) */}
          <div className="flex gap-6px overflow-x-auto scrollbar-hide touch-pan-x pb-0.5">
            {dates.map((d) => {
              const isActive = selectedDate === d.date;
              return (
                <button
                  key={`${d.day}-${d.date}`}
                  onClick={() => setSelectedDate(d.date)}
                  className={`shrink-0 min-w-12.5 text-center py-2 px-1.5  rounded-e-md border-[1.5px] transition-colors cursor-pointer 
                    ${isActive 
                      ? 'bg-[#3D4A3E] text-white border-[#3D4A3E]' 
                      : 'bg-[#FAF7F0] border-[#E4DDD3] hover:bg-[#F0EAE1]'
                    }`}
                >
                  <span className={`block text-[9.5px] uppercase font-bold tracking-wider ${isActive ? 'text-[#C8D8C4]' : 'text-[#7A786E]'}`}>
                    {d.day}
                  </span>
                  <b style={{ fontFamily: "'Fraunces', serif" }} className="text-16 block text-lg font-medium mt-0.5">
                    {d.date}
                  </b>
                </button>
              );
            })}
          </div>

          {/* Gender Indicator Key */}
          <div className="text-xs text-[#7A786E] flex items-center gap-1 font-medium">
            <span>♀</span> = Ladies only
          </div>
        </div>

        {/* Filter Bar (.fbar) */}
        <div className="flex gap-1.75 px-5 pt-3 overflow-x-auto scrollbar-none touch-pan-x">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 text-xs py-1.5 px-3.25 rounded-[30px] border-[1.5px] font-medium transition-all whitespace-nowrap cursor-pointer
                  ${isActive 
                    ? 'bg-[#1C1A17] text-white border-[#1C1A17]' 
                    : 'bg-[#FAF7F0] border-[#E4DDD3] hover:border-[#1C1A17]'
                  }`}
              >
                {filter === 'Ladies' ? 'Ladies ♀' : filter}
              </button>
            );
          })}
        </div>

        {/* Slots Grid (.slot-grid) */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {filteredSlots.map((slot) => {
            const isFullyBooked = slot.spotsLeft === 0;
            const isLowAvailability = slot.spotsLeft === 1;

            return (
              <div 
                key={slot.id} 
                className={`border-[1.5px] border-[#E4DDD3] rounded-[7px] p-3.25 flex flex-direction flex-col gap-1.5 transition-all
                  ${isFullyBooked ? 'bg-[#FAF7F0]/60 opacity-90' : 'bg-[#FAF7F0]'}`}
              >
                {/* Top Row: Time & Type */}
                <div className="flex justify-between items-baseline">
                  <span 
                    style={{ fontFamily: "'Fraunces', serif" }} 
                    className="text-[17px] font-medium text-[#1C1A17]"
                  >
                    {slot.time}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.06em] text-[#B35C38]">
                    {slot.type}
                  </span>
                </div>

                {/* Meta Details: Class & Instructor */}
                <div className="text-xs text-[#4A4840]">
                  <span className="font-semibold text-[#1C1A17]">{slot.className}</span>
                  <span className="text-[#9A968A]"> · </span>
                  <span className="text-[#7A786E]">{slot.instructor}</span>
                </div>

                {/* Spot Counter Layout */}
                <div className="mt-1">
                  {isFullyBooked ? (
                    <span className="text-[11.5px] font-bold text-[#9A968A]">Fully Booked</span>
                  ) : (
                    <span className={`text-[11.5px] font-bold ${isLowAvailability ? 'text-[#B35C38]' : 'text-[#3D4A3E]'}`}>
                      {slot.spotsLeft} {slot.spotsLeft === 1 ? 'Spot' : 'Spots'} Left
                    </span>
                  )}
                </div>

                {/* Interactive Booking Button */}
                <button
                  disabled={isFullyBooked}
                  onClick={() => handleBookSlot(slot.id)}
                  className={`w-full py-2 px-4 rounded-sm text-xs font-bold mt-0.5 transition-all duration-150 cursor-pointer
                    ${isFullyBooked 
                      ? 'bg-[#DCD7CB] text-[#7A786E] cursor-not-allowed' 
                      : 'bg-[#3D4A3E] text-white hover:bg-[#1C1A17]'
                    }`}
                >
                  {isFullyBooked ? 'Fully Booked' : 'Book This Slot'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
