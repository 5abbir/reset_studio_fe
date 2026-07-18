import { useState, useEffect } from 'react';

interface Instructor {
  id: number;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  imageUrl: string;
}

const defaultInstructors: Instructor[] = [
  {
    id: 1,
    name: 'Nadia Rahman',
    role: 'LEAD INSTRUCTOR',
    bio: 'Certified Reformer & Mat Instructor, 7 years coaching beginner-to-intermediate.',
    tags: ['Reformer', 'Mat', 'Beginner'],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Farhan Ahmed',
    role: 'PRIVATE SESSIONS',
    bio: 'Specialises in post-injury rehab and one-to-one strength programming.',
    tags: ['Private', 'Rehab'],
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Maliha Chowdhury',
    role: 'GROUP & LADIES',
    bio: 'Leads ladies-only sessions focused on posture and flexibility.',
    tags: ['Ladies', 'Posture', 'Flexibility'],
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Imran Kabir',
    role: 'TOWER & MAT',
    bio: 'Sports physiotherapy background; coaches intermediate strength tracks.',
    tags: ['Mat', 'Tower', 'Intermediate'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
  }
];

export default function InstructorsSection() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem('instructors');
    if (localData) {
      try {
        setInstructors(JSON.parse(localData));
      } catch (e) {
        setInstructors(defaultInstructors);
      }
    } else {
      setInstructors(defaultInstructors);
      localStorage.setItem('instructors', JSON.stringify(defaultInstructors));
    }
  }, []);

  return (
    <section id="instructors" className="bg-[#FAF9F6] py-16 md:py-24 text-[#26201A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <p className="text-xs font-bold tracking-wider uppercase text-[#C56E4E]">
            Instructors
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 text-[#26201A]">
            Trained eyes, every session
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id} 
              className="bg-white/50 rounded-2xl border border-stone-200/80 p-5 flex flex-col h-full shadow-sm"
            >
              <div className="overflow-hidden rounded-xl aspect-[1.2/1] bg-[#EAE7E2] mb-6">
                <img
                  src={instructor.imageUrl}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col grow">
                <h3 className="text-lg font-bold font-serif text-[#26201A] order-1">
                  {instructor.name}
                </h3>
                <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500 mb-1 order-2">
                  {instructor.role}
                </span>
                <p className="text-stone-600 text-xs leading-relaxed mt-2 mb-6 grow order-3">
                  {instructor.bio}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto order-4">
                  {instructor.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-[#EAE7E2]/50 text-stone-600 border border-stone-200/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}