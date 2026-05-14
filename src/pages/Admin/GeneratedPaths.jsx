import { useEffect, useState } from "react";
import adminApi from "../../services/adminApi";
import {
  Target,
  Clock,
  Brain,
  X,
} from "lucide-react";

const GeneratedPaths = () => {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPath, setSelectedPath] =
    useState(null);

  useEffect(() => {
    fetchPaths();
  }, []);

  const fetchPaths = async () => {
    try {
      setLoading(true);

      const response = await adminApi.get(
        "/admin/all-generated-path"
      );

      setPaths(
        response.data.content || []
      );

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Loading paths...
      </div>
    );
  }

  return (
    <div className="p-4">

      <h1 className="text-3xl font-bold mb-6">
        Generated Learning Paths
      </h1>

      {paths.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          No paths found
        </div>
      ) : (
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
        >
          {paths.map((path, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedPath(path)
              }
              className="
                bg-white
                rounded-2xl
                p-5
                shadow
                hover:shadow-lg
                cursor-pointer
                transition
              "
            >
              <div className="flex justify-between mb-4">
                <Target />
                <span
                  className="
                    bg-blue-100
                    text-blue-700
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {path.skill_match_percentage}%
                </span>
              </div>

              <h2 className="font-bold text-xl">
                {path.suggested_goal}
              </h2>

              <p className="mt-2 text-sm text-gray-600">
  Created By:
  <span className="font-semibold ml-1">
    {path.user_name || "Musayyab"}
  </span>
</p>

              <p className="text-gray-500 mt-2">
                Confidence:
                {" "}
                {path.confidence_score}
              </p>

              <div className="flex items-center gap-2 mt-4">
                <Clock size={18} />

                <span>
                  {
                    path
                    .timeline_estimation
                    ?.estimated_duration_weeks
                  }
                  {" "}weeks
                </span>
              </div>

              <div className="mt-4 text-blue-600 font-semibold">
                View Details →
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Modal */}

      {selectedPath && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            flex
            justify-center
            items-center
            p-4
            z-50
          "
        >
          <div
            className="
              bg-white
              rounded-2xl
              max-w-3xl
              w-full
              max-h-[90vh]
              overflow-y-auto
              p-6
              relative
            "
          >
            <button
              onClick={() =>
                setSelectedPath(null)
              }
              className="
                absolute
                right-4
                top-4
              "
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold">
              {
                selectedPath.suggested_goal
              }
            </h2>

            <p className="mt-2 text-gray-500">
              Confidence:
              {" "}
              {
                selectedPath.confidence_score
              }
            </p>

            <div className="mt-6">

              <h3 className="font-bold mb-2">
                Career Matches
              </h3>

              {selectedPath.top_career_matches?.map(
                (career, index) => (
                  <div
                    key={index}
                    className="mb-2"
                  >
                    {career.career}
                    {" "}
                    ({career.score})
                  </div>
                )
              )}
            </div>

            <div className="mt-6">

              <h3 className="font-bold">
                Matched Skills
              </h3>

              <div className="flex flex-wrap gap-2 mt-2">
                {selectedPath.matched_skills?.map(
                  (skill,index)=>(
                    <span
                      key={index}
                      className="
                      bg-green-100
                      text-green-700
                      px-3
                      py-1
                      rounded-full
                    "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-6">

              <h3 className="font-bold">
                Missing Skills
              </h3>

              <div className="flex flex-wrap gap-2 mt-2">

                {selectedPath.missing_skills?.map(
                  (skill,index)=>(
                    <span
                      key={index}
                      className="
                      bg-red-100
                      text-red-700
                      px-3
                      py-1
                      rounded-full
                    "
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>
            </div>

            <div className="mt-6">

              <h3 className="font-bold">
                Learning Path
              </h3>

              {selectedPath.learning_path?.map(
                (phase,index)=>(
                  <div
                    key={index}
                    className="
                    bg-gray-50
                    p-4
                    rounded-lg
                    mt-3
                  "
                  >
                    <p className="font-semibold">
                      Phase {phase.phase}
                    </p>

                    <p>{phase.title}</p>

                    <ul className="list-disc ml-5 mt-2">

                      {phase.topics?.map(
                        (topic,i)=>(
                          <li key={i}>
                            {topic}
                          </li>
                        )
                      )}

                    </ul>

                  </div>
                )
              )}
            </div>

            <div className="mt-6">

              <h3 className="font-bold">
                Recommended Courses
              </h3>

              {selectedPath.recommended_courses?.map(
                (course,index)=>(
                  <div
                    key={index}
                    className="
                    border
                    p-3
                    rounded-lg
                    mt-3
                  "
                  >
                    <p className="font-semibold">
                      {course.title}
                    </p>

                    <p>
                      {course.platform}
                    </p>

                    <p>
                      Skill:
                      {" "}
                      {course.skill}
                    </p>

                  </div>
                )
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default GeneratedPaths;