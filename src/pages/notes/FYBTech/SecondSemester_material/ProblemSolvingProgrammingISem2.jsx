import React, { useState, useEffect } from 'react';

const DownloadNotesSection = () => {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [timer, setTimer] = useState(600); // 10 minutes
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const notesCategories = [
    {
      id: 1,
      title: 'unit 1',
      thumbnailSrc: '/image/c_logo.png',
      downloadLink: 'notes/c.pdf',
    },
    {
      id: 2,
      title: 'unit 2',
      thumbnailSrc: '/images/c_logo.png',
      downloadLink: '/notes/c.pdf',
    },
    {
      id: 3,
      title: 'unit 3',
      thumbnailSrc: '/images/java_logo.png',
      downloadLink: '/notes/java.pdf',
    },
  ];

  const mockQuestions = {
    'unit 1': [
      { question: "What is the definition of 'state' in programming?", options: ["A variable", "A function", "An object", "A class"], answer: "A variable" },
      { question: "What is the primary function of a constructor in a class?", options: ["Initialize objects", "Define the class", "Call functions", "Destroy objects"], answer: "Initialize objects" }
    ],
    'unit 2': [
      { question: "Which of the following is used to allocate memory dynamically in C?", options: ["malloc()", "new()", "alloc()", "allocate()"], answer: "malloc()" },
      { question: "What is the size of an int in C?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], answer: "4 bytes" }
    ],
    'unit 3': [
      { question: "Which keyword is used to create a class in Java?", options: ["class", "def", "function", "create"], answer: "class" },
      { question: "Which method is the entry point for any Java program?", options: ["main()", "start()", "run()", "execute()"], answer: "main()" }
    ]
  };

  const fileItems = [
    { id: 1, name: "Lecture Notes.pdf", type: "pdf", link: "https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view" },
    { id: 2, name: "Graph Image.png", type: "image", link: "https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view" },
    { id: 3, name: "Presentation.pptx", type: "ppt", link: "/notes/presentation.pptx" },
    { id: 4, name: "Chapter Summary.docx", type: "doc", link: "/notes/summary.docx" },
  ];

  const resetTest = () => {
    setSelectedCategory(null);
    setUserAnswers({});
    setTimer(600);
    setShowResult(false);
    setScore(0);
  };

  const handleAnswer = (questionIndex, option) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const submitTest = () => {
    const questions = mockQuestions[selectedCategory?.title] || [];
    const correctAnswers = questions.reduce((acc, curr, idx) => {
      return acc + (userAnswers[idx] === curr.answer ? 1 : 0);
    }, 0);
    setScore(correctAnswers);
    setShowResult(true);
  };

  const openTestModal = (category) => {
    setSelectedCategory(category);
    setIsTestOpen(true);
    setTimer(120);
    setUserAnswers({});
    setShowResult(false);
  };

  const closeTestModal = () => {
    setIsTestOpen(false);
    resetTest();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const openPdfModal = (url) => {
    const isDriveLink = url.includes('drive.google.com');
    const formattedUrl = isDriveLink ? url.replace('/view', '/preview') : url;
    setPdfUrl(formattedUrl);
    setIsPdfOpen(true);
  };

  const closePdfModal = () => {
    setPdfUrl('');
    setIsPdfOpen(false);
  };

  useEffect(() => {
    if (isTestOpen && timer > 0 && !showResult) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !showResult) {
      submitTest();
    }
  }, [isTestOpen, timer, showResult]);

  return (
    <div className="bg-white py-12">
      {/* Notes Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Semester-II</h2>
        <h3 className="text-xl text-gray-700">Problem Solving ProgrammingI Sem-II</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {notesCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="w-80 h-44 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden rounded-md">
                <img src={category.thumbnailSrc} alt={`${category.title} Thumbnail`} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600 mb-4">View Notes</p>
              <div className="flex space-x-2">
                <button onClick={() => openPdfModal(category.downloadLink)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
                  View PDF
                </button>
                <button onClick={() => openTestModal(category)} className="bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md text-sm">
                  Test MCQ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* File Explorer Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">📂 Study Notes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {fileItems.map((file) => (
            <div key={file.id} className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all">
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                {file.type === "pdf" && <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" className="w-full h-full object-contain" />}
                {file.type === "image" && <img src={file.link} alt="Image" className="w-full h-full object-cover rounded-md" />}
                {file.type === "ppt" && <img src="https://cdn-icons-png.flaticon.com/512/337/337949.png" alt="PPT" className="w-full h-full object-contain" />}
                {file.type === "doc" && <img src="https://cdn-icons-png.flaticon.com/512/888/888853.png" alt="DOC" className="w-full h-full object-contain" />}
              </div>
              <p className="text-sm font-semibold text-gray-700 text-center mb-2">{file.name}</p>
              <a href={file.link} className="bg-blue-500 hover:bg-blue-600 text-white text-xs py-1 px-3 rounded-md">
             Open
              </a>

            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {isPdfOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-4xl h-[90%] rounded-lg overflow-hidden relative">
            <button onClick={closePdfModal} className="absolute top-3 right-3 text-gray-700 hover:text-black text-4xl font-bold">
              &times;
            </button>
            <iframe src={pdfUrl} title="PDF Viewer" className="w-full h-full" />
          </div>
        </div>
      )}

      {/* Test Modal */}
      {isTestOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50 p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl mx-auto rounded-lg p-6 relative overflow-y-auto">
            {!showResult ? (
              <>
                <div className="flex justify-between mb-4">
                  <h2 className="text-2xl font-bold">{selectedCategory?.title} - Mock Test</h2>
                  <div className="text-xl font-semibold text-red-600">⏳ {formatTime(timer)}</div>
                </div>
                {(mockQuestions[selectedCategory?.title] || []).map((q, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{index + 1}. {q.question}</h3>
                    <div className="flex flex-col space-y-3">
                      {q.options.map((option, idx) => (
                        <label key={idx} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name={`question_${index}`}
                            value={option}
                            checked={userAnswers[index] === option}
                            onChange={() => handleAnswer(index, option)}
                            className="form-radio text-blue-600"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between mt-8">
                  <button onClick={submitTest} className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md">
                    Submit
                  </button>
                  <button onClick={closeTestModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-md">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Result</h2>
                <p className="text-xl text-gray-700 mb-4">Your Score: {score}/{(mockQuestions[selectedCategory?.title] || []).length}</p>
                <button onClick={closeTestModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadNotesSection;
