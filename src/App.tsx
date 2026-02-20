import { useState, useEffect } from 'react';
import { PersonCard } from './components/PersonCard';
import { FilterBar } from './components/FilterBar';
import { Header } from './components/Header';
import { Scanlines } from './components/Scanlines';
import { Footer } from './components/Footer';

export interface Person {
  id: number;
  name: string;
  role: string;
  year: number;
  context: string;
  quote: string;
  classification: 'DECLASSIFIED' | 'PUBLIC' | 'LEAKED';
}

const alienMentioners: Person[] = [
  {
    id: 1,
    name: "David Grusch",
    role: "Former Intelligence Officer",
    year: 2023,
    context: "Congressional Testimony",
    quote: "The U.S. has been concealing a program involving the retrieval and reverse engineering of non-human origin craft.",
    classification: "DECLASSIFIED"
  },
  {
    id: 2,
    name: "Luis Elizondo",
    role: "Former Pentagon Official",
    year: 2017,
    context: "AATIP Program Director",
    quote: "These aircraft are displaying characteristics that are not currently within the US inventory nor any foreign inventory.",
    classification: "PUBLIC"
  },
  {
    id: 3,
    name: "Barack Obama",
    role: "44th U.S. President",
    year: 2021,
    context: "Late Night Interview",
    quote: "There are objects in the skies that we don't know exactly what they are.",
    classification: "PUBLIC"
  },
  {
    id: 4,
    name: "Harry Reid",
    role: "Former Senate Majority Leader",
    year: 2019,
    context: "New York Times Interview",
    quote: "I think it's extremely important that information about the discovery of physical materials comes out.",
    classification: "PUBLIC"
  },
  {
    id: 5,
    name: "Bob Lazar",
    role: "Self-Proclaimed Area 51 Physicist",
    year: 1989,
    context: "KLAS-TV Interview",
    quote: "I worked on reverse engineering extraterrestrial technology at a facility called S-4 near Area 51.",
    classification: "LEAKED"
  },
  {
    id: 6,
    name: "Paul Hellyer",
    role: "Former Canadian Defense Minister",
    year: 2013,
    context: "Citizen Hearing on Disclosure",
    quote: "At least four species of alien have been visiting Earth for thousands of years.",
    classification: "PUBLIC"
  },
  {
    id: 7,
    name: "Christopher Mellon",
    role: "Former Deputy Asst. Sec. of Defense",
    year: 2020,
    context: "Fox News Interview",
    quote: "We know UFOs exist. This is no longer an issue. The issue is why are they here?",
    classification: "PUBLIC"
  },
  {
    id: 8,
    name: "Edgar Mitchell",
    role: "Apollo 14 Astronaut",
    year: 2008,
    context: "Radio Interview",
    quote: "We have been visited on this planet and the UFO phenomenon is real.",
    classification: "PUBLIC"
  },
  {
    id: 9,
    name: "Haim Eshed",
    role: "Former Israeli Space Security Chief",
    year: 2020,
    context: "Yediot Aharonot Interview",
    quote: "There is an agreement between the U.S. government and extraterrestrials.",
    classification: "LEAKED"
  },
  {
    id: 10,
    name: "John Podesta",
    role: "White House Chief of Staff",
    year: 2015,
    context: "Twitter Post",
    quote: "My biggest failure of 2014: not securing the disclosure of the UFO files.",
    classification: "PUBLIC"
  },
  {
    id: 11,
    name: "Ryan Graves",
    role: "Former Navy Fighter Pilot",
    year: 2023,
    context: "Congressional Testimony",
    quote: "I witnessed UAPs performing maneuvers that defy our current understanding of physics.",
    classification: "DECLASSIFIED"
  },
  {
    id: 12,
    name: "Jacques Vallée",
    role: "Astrophysicist & UFO Researcher",
    year: 1990,
    context: "Book Publication",
    quote: "The phenomenon has been interacting with humans throughout history.",
    classification: "PUBLIC"
  },
  {
    id: 13,
    name: "Bill Clinton",
    role: "42nd U.S. President",
    year: 2014,
    context: "Jimmy Kimmel Live",
    quote: "I wouldn't be surprised if we were visited someday.",
    classification: "PUBLIC"
  },
  {
    id: 14,
    name: "Gordon Cooper",
    role: "Mercury & Gemini Astronaut",
    year: 1985,
    context: "UN Panel",
    quote: "I believe that extraterrestrial vehicles and their crews are visiting Earth.",
    classification: "PUBLIC"
  },
  {
    id: 15,
    name: "Marco Rubio",
    role: "U.S. Senator",
    year: 2023,
    context: "News Nation Interview",
    quote: "Whistleblowers have come forward and told us very interesting things.",
    classification: "DECLASSIFIED"
  }
];

function App() {
  const [filter, setFilter] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const filteredPeople = alienMentioners
    .filter(person => {
      const matchesFilter = filter === 'ALL' || person.classification === filter;
      const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.quote.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => sortOrder === 'newest' ? b.year - a.year : a.year - b.year);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4c5a9] relative overflow-x-hidden">
      <Scanlines />

      {/* Gradient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#39FF14] opacity-[0.03] blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#39FF14] opacity-[0.02] blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header loaded={loaded} />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 pb-8">
          <FilterBar
            filter={filter}
            setFilter={setFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            totalCount={alienMentioners.length}
            filteredCount={filteredPeople.length}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {filteredPeople.map((person, index) => (
              <PersonCard key={person.id} person={person} index={index} />
            ))}
          </div>

          {filteredPeople.length === 0 && (
            <div className="text-center py-20 opacity-60">
              <div className="text-6xl mb-4">?</div>
              <p className="font-mono text-sm">NO MATCHING RECORDS FOUND</p>
              <p className="font-mono text-xs mt-2 text-[#39FF14]">TRY ADJUSTING YOUR SEARCH PARAMETERS</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
