import React, { useState, useEffect } from 'react';

// Reusable FileCard component
const FileCard = ({ file, openPdfModal }) => {
  const getFileIcon = (type) => {
    const icons = {
      pdf: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      image: 'https://tse1.mm.bing.net/th/id/OIP.a9RaVvLglrHkAtqRTwue3QHaHa?rs=1&pid=ImgDetMain',
      ppt: 'https://th.bing.com/th/id/OIP.Ctd_cSe_7xpi6CmBu9E5zwHaHa?rs=1&pid=ImgDetMain',
      doc: 'https://play-lh.googleusercontent.com/l-JVRfLKIS3VhM-iJ_4W_-kzCdd2uwTWr5eNtBiejB5yZNPqdUWxgzcwwqAAeAtxCuo',
    };
    return icons[type] || '';
  };

  return (
    <div key={file.id} className="flex flex-col items-center bg-white shadow-md rounded-lg p-2 hover:shadow-xl transition-all">
      <div className="w-20 h-20 flex items-center justify-center mb-3">
        <img src={getFileIcon(file.type)} alt={file.type} className="w-full h-full object-contain" />
      </div>
      <p className="text-sm font-semibold text-gray-700 text-center mb-2">{file.name}</p>
      <button
        onClick={() => openPdfModal(file.link)}
        className="bg-blue-500 hover:bg-green-600 text-white text-xs py-1 px-3 rounded-md"
      >
        Open
      </button>
    </div>
  );
};

const DownloadNotesSection = () => {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [timer, setTimer] = useState(600); // 10 minutes
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const notesCategories = [
    {
      id: 1,
      title: 'Unit 1',
      thumbnailSrc: 'https://i.ibb.co/q3YTmXCh/quest-on-paper.png',
      downloadLink: 'https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view',
      year: ' 🔴 2023-24',
      questions: [
        { question: "What is the definition of 'state' in programming?", options: ["A variable", "A function", "An object", "A class"], correctAnswer: "A variable" },
        { question: "What is the primary function of a constructor in a class?", options: ["Initialize objects", "Define the class", "Call functions", "Destroy objects"], correctAnswer: "Initialize objects" },
        { question: "Which of the following is NOT a primitive data type in JavaScript?", options: ["string", "number", "boolean", "object"], correctAnswer: "object" },
      ],
    },
    {
      id: 2,
      title: 'Unit 2',
      thumbnailSrc: 'https://i.ibb.co/q3YTmXCh/quest-on-paper.png',
      downloadLink: '/notes/c.pdf',
      year: ' 🔴 2024-25',
      questions: [
        { question: "Which of the following is used to allocate memory dynamically in C?", options: ["malloc()", "new()", "alloc()", "allocate()"], correctAnswer: "malloc()" },
        { question: "What is the size of an int in C (typically)?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], correctAnswer: "4 bytes" },
        { question: "What does the acronym 'CPU' stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Core Processing Unit", "Command Processing Unit"], correctAnswer: "Central Processing Unit" },
      ],
    },
  
  ];

  const fileItems = [
    { id: 1, name: "Lecture Notes.pdf", type: "pdf", link: "https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view" },
    { id: 2, name: "Graph Image.png", type: "image", link: "https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view" },
    { id: 3, name: "Presentation.pptx", type: "ppt", link: "/notes/presentation.pptx" },
    { id: 4, name: "Chapter Summary.docx", type: "doc", link: "/notes/summary.docx" },
  ];

  const resetTest = () => {
    setSelectedCategory(null);
    setUserAnswers({});
    setTimer(120); // Reset timer to initial test duration
    setShowResult(false);
    setScore(0);
    setCurrentQuestionIndex(0); // Reset question index
  };

  const handleAnswer = (questionIndex, option) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const submitTest = () => {
    const questions = selectedCategory?.questions || [];
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTestModal = (category) => {
    setSelectedCategory(category);
    setIsTestOpen(true);
    setTimer(120);
    setUserAnswers({});
    setShowResult(false);
    setCurrentQuestionIndex(0); // Start from the first question
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

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNextQuestion = () => {
    if (selectedCategory?.questions && currentQuestionIndex < selectedCategory.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (isTestOpen && timer > 0 && !showResult) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !showResult && isTestOpen) {
      submitTest();
    }
  }, [isTestOpen, timer, showResult]);

  const currentQuestion = selectedCategory?.questions?.[currentQuestionIndex];
  const totalQuestions = selectedCategory?.questions?.length || 0;

  return (
    <div className="bg-gradient-to-r from-white  via-gray-300 animate-gradient bg-cover py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Semester-II</h2>
        <h3 className="text-xl text-gray-700">Physics</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-3 px-4">
        {notesCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="w-full h-auto bg-gray-100 flex items-center justify-center mb-4 overflow-hidden rounded-md">
                <img
                  src={category.thumbnailSrc}
                  alt={`${category.title} Thumbnail`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <div className="bg-red-100 text-black text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {category.year}
              </div>
              <div className="flex space-x-4 sm:flex sm:space-x-4">
                <button onClick={() => openPdfModal(category.downloadLink)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-xs ">
                  View PDF
                </button>
                <button onClick={() => openTestModal(category)} className="bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md text-xs">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-3 px-4">
          {fileItems.map((file) => (
            <FileCard key={file.id} file={file} openPdfModal={openPdfModal} />
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {isPdfOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-4xl h-[90%] rounded-lg overflow-hidden relative">
            <button
              onClick={closePdfModal}
              className="absolute top-3 right-3 w-14 h-14 bg-gray-200 text-black hover:bg-gray-300 text-4xl font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-xl focus:outline-none"
            >
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
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{selectedCategory?.title} - Mock Test</h2>
                  <div className="text-xl font-semibold text-red-600">⏳ {formatTime(timer)}</div>
                </div>

                {currentQuestion && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {currentQuestionIndex + 1}. {currentQuestion.question}
                    </h3>
                    <div className="flex flex-col space-y-3">
                      {currentQuestion.options.map((option, idx) => {
                        const isSelected = userAnswers[currentQuestionIndex] === option;
                        return (
                          <label
                            key={idx}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-md border hover:bg-blue-50 border-gray-300 transition duration-200 cursor-pointer ${
                              isSelected ? 'bg-blue-100 border-blue-500 font-semibold' : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question_${currentQuestionIndex}`}
                              value={option}
                              checked={isSelected}
                              onChange={() => handleAnswer(currentQuestionIndex, option)}
                              className="form-radio text-blue-600 focus:ring-blue-500"
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span>{currentQuestionIndex + 1} / {totalQuestions}</span>
                  <button
                    onClick={goToNextQuestion}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>

                <div className="flex justify-center mt-8">
                  <button onClick={submitTest} className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md">
                    Submit
                  </button>
                  <button onClick={closeTestModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-md ml-4">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Result</h2>
                <p className="text-xl text-gray-700 mb-4">Your Score: {score}/{totalQuestions}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Answer Key</h3>
                {(selectedCategory?.questions || []).map((q, index) => (
                  <div key={index} className="mb-4 text-left">
                    <p className="font-semibold">{index + 1}. {q.question}</p>
                    <p className={`text-${userAnswers[index] === q.correctAnswer ? 'green' : 'red'}-600`}>
                      Your Answer: {userAnswers[index] || 'Not answered'}
                    </p>
                    <p className="text-green-600">Correct Answer: {q.correctAnswer}</p>
                  </div>
                ))}
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