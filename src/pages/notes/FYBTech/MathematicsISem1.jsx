import React, { useState, useEffect } from 'react';

const DownloadNotesSection = () => {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [timer, setTimer] = useState(600); // 10 minutes = 600 seconds
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const notesCategories = [
    {
      id: 1,
      title: 'unit 1',
      thumbnailSrc: 'https://publish.illinois.edu/alexmche12/files/2018/12/728a00895473886390bd5d9b02de7219.jpeg',
      downloadLink: 'https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view?usp=drive_link',
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
    'C Notes': [
      { question: "Which of the following is used to allocate memory dynamically in C?", options: ["malloc()", "new()", "alloc()", "allocate()"], answer: "malloc()" },
      { question: "What is the size of an int in C?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], answer: "4 bytes" }
    ],
    'Java Notes': [
      { question: "Which keyword is used to create a class in Java?", options: ["class", "def", "function", "create"], answer: "class" },
      { question: "Which method is the entry point for any Java program?", options: ["main()", "start()", "run()", "execute()"], answer: "main()" }
    ]
  };

  const openTestModal = (category) => {
    setSelectedCategory(category);
    setIsTestOpen(true);
    setTimer(600); // Reset timer
    setUserAnswers({});
    setShowResult(false);
  };

  const closeTestModal = () => {
    setIsTestOpen(false);
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
    let correct = 0;
    const questions = mockQuestions[selectedCategory?.title] || [];
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResult(true);
  };

  useEffect(() => {
    if (isTestOpen && timer > 0 && !showResult) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0 && !showResult) {
      submitTest(); // Auto-submit when timer finishes
    }
  }, [isTestOpen, timer, showResult]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Download Notes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-6 px-4 sm:px-0">
          {notesCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 flex flex-col items-center">
                <div className="w-80 h-44 rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={category.thumbnailSrc}
                    alt={`${category.title} Thumbnail`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-4">View Notes</p>
                <div className="flex space-x-2">
                  <a
                    href={category.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm"
                  >
                    View PDF
                  </a>
                  <button
                    onClick={() => openTestModal(category)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md text-sm"
                  >
                    Test MCQ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Screen Test Modal */}
        {isTestOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50 p-4 overflow-y-auto">
            <div className="bg-white w-full max-w-4xl mx-auto rounded-lg overflow-y-auto p-6 relative">
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
                    <button
                      onClick={closeTestModal}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md"
                    >
                      Close
                    </button>
                    <button
                      onClick={submitTest}
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md"
                    >
                      Submit Test
                    </button>
                  </div>
                </>
              ) : (
                // Result Page
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-8">Test Result</h2>
                  <p className="text-3xl mb-4">
                    Score: {score}/{(mockQuestions[selectedCategory?.title] || []).length}
                  </p>
                  <button
                    onClick={closeTestModal}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadNotesSection;
