import { useNavigate } from "react-router-dom";

const RoadmapPreview = ({ roadmap = [] }) => {
  const navigate = useNavigate();

  const handleCreatePath = () => {
    navigate("/generatePath");
  };

  return (
    <section  id="roadmap-preview" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="px-4 py-1 text-sm bg-purple-100 text-purple-700 rounded-full font-medium">
            AI Career Intelligence
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold">
            Your Personalized Career Roadmap
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Structured learning path generated using AI to guide your career journey.
          </p>
        </div>

        {roadmap.length === 0 ? (
          /* -------- FANCY EMPTY STATE -------- */
          <div className="relative bg-white/70 backdrop-blur-md 
                          border border-purple-100 
                          rounded-2xl p-12 text-center shadow-lg">

            <div className="mb-6 text-5xl">🧠</div>

            <h3 className="text-xl font-semibold mb-3">
              No Career Path Yet
            </h3>

            <p className="text-gray-600 mb-8">
              Generate your AI-powered roadmap and start building your future today.
            </p>

            <button
              onClick={handleCreatePath}
              className="px-8 py-3 bg-gradient-to-r 
                         from-purple-600 to-indigo-600 
                         text-white rounded-xl 
                         shadow-md hover:scale-105 
                         hover:shadow-xl transition-all duration-300"
            >
              Generate Career Path
            </button>
          </div>
        ) : (
          /* -------- FANCY ROADMAP TIMELINE -------- */
          <div className="relative border-l-4 border-purple-200 pl-8 space-y-10">
            {roadmap.map((step, index) => (
              <div key={index} className="relative">

                {/* Timeline Dot */}
                <div className="absolute -left-11 top-1 w-8 h-8 
                                bg-gradient-to-r from-purple-600 to-indigo-600 
                                text-white flex items-center justify-center 
                                rounded-full shadow-md">
                  {index + 1}
                </div>

                {/* Step Card */}
                <div className="bg-white p-6 rounded-xl shadow-md 
                                hover:shadow-xl hover:-translate-y-1 
                                transition-all duration-300">
                  <p className="text-lg font-medium">{step}</p>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default RoadmapPreview;
