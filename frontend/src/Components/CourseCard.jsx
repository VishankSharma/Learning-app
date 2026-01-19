const CourseCard = ({ course,onClick }) => {
  return (
    <div onClick={onClick} className="bg-gradient-to-br from-[#0f172a] to-[#020617] 
      border border-slate-700 rounded-xl overflow-hidden
      hover:scale-[1.02] transition duration-300 shadow-lg">

      <img
        src={course.thumbnail.secure_url}
        alt={course.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-white line-clamp-1">
          {course.title}
        </h2>

        <p className="text-sm text-gray-400 line-clamp-1">
          {course.description}
        </p>

        <div className="flex justify-between text-sm text-gray-300">
          <span>📚 {course.numberOfLectures} Lectures</span>
          <span>🎯 {course.category}</span>
        </div>

        <div className="flex justify-between items-center pt-3">
          <span className="text-yellow-400 font-semibold text-lg">
            {course.createdBy}
          </span>

          <button className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-black">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
